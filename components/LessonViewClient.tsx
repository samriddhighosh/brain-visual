"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import LessonHeader from '@/components/LessonHeader';
import LessonSidebar from '@/components/LessonSidebar';
import LessonContent from '@/components/LessonContent';
import LessonFooter from '@/components/LessonFooter';
import { useUser } from "@clerk/nextjs";
import { logUserEvent, updateTopicKnowledge, initializeLessonProgress, logLessonProgress } from "@/lib/supabase";

interface LessonViewClientProps {
    initialData: {
        title: string;
        contentHtml: string;
        pageName: string;
        nextLessonUrl?: string;
    };
}

const LessonViewClient = ({ initialData }: LessonViewClientProps) => {
    const [progress, setProgress] = useState(0);
    const [activeSectionId, setActiveSectionId] = useState("");
    const [sections, setSections] = useState<any[]>([]);

    const { user } = useUser();
    const lastSavedProgress = useRef(0);
    const lastSavedSection = useRef("");
    const hasLoggedCompletion = useRef(false);
    const sectionStartTime = useRef<Record<string, number>>({});
    const mainScrollRef = useRef<HTMLDivElement>(null);
    const sectionTitlesRef = useRef<Record<string, string>>({});

    useEffect(() => {
        if (user && initialData.pageName) {
            logUserEvent(user.id, `lesson_started: ${initialData.pageName}`);

            // Initialize lesson structure in DB
            const parser = new DOMParser();
            const doc = parser.parseFromString(initialData.contentHtml, 'text/html');
            const headers = Array.from(doc.querySelectorAll('h2, h3')).map(h => h.textContent || "");

            if (headers.length > 0) {
                initializeLessonProgress(user.id, initialData.pageName, headers);

                // Also store titles in a ref for logging lookups
                const titlesMap: Record<string, string> = {};
                doc.querySelectorAll('h2, h3').forEach(h => {
                    const id = h.textContent?.toLowerCase().replace(/[^\w]/g, '-') || "";
                    titlesMap[id] = h.textContent || "";
                });
                sectionTitlesRef.current = titlesMap;
            }
        }
    }, [user, initialData.pageName, initialData.contentHtml]);

    useEffect(() => {
        // Extract sections from HTML content on the client
        const parser = new DOMParser();
        const doc = parser.parseFromString(initialData.contentHtml, 'text/html');
        const headers = doc.querySelectorAll('h2, h3');

        const extractedSections = [{
            id: 1,
            title: "Main Content",
            progress: 0,
            completed: false,
            isOpen: true,
            items: Array.from(headers).map((h) => ({
                id: h.textContent?.toLowerCase().replace(/[^\w]/g, '-') || "",
                title: h.textContent || "",
                isActive: false,
                completed: false,
                progress: 0
            }))
        }];
        setSections(extractedSections);
    }, [initialData.contentHtml]);

    const handleProgressUpdate = useCallback((overallProgress: number, currentSectionId: string) => {
        setProgress(overallProgress);
        setActiveSectionId(currentSectionId);

        setSections(prev => prev.map(section => {
            const items = section.items || [];
            const activeIndex = items.findIndex(item => item.id === currentSectionId);

            return {
                ...section,
                progress: Math.max(section.progress, overallProgress),
                completed: overallProgress > 95,
                items: items.map((item, index) => ({
                    ...item,
                    isActive: item.id === currentSectionId,
                    completed: item.completed || (activeIndex !== -1 && index < activeIndex) || overallProgress > 98
                }))
            };
        }));

        if (user && (Math.abs(overallProgress - lastSavedProgress.current) > 5 || overallProgress > 98)) {
            updateTopicKnowledge(user.id, initialData.pageName, Math.round(overallProgress));
            lastSavedProgress.current = overallProgress;

            if (overallProgress > 95 && !hasLoggedCompletion.current) {
                logUserEvent(user.id, `lesson_completed: ${initialData.pageName}`);
                hasLoggedCompletion.current = true;
            }
        }

        // Log section-specific progress
        if (user && currentSectionId && currentSectionId !== lastSavedSection.current) {
            const now = Date.now();

            // If we're leaving a section, calculate time spent
            if (lastSavedSection.current && sectionStartTime.current[lastSavedSection.current]) {
                const timeSpent = Math.floor((now - sectionStartTime.current[lastSavedSection.current]) / 1000);

                const sectionTitle = sectionTitlesRef.current[lastSavedSection.current] || lastSavedSection.current;

                logLessonProgress(
                    user.id,
                    initialData.pageName,
                    sectionTitle,
                    0.8,
                    "completed",
                    timeSpent,
                    null,
                    0.7,
                    1
                );
            }

            lastSavedSection.current = currentSectionId;
            sectionStartTime.current[currentSectionId] = now;
        }
    }, [user, initialData.pageName]);

    useEffect(() => {
        return () => {
            if (user && lastSavedSection.current && sectionStartTime.current[lastSavedSection.current]) {
                const now = Date.now();
                const timeSpent = Math.floor((now - sectionStartTime.current[lastSavedSection.current]) / 1000);
                const sectionTitle = sectionTitlesRef.current[lastSavedSection.current] || lastSavedSection.current;

                logLessonProgress(
                    user.id,
                    initialData.pageName,
                    sectionTitle,
                    0.9,
                    "completed",
                    timeSpent,
                    null,
                    0.8,
                    1
                );
            }
        };
    }, [user, initialData.pageName]);

    return (
        <div className="flex flex-1 relative">
            <LessonSidebar
                sections={sections}
                scrollContainerRef={mainScrollRef}
                totalProgress={progress}
            />

            <main className="flex-1 flex flex-col min-h-full">
                <div className="flex-1 overflow-y-auto" ref={mainScrollRef}>
                    <LessonContent
                        title={initialData.title}
                        id={initialData.pageName}
                        contentHtml={initialData.contentHtml}
                        onProgressUpdate={handleProgressUpdate}
                    />
                    <LessonFooter nextLessonUrl={initialData.nextLessonUrl} />
                </div>
            </main>
        </div>
    );
};

export default LessonViewClient;
