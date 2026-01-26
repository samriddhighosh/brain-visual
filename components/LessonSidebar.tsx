"use client";

import React from 'react';
import { ChevronDown, CheckCircle2, Circle, Brain } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface SectionItem {
    id: string;
    title: string;
    isActive: boolean;
    completed: boolean;
    progress: number;
}

interface Section {
    id: number | string;
    title: string;
    progress: number;
    completed: boolean;
    isOpen?: boolean;
    items?: SectionItem[];
}

interface LessonSidebarProps {
    sections: Section[];
    totalProgress?: number;
}

const LessonSidebar = ({ sections }: LessonSidebarProps) => {
    return (
        <aside className="w-[320px] bg-white border-r border-gray-100 h-[calc(100vh-65px)] overflow-y-auto hidden lg:block sticky top-[65px]">
            <div className="p-6">
                {/* Module Header */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6 flex gap-4 items-center">
                    <div className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm">
                        <Brain className="text-purple-600" size={24} />
                    </div>
                    <div>
                        <h3 className="text-gray-900 font-bold text-sm leading-tight">Computational Neuroscience</h3>
                        <p className="text-gray-500 text-[11px] font-medium mt-0.5">Level 3: Advanced Topics</p>
                    </div>
                </div>

                {/* Section List */}
                <div className="space-y-4">
                    {sections?.map((section) => (
                        <div key={section.id} className="space-y-2">
                            <button className="w-full flex items-center justify-between text-left group">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${section.completed ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {section.id}
                                    </div>
                                    <span className={`text-[13px] font-bold ${section.completed || section.isOpen ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900 transition-colors'}`}>
                                        {section.title}
                                    </span>
                                </div>
                                <ChevronDown size={16} className={`text-gray-400 transition-transform ${section.isOpen ? '' : '-rotate-90'}`} />
                            </button>

                            <div className="pl-11 space-y-1">
                                <div className="flex items-center justify-between mb-2">
                                    <Progress value={section.progress} className="h-1.5 w-[80%] bg-gray-100 [&>div]:bg-cyan-500" />
                                    <span className="text-[10px] font-bold text-gray-400">{Math.round(section.progress)}%</span>
                                </div>

                                {section.isOpen && section.items?.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            const element = document.getElementById(item.id);
                                            if (element) {
                                                const offset = 80; // Account for sticky header
                                                const elementPosition = element.getBoundingClientRect().top;
                                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: "smooth"
                                                });
                                            }
                                        }}
                                        className={`flex items-start gap-3 py-2 pr-2 rounded-lg cursor-pointer group transition-all ${item.isActive ? 'bg-purple-50 border-l-2 border-purple-600 -ml-[2px]' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className="mt-0.5">
                                            {item.completed ? (
                                                <CheckCircle2 size={14} className="text-purple-600" />
                                            ) : (
                                                <Circle size={14} className={`${item.isActive ? 'text-purple-600' : 'text-gray-300'}`} />
                                            )}
                                        </div>
                                        <div>
                                            <p className={`text-[11px] leading-relaxed font-medium ${item.isActive ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900 transition-colors'}`}>
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default LessonSidebar;
