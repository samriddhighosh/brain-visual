"use client"
import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import { Slider } from "@/components/ui/slider"

const BrainModel = () => {
    const [sliderValue, setSliderValue] = useState(1)
  
  return (
    <main>
        <Slider 
        defaultValue={[sliderValue]} 
        max={4} 
        step={1} 
        onValueChange={(value)=> setSliderValue(value[0])} 
        className="
            w-full
            [&_[role=slider]]:bg-blue-300
            [&_[role=slider]]:border-none
            [&>span>span]:bg-blue-900 
            [&>span]:bg-gray-200    
        " />
        <DisplayComponent sliderValue={sliderValue}/>
    </main>
  );
    
    
  
}

function DisplayComponent({ sliderValue }: { sliderValue: number }) {
  return (
    <div className='pt-6'>
        {sliderValue==1 &&  
        <div>
            <h2 className='text-[24px] font-bold'>1. Preclinical Stage (No outward symptoms)</h2>
            <p>
                In the earliest stage of Alzheimer's, changes begin in the brain long before any symptoms appear.
                 Amyloid-beta plaques start to form between neurons, and tau proteins begin tangling inside them.
                These biological processes silently disrupt communication between brain cells, particularly in the
                 hippocampus and entorhinal cortex, which are essential for memory and navigation. Despite these changes, individuals appear cognitively normal and function independently. This stage can last for years, even decades.


            </p>
            <Spline
            scene="https://prod.spline.design/M1Mqg5N6fXYL9Y4L/scene.splinecode" 
            /> 
        </div>
        }
        {sliderValue==2 &&
        <div>
            <h2 className='text-[24px] font-bold'>2. Mild Alzheimer’s Disease (Early Stage)</h2>
            <p>
                As the disease progresses, subtle symptoms begin to surface. Memory loss becomes noticeable, 
                particularly the ability to recall recent conversations or events. Individuals may struggle to 
                find the right words, organize tasks, or manage time. These changes often affect the hippocampus
                 and surrounding areas, which continue to shrink. Although individuals can still function 
                 independently, close friends or family might begin to observe personality changes, difficulty 
                 making plans, or increased confusion.
            </p>
            <Spline
                scene="https://prod.spline.design/Tcd8aMQ-6bKI2LEi/scene.splinecode" 
            />
        </div>
        }
        {sliderValue==3 &&
        <div>
            <h2 className='text-[24px] font-bold'>3. Moderate Alzheimer’s Disease (Middle Stage)</h2>
            <p>
                In the moderate stage, damage spreads to additional parts of the brain such as the frontal and 
                parietal lobes. This results in greater cognitive decline and behavioral symptoms. Individuals 
                often become disoriented, have trouble recognizing familiar people or places, and may experience
                 difficulty with language, reading, or writing. They may become suspicious or withdrawn and 
                 require more assistance with daily activities such as dressing, bathing, or managing medications. 
                 Emotional changes like anxiety, frustration, or wandering may also occur.


            </p>
            <Spline
                scene="https://prod.spline.design/8Nfc-uCpHxZJ7fSO/scene.splinecode" 
            />
        </div>
        }
        {sliderValue==4 &&
        <div>
            <h2 className='text-[24px] font-bold'>4. Severe Alzheimer’s Disease (Late Stage)</h2>
            <p>
                In the final stage of the disease, there is widespread shrinkage of the brain and loss of 
                function in nearly all areas. Neurons die in critical brain regions, including those that 
                control movement, speech, and vital body functions. Individuals often lose the ability to 
                speak coherently, recognize loved ones, or control physical movements. They become completely
                dependent on caregivers for basic activities and may be confined to bed. Eventually, the brain
                is unable to regulate essential functions, such as swallowing or breathing.
            </p>
            <Spline
                scene="https://prod.spline.design/8Nfc-uCpHxZJ7fSO/scene.splinecode" 
            />
        </div>
        }
        
    </div>
  );
}

export default BrainModel