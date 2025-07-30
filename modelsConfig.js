import dynamic from 'next/dynamic';

export const models = [
  {
    id: 'brain-model',
    title: 'Brain Models',
    description: "An interactive brain simulation",
    leftbio: [
    {
      name: "• Frontal Lobe",
      description: "Responsible for decision making and motor function.",
    },
    {
      name: "• Parietal Lobe",
      description: "Processes sensory information like touch and spatial awareness.",
    },
    {
      name: "• Temporal Lobe",
      description: "Involved in memory and auditory processing.",
    },
    {
      name: "• Occipital Lobe",
      description: "Handles visual information.",
    },
    {
      name: "• Cerebellum",
      description: "Coordinates voluntary movement.",
    },
    {
      name: "• Brainstem",
      description: "Controls basic life functions like breathing and heartbeat.",
    },
  ],
  topbio:"There is nothing here for right now we are trying to fetch data, thank you for yoru patience!",
bottombio: "The hippocampus is the brain’s memory center and is one of the first areas to suffer damage in Alzheimer's, leading to disorientation and memory loss.",
instructions: 'here are the instructions',    
component: dynamic(() => import('@/components/models/brain.tsx')),
  },
  {
    id: 'alzheimers_slider',
    title: 'Alzheimers Progression',
    description: "Interactive progression of Alzheimers model",
    leftbio: [
    {
      name: "1. Preclinical Stage",
      description: "No symptoms yet, but changes in the brain begin years before noticeable signs.",
    },
    {
      name: "2. Mild Cognitive Impairment (MCI)",
      description: "Slight but measurable memory or thinking problems. People can usually still function independently.",
    },
    {
      name: "3. Mild Alzheimer's Disease",
      description: "Memory loss increases. People may get lost, repeat questions, or struggle with tasks like managing finances.",
    },
    {
      name: "4. Moderate Stage",
      description: "Greater memory loss and confusion. Daily tasks require assistance. Personality and behavior may change.",
    },
    {
      name: "5. Severe Stage",
      description: "Individuals lose the ability to respond to their environment, speak, or control movement. Full-time care is needed.",
    },
  ],
  topbio:"There is nothing here for right now we are trying to fetch data, thank you for yoru patience!",
bottombio: "The sense of smell is often one of the first things affected by Alzheimer’s. Researchers believe this early change may be linked to damage in the olfactory bulb and hippocampus, areas crucial for smell and memory!",
instructions: 'here are the instructions',      
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