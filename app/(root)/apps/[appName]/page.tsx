import Navbar from '@/components/navbar'
import React from 'react'
import { notFound } from 'next/navigation';
import { models } from '@/modelsConfig';


const page = ({params}) => {
  
  const model = models.find((m) => m.id === params.appName);

  if (!model) return notFound();

  const ModelComponent = model.component;
  return (
    <div className='flex max-w-full bg-[#F3F7FF]'>
      <Navbar/>
      <div className='px-20 py-8 w-4/5'>
        <h2 className='font-semibold text-left text-[40px] text-blue-900'>{model.title}</h2>
        <p className='text-[20px] text-gray-800'>{model.description}</p>
        <div className='grid lg:grid-cols-2 gap-8 mt-8 mb-8'>
          <div className='bg-white px-10 py-6 rounded-2xl'>
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            List goes here
            
          </div>
          <div className='flex flex-col gap-8 h-full'>
            <div className='bg-white px-10 py-6 pr-20 rounded-2xl'>
              Data goes here
              Data goes here
              Data goes here
              
            </div>
            <div className='bg-white px-10 py-6 pr-20 rounded-2xl'>
              Quick fact or backround info goes here
            </div>
          </div>
        </div>
        <div className='pb-4 text-[18px] text-gray-400'>
          Instructions:
        </div>
        <ModelComponent/>
      </div>
    </div>
  )
}

export default page