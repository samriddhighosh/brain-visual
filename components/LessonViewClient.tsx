"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import LessonHeader from '@/components/LessonHeader';
import LessonSidebar from '@/components/LessonSidebar';
import LessonContent from '@/components/LessonContent';
import LessonFooter from '@/components/LessonFooter';
import { useUser } from "@clerk/nextjs";
import { logUserEvent, updateTopicKnowledge } from "@/lib/supabase";

interface LessonViewClientProps {
    initialData: {
        title: string;
        contentHtml: string;
        pageName: string;
    };
}

const LessonViewClient = ({ initialData }: LessonViewClientProps) => {
    const [progress, setProgress] = useState(0);
    const [activeSectionId, setActiveSectionId] = useState("");
    const [sections, setSections] = useState<any[]>([]);

    const { user } = useUser();
    const lastSavedProgress = useRef(0);
    const hasLoggedCompletion = useRef(false);

    useEffect(() => {
        if (user && initialData.pageName) {
            logUserEvent(user.id, `lesson_started: ${initialData.pageName}`);
        }
    }, [user, initialData.pageName]);

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

        // Update active state in sections locally
        setSections(prev => prev.map(section => ({
            ...section,
            progress: overallProgress,
            completed: overallProgress > 95,
            items: section.items?.map((item: any) => ({
                ...item,
                isActive: item.id === currentSectionId,
                completed: false
            }))
        })));

        // Sync with Supabase (Throttled: only if progress jumped by 5% or reached 100%)
        if (user && (Math.abs(overallProgress - lastSavedProgress.current) > 5 || overallProgress > 98)) {
            updateTopicKnowledge(user.id, initialData.pageName, Math.round(overallProgress));
            lastSavedProgress.current = overallProgress;

            if (overallProgress > 95 && !hasLoggedCompletion.current) {
                logUserEvent(user.id, `lesson_completed: ${initialData.pageName}`);
                hasLoggedCompletion.current = true;
            }
        }
    }, [user, initialData.pageName]);

    return (
        <div className="flex flex-1 relative">
            <LessonSidebar sections={sections} />

            <main className="flex-1 flex flex-col min-h-full">
                <div className="flex-1 overflow-y-auto">
                    <LessonContent
                        title={initialData.title}
                        id={initialData.pageName}
                        contentHtml={initialData.contentHtml}
                        onProgressUpdate={handleProgressUpdate}
                    />
                    <LessonFooter />
                </div>
            </main>
        </div>
    );
};

export default LessonViewClient;
