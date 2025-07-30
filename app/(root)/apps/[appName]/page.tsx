import Navbar from '@/components/navbar'
import React from 'react'
import { notFound } from 'next/navigation';
import { models } from '@/modelsConfig';

const page = ({ params }: { params: { appName: string } }) => {
  const model = models.find((m) => m.id === params.appName)

  if (!model) return notFound();

  const ModelComponent = model.component;
  return (
    <div className='flex max-w-full bg-[#F3F7FF]'>
      <Navbar/>
      <div className='px-20 py-8 w-4/5'>
        <h2 className='font-semibold text-left text-[40px] text-blue-900'>{model.title}</h2>
        <p className='text-[20px] text-gray-800'>{model.description}</p>
        <div className='grid lg:grid-cols-2 gap-8 my-8'>
          <div className='bg-white px-10 py-6 rounded-2xl overflow-y-auto'>
            <h2 className='text-[18px] font-semibold mb-4 border-b border-b-gray-200 pb-2'>Basic Information:</h2>
            {Array.isArray(model.leftbio) && model.leftbio.map((region) => (
              <div key={region.name}>
                <h3 className="font-medium text-[15px]">{region.name}</h3>
                <p className="text-gray-600 text-[14px] pb-1">{region.description}</p>
              </div>
            ))}
            
          </div>
          <div className='flex flex-col gap-8 h-full'>
            <div className='bg-white px-10 py-6 pr-20 rounded-2xl'>
              {model.topbio}
              
            </div>
            <div className='bg-white px-10 py-6 pr-20 rounded-2xl'>
              <h2 className='text-[18px] font-semibold mb-4 border-b border-b-gray-200 pb-2'>Did you know?</h2>
              <h3 className='text-[14px]'>{model.bottombio}</h3>
            </div>
          </div>
        </div>
        <div className='pb-4 text-[18px] text-gray-400'>
          Instructions: {model.instructions}
        </div>
        <ModelComponent/>
      </div>
    </div>
  )
}

export default page