import dynamic from 'next/dynamic';

export const models = [
  {
    id: 'brain-model',
    title: 'Brain Model',
    description: "Here's a brain model",
    component: dynamic(() => import('@/components/models/brain.tsx')),
  },
  {
    id: 'alziemers_slider',
    title: 'Alziemers Progression',
    description: "Here's a brain model",
    component: dynamic(() => import('@/components/models/alziemers_slider.tsx')),
  },
  // {
  //   id: 'alzheimers-sim',
  //   title: "Alzheimer's Simulation",
  //   description: 'An interactive simulation of neuron degeneration in Alzheimer\'s.',
  //   component: dynamic(() => import('@/components/models/Alzheimers')),
  // },
  // {
  //   id: 'dopamine-rush',
  //   title: 'Dopamine Rush Game',
  //   description: 'Click-based game showing how reward systems light up.',
  //   component: dynamic(() => import('@/components/models/DopamineGame')),
  // }
];