"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface LessonFooterProps {
    nextLessonUrl?: string;
}

const LessonFooter = ({ nextLessonUrl }: LessonFooterProps) => {
    return (
        <footer className="mt-auto border-t border-[#1E293B] bg-[#0a0a1f] p-6 flex items-center justify-between">
            <Link href="/library" className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors font-medium">
                <ChevronLeft size={20} />
                <span>Previous Lesson</span>
            </Link>

            {nextLessonUrl ? (
                <Link href={nextLessonUrl}>
                    <button className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#6D28D9] transition-all shadow-lg shadow-purple-900/20">
                        <span>Next Lesson</span>
                        <ChevronRight size={20} />
                    </button>
                </Link>
            ) : (
                <button disabled className="bg-gray-700 text-gray-400 px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 cursor-not-allowed">
                    <span>Final Lesson</span>
                    <ChevronRight size={20} />
                </button>
            )}
        </footer>
    );
};

export default LessonFooter;
