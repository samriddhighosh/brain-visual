"use client";

import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import { models } from '@/modelsConfig';
import { Brain, ChevronRight, Activity, Zap } from 'lucide-react';
import dynamic from 'next/dynamic';

// Directly import components with ssr: false to prevent Next.js 15 hydration/async component errors
const BrainModelRaw = dynamic(() => import('@/components/models/brain'), { ssr: false });
const AlzheimerSliderRaw = dynamic(() => import('@/components/models/alziemers_slider'), { ssr: false });

export default function InteractiveHub() {
    const [selectedModelId, setSelectedModelId] = useState(models[0].id);
    const selectedModel = models.find(m => m.id === selectedModelId) || models[0];

    const renderModel = () => {
        if (selectedModelId === 'brain-model') return <BrainModelRaw />;
        if (selectedModelId === 'alzheimers_slider') return <AlzheimerSliderRaw />;
        return <div className="p-8 text-slate-500">Model not found</div>;
    };

    return (
        <div className="flex bg-[#F8FAFC] min-h-screen">
            <Navbar />
            
            <div className="flex-1 flex flex-col md:flex-row h-screen overflow-hidden">
                {/* Hub Sidebar - Selection */}
                <aside className="w-full md:w-80 bg-white border-r border-gray-200 flex flex-col pt-8">
                    <div className="px-6 mb-8">
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Interactive Hub</h1>
                        <p className="text-sm text-slate-500">Select an anatomical module or simulation to explore in 3D.</p>
                    </div>

                    <div className="px-4 space-y-2 overflow-y-auto pb-8 scrollbar-hide">
                        <h2 className="px-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Anatomical Modules</h2>
                        {models.map((model) => (
                            <button
                                key={model.id}
                                onClick={() => setSelectedModelId(model.id)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                                    selectedModelId === model.id 
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                                    : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                                }`}
                            >
                                <div className={`p-2 rounded-lg ${
                                    selectedModelId === model.id ? 'bg-blue-500' : 'bg-slate-100'
                                }`}>
                                    <Brain size={18} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-sm font-semibold leading-tight">{model.title}</h3>
                                    <p className={`text-[10px] ${selectedModelId === model.id ? 'text-blue-100' : 'text-slate-400'}`}>
                                        Interactive Model
                                    </p>
                                </div>
                                {selectedModelId === model.id && <ChevronRight size={16} className="ml-auto" />}
                            </button>
                        ))}

                        <div className="mt-8 pt-8 border-t border-slate-100">
                             <h2 className="px-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Future Modules</h2>
                             <div className="px-2 space-y-4 opacity-50 select-none">
                                <div className="flex items-center gap-3 grayscale">
                                    <Zap size={16} className="text-slate-400" />
                                    <span className="text-sm font-medium text-slate-600">Dopamine Pathway</span>
                                </div>
                                <div className="flex items-center gap-3 grayscale">
                                    <Activity size={16} className="text-slate-400" />
                                    <span className="text-sm font-medium text-slate-600">Synaptic Web</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area - 3D Viewer */}
                <main className="flex-1 flex flex-col relative bg-slate-50">
                    <div className="absolute inset-0 z-0">
                        {renderModel()}
                    </div>

                    {/* HUD / Controls Panel Overlay */}
                    <div className="absolute bottom-8 right-8 z-10">
                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-80 md:w-96 border border-white/50">
                            <div className="flex items-center gap-3 mb-4">
                                <h2 className="text-xl font-bold text-slate-800">{selectedModel.title}</h2>
                            </div>
                            <p className="text-sm text-slate-600 mb-6">{selectedModel.description}</p>
                            
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Quick Info</h3>
                                    <p className="text-xs text-slate-600 italic">
                                        {selectedModel.bottombio}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
