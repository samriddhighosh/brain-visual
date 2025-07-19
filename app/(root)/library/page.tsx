import { getCategorisedArticles } from '@/articles'
import ArticleItemList from '@/components/ArticleListItems'
import Navbar from '@/components/navbar'
import React from 'react'

const page = () => {
  const articles = getCategorisedArticles()

  console.log(articles)
  return (

    <div className="flex max-w-full bg-[#F3F7FF]">
      <Navbar/>
      <div className='flex-col flex w-4/5 pt-8 px-6'>
        {articles !== null && 
          Object.keys(articles).map((article)=>(
            <ArticleItemList
            category={article}
            articles={articles[article]}
            key={article}
            />
          ))}
        {/* <div>
        <h2 className='w-full lg:w-1/2 mb-4 text-blue-900 text-[28px] font-bold'>Top Picks for you</h2>
         <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          <div className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <h3 className='text-[18px] font-medium'>Title</h3>
                <p className='text-[14px]'>Click here</p>
              </div>
            </div>
          <div className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <h3 className='text-[18px] font-medium'>Title</h3>
                <p className='text-[14px]'>Click here</p>
              </div>
            </div>
          <div className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <h3 className='text-[18px] font-medium'>Title</h3>
                <p className='text-[14px]'>Click here</p>
              </div>
            </div>
          <div className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <h3 className='text-[18px] font-medium'>Title</h3>
                <p className='text-[14px]'>Click here</p>
              </div>
            </div>
          <div className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <h3 className='text-[18px] font-medium'>Title</h3>
                <p className='text-[14px]'>Click here</p>
              </div>
            </div>
          <div className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <h3 className='text-[18px] font-medium'>Title</h3>
                <p className='text-[14px]'>Click here</p>
              </div>
            </div>
          
          
         </div>
         </div> */}
      </div>
      
      
  
    </div>
  )
}

export default page