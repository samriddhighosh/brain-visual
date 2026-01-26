"use client";

import React, { useEffect, useRef } from 'react';
import { Clock, BarChart2 } from 'lucide-react';

interface LessonContentProps {
    title: string;
    id: string;
    contentHtml: string;
    onProgressUpdate: (progress: number, activeSectionId: string) => void;
}

const LessonContent = ({ title, id, contentHtml, onProgressUpdate }: LessonContentProps) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;

            const sections = contentRef.current.querySelectorAll('h2, h3');
            const scrollPosition = window.scrollY + 100; // Offset for header

            let currentSectionId = "";
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (scrollPosition >= sectionTop) {
                    currentSectionId = section.id;
                }
            });

            // Calculate overall progress based on scroll position in the content area
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;

            onProgressUpdate(progress, currentSectionId);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [onProgressUpdate]);

    // We need to inject IDs into the HTML for intersection observer to work
    // This is a simple way to do it for demonstration, in a real app you'd process the MD
    const processedHtml = contentHtml.replace(/<h(2|3)>(.*?)<\/h\1>/g, (match, level, text) => {
        const sectionId = text.toLowerCase().replace(/[^\w]/g, '-');
        return `<h${level} id="${sectionId}">${text}</h${level}>`;
    });

    return (
        <div className="flex-1 max-w-4xl mx-auto px-8 py-12 bg-white" ref={contentRef}>
            {/* Breadcrumb */}
            <div className="text-[10px] font-bold text-gray-400 gap-2 uppercase tracking-wider mb-2 flex items-center">
                <span className="text-purple-600">Lesson</span>
                <span>•</span>
                <span>{id}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                {title}
            </h2>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 mb-10">
                <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-gray-300" />
                    <span>25 min read</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <BarChart2 size={14} className="text-gray-300" />
                    <span>Advanced</span>
                </div>
            </div>

            {/* Main Content Area */}
            <article
                className="prose prose-slate max-w-none text-gray-700 article"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
            />
        </div>
    );
};

export default LessonContent;
