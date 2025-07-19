
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col bg-white px-12 py-24 top-0 gap-10 text-left">
        <Link href="/">Dashboard</Link>
        <Link href="/apps">Apps</Link>
        <p>Interactivity Hub</p>
        <Link href="/library">Library</Link>
        <p>Quiz</p>
      </div>
  )
}

export default Navbar