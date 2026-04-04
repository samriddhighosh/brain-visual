"use client"
import Navbar from '@/components/navbar'
import Link from 'next/link'
import React from 'react'
import { models } from '@/modelsConfig';
import { Brain, ChevronRight, Activity, Zap } from 'lucide-react';

const InteractiveHub = () => {
const iconMap:Record<string,any>={
'brain-model':Brain,
'alzheimers_slider':Activity
}

return (
<div className="flex max-w-full bg-[#F3F7FF]">
<Navbar/>

<div className='flex-col flex w-4/5 pt-8 px-6' >
<div className='mb-6'>
<h1 className='text-[32px] font-bold text-blue-900'>Interactive Hub</h1>
<p className='text-[16px] text-gray-600 mt-2'>Explore 3D models and interactive simulations of the brain</p>
</div>

<div className='grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
{
models.map(({id, title, description})=>{
const Icon=iconMap[id]||Zap
return (
<div key={id} className='flex gap-4 rounded-xl bg-white border-blue-300 hover:border p-5 pt-6 shadow-2xs'>
<Icon className='size-14 p-3 bg-blue-300 rounded-xl'/>
<div>
<h3 className='text-[20px] font-semibold leading-6'>{title}</h3>
<p className='text-[14px] pb-2 mt-1'>{description}</p>
<div className='flex items-center'>
<Link href={`/apps/${id}`} className='text-[13px] text-blue-900 hover:underline'>Launch Model</Link>
<ChevronRight size={14} className='text-blue-900'/>
</div>
</div>
</div>
)
})
}

<div className='flex gap-4 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-dashed border-blue-300 p-5 pt-6'>
<Brain className='size-14 p-3 bg-blue-200 rounded-xl text-blue-500'/>
<div>
<h3 className='text-[20px] font-semibold leading-6 text-blue-800'>More Coming Soon</h3>
<p className='text-[14px] pb-2 mt-1 text-gray-600'>New anatomy modules will be added regularly</p>
<div className='flex items-center'>
<span className='text-[13px] text-blue-600'>Stay tuned</span>
</div>
</div>
</div>
</div>

<div className='mt-10'>
<h2 className='text-[24px] font-bold text-blue-900 mb-4'>Featured Collections</h2>
<div className='grid lg:grid-cols-3 gap-4'>
<div className='bg-white rounded-2xl p-6 shadow-2xs'>
<Activity className='size-10 text-blue-500 mb-3'/>
<h3 className='text-[16px] font-semibold mb-2'>Neurodegenerative Diseases</h3>
<p className='text-[13px] text-gray-600'>Interactive models showing disease progression and brain changes</p>
<Link href="/apps/alzheimers_slider" className='text-[12px] text-blue-900 hover:underline mt-2 inline-block'>Explore →</Link>
</div>
<div className='bg-white rounded-2xl p-6 shadow-2xs'>
<Brain className='size-10 text-purple-500 mb-3'/>
<h3 className='text-[16px] font-semibold mb-2'>Brain Anatomy</h3>
<p className='text-[13px] text-gray-600'>Detailed 3D exploration of brain structures and regions</p>
<Link href="/apps/brain-model" className='text-[12px] text-blue-900 hover:underline mt-2 inline-block'>Explore →</Link>
</div>
<div className='bg-white rounded-2xl p-6 shadow-2xs'>
<Zap className='size-10 text-orange-500 mb-3'/>
<h3 className='text-[16px] font-semibold mb-2'>Future Modules</h3>
<p className='text-[13px] text-gray-600'>Dopamine pathways, neuron simulations, and more</p>
<span className='text-[12px] text-gray-400 mt-2 inline-block'>Coming Soon</span>
</div>
</div>
</div>
</div>

</div>
)
}

export default InteractiveHub
