import Navbar from '@/components/navbar'
import React from 'react'
import { notFound } from 'next/navigation';
import { models } from '@/modelsConfig';
import ModelViewer from '@/components/ModelViewer';

const page = async ({ params }: { params: Promise<{ appName: string }> }) => {
const {appName}=await params
const model = models.find((m) => m.id === appName)

if (!model) return notFound();

return (
<div className='flex max-w-full bg-[#F3F7FF]'>
<Navbar/>
<div className='px-20 py-8 w-4/5'>
<h2 className='font-semibold text-left text-[40px] text-blue-900'>{model.title}</h2>
<p className='text-[20px] text-gray-800'>{model.description}</p>
<ModelViewer modelId={model.id}/>
</div>
</div>
)
}

export default page
