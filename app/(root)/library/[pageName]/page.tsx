import LessonHeader from '@/components/LessonHeader'
import LessonViewClient from '@/components/LessonViewClient'
import React from 'react'
import { getArticlesData, getAllArticles } from '@/articles';

const Page = async ({ params }: { params: Promise<{ pageName: string }> }) => {
  const { pageName } = await params;
  const articleData = await getArticlesData(pageName);

  const allArticles = getAllArticles();
  const currentIndex = allArticles.findIndex(a => a.id === pageName);
  const nextArticle = allArticles[currentIndex + 1];
  const nextLessonUrl = nextArticle ? `/library/${nextArticle.id}` : undefined;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <LessonHeader />
      <LessonViewClient
        initialData={{
          title: articleData.title,
          contentHtml: articleData.contentHtml,
          pageName: pageName,
          nextLessonUrl: nextLessonUrl
        }}
      />
    </div>
  );
};

export default Page;