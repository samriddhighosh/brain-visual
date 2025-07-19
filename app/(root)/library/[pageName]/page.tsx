import Navbar from '@/components/navbar'
import React from 'react'
import { ArrowLeftIcon } from 'lucide-react';
import { getArticlesData } from '@/articles';
import Link from 'next/link';

// interface PageProps {
//   params: {
//     pageName: string
//   }
// }

const page = async ({params} ) => {
  const articleData = await getArticlesData(params.pageName)

  // const paper = papers.find((p) => p.id === params.pageName);

  // if (!paper) return notFound();

  return (
    <div className='flex max-w-full bg-[#F3F7FF]'>
      <Navbar/>
      <div className='px-20 py-8 w-4/5'>
        <Link href={"/library"} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20}/>
          <p>Back to Home</p>
        </Link>
        <p>{articleData.date.toString()}</p>
        <article className='article' dangerouslySetInnerHTML={{__html: articleData.contentHtml}}/>
        
      </div>
    </div>
  )
}


export default page