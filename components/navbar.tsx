
import Link from 'next/link'
import React from 'react'
import { LayoutDashboard, BrainCircuit, BookOpenText, Puzzle, GraduationCap } from 'lucide-react'

const Navbar = () => {
  return (
    <div className="flex flex-col bg-white top-0 gap-4 text-left min-h-screen px-4 py-14">
      <div className='flex gap-2 py-3 px-4 rounded-md hover:bg-blue-300 hover:text-white'>
        <LayoutDashboard/>
        <Link href="/" className='text-[15px] font-medium place-self-center-safe'>Dashboard</Link>
      </div>
      <div className='flex gap-2 py-3 px-4 rounded-md hover:bg-blue-300 hover:text-white'>
        <BrainCircuit/>
        <Link href="/apps" className='text-[15px] font-medium place-self-center-safe'>Apps</Link>
      </div>
      <div className='flex gap-2 py-3 px-4 rounded-md hover:bg-blue-300 hover:text-white'>
        <BookOpenText/>
        <Link href="/library" className='text-[15px] font-medium place-self-center-safe'>Library</Link>
      </div>
      <div className='flex gap-2 py-3 px-4 rounded-md hover:bg-blue-300 hover:text-white'>
        <Puzzle/>
        <Link href="/interactive-hub" className='text-[15px] font-medium place-self-center-safe'>Interactive Hub</Link>
      </div>
      <div className='flex gap-2 py-3 px-4 rounded-md hover:bg-blue-300 hover:text-white'>
        <GraduationCap/>
        <Link href="/quiz" className='text-[15px] font-medium place-self-center-safe'>Quiz</Link>
      </div>
      
      </div>
  )
}

export default Navbar