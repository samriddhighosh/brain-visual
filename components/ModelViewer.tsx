"use client"
import React from 'react'
import Spline from '@splinetool/react-spline'
import AlziemersSlider from '@/components/models/alziemers_slider'

export default function ModelViewer({modelId}:{modelId:string}){
if(modelId==='alzheimers_slider'){
return <AlziemersSlider/>
}
if(modelId==='brain-model'){
return <div className='w-full h-[600px] rounded-2xl overflow-hidden'><Spline scene="https://prod.spline.design/VXeJp3ZBwYutwTh4/scene.splinecode"/></div>
}
return <div>Model not found</div>
}
