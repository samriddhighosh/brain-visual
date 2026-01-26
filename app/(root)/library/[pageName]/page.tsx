import LessonHeader from '@/components/LessonHeader'
import LessonViewClient from '@/components/LessonViewClient'
import React from 'react'
import { getArticlesData } from '@/articles';

const Page = async ({ params }: { params: Promise<{ pageName: string }> }) => {
  const { pageName } = await params;
  const articleData = await getArticlesData(pageName);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <LessonHeader />
      <LessonViewClient
        initialData={{
          title: articleData.title,
          contentHtml: articleData.contentHtml,
          pageName: pageName
        }}
      />
    </div>
  );
};

export default Page;