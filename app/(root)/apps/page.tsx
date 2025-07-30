import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import { models } from '@/modelsConfig';
import { Brain, Search } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Apps = () => {
  return (
    <div className="flex max-w-full bg-[#F3F7FF]">
      <Navbar/>
      
      <div className='flex-col flex w-4/5 pt-8 px-6' >
        <div className='flex bg-gray-50 py-2 px-6 items-center rounded-2xl shadow-sm border-1 border-gray-200 hover:border-3 hover:border-gray-200 hover:outline-gray-300'>
          <input type="email" placeholder="Start Searching..." className='text-[14px] outline-none bg-transparent flex-grow'  />
          <Search className='place-self-end text-gray-500' size={20}/>
        </div>
        
        {/* <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8'>
          {
          models.map(({id, title})=>(
            <div key={id} className='border-1 border-blue-900 rounded-2xl pb-2 h-[190px]'>
              <p className='h-1/2 bg-gray-300 pb-2 rounded-t-2xl'/>
              <div className='pl-2 flex-col flex'>
                <p className='text-[20px] pt-2 font-medium'>{title}</p>
                <Link href={`apps/${id}`} className='text-[14px]'>Click here</Link>
              </div>
            </div>
              
          ))
          }
        </div> */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 pt-8'>
          {
          models.map(({id, title, description})=>(
            <div key={id} className='flex gap-4 rounded-xl bg-white border-blue-300 hover:border p-3 pt-4 shadow-2xs'>
            <Brain className='size-13 p-3 bg-blue-300 rounded-xl items'/>
            <div>
              <h3 className='text-[18px] font-semibold leading-6'>{title}</h3>
              <p className='text-[14px] pb-1'>{description}</p>
              <div className='flex items-center'>
                <Link href={`apps/${id}`} className='text-[12px] text-blue-900 hover:underline'>Click here</Link>
                <ChevronRight size={12} className='text-blue-900'/>
              </div>
            </div>
          </div>
              
          ))
          }
        </div>
        <div className='flex-col flex pt-8'>
            <h2 className='w-full lg:w-1/2 mb-2 text-blue-900 text-[28px] font-bold '>Our Marketplace</h2>
            <div className='flex w-full bg-gray-200 h-[400px] rounded-2xl items-center justify-center'>
              <h3 className='text-[20px]'>Coming Soon...</h3>
            </div>
            {/* <div className='flex gap-8 w-full'>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-3/4'></p>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-1/4'></p>
            </div>
            <div className='flex gap-8 w-full pt-8'>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-1/3'></p>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-2/3'></p>
            </div> */}

        </div>
     </div> 
      
    </div>
  )
}

export default Apps