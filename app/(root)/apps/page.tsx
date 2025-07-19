import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import { models } from '@/modelsConfig';

const Apps = () => {
  return (
    <div className="flex max-w-full bg-[#F3F7FF]">
      <Navbar/>
      
      <div className='flex-col flex w-4/5 pt-8 px-6 ' >
        <div className='bg-gray-200 rounded-4xl w-full h-10 mb-10'></div>
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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
          {
          models.map(({id, title})=>(
            <div key={id} className='flex gap-6 rounded-2xl pb-2 h-[80px] border-blue-300 hover:border'>
            <p className='size-20 bg-gray-300 rounded-2xl'></p>
            <div>
              <h3 className='text-[20px] font-medium'>{title}</h3>
              <Link href={`apps/${id}`} className='text-[16px]'>Click here</Link>
            </div>
          </div>
              
          ))
          }
        </div>
        <div className='flex-col flex pt-8'>
            <h2 className='w-full lg:w-1/2 mb-2 text-blue-900 text-[28px] font-bold '>Our Marketplace</h2>
            <div className='flex gap-8 w-full'>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-3/4'></p>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-1/4'></p>
            </div>
            <div className='flex gap-8 w-full pt-8'>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-1/3'></p>
              <p className='h-[200px] rounded-2xl bg-gray-300 w-2/3'></p>
            </div>

        </div>
     </div> 
      
    </div>
  )
}

export default Apps