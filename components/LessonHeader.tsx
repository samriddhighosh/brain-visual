"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';

const LessonHeader = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-[#0a0a1f] border-b border-[#1E293B] sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="NeuraVia Logo"
                    width={64}
                    height={64}
                    className="rounded-lg object-contain"
                />
                <Link href="/">
                    <h1 className="text-white font-bold text-xl cursor-pointer">NeuraVia Academy</h1>
                </Link>
            </div>

            <div className="flex items-center gap-6">
                <Link href="/library" className="flex items-center gap-2 text-[#94A3B8] hover:text-white transition-colors">
                    <BookOpen size={18} />
                    <span className="text-sm font-medium">Lessons</span>
                </Link>
                <div className="flex items-center">
                    <UserButton afterSignOutUrl="/sign-in" />
                </div>
            </div>
        </header>
    );
};

export default LessonHeader;
