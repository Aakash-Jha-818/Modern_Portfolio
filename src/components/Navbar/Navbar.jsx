import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'
import { MoveUpRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0  w-full z-50 flex items-center justify-between md:justify-around p-2 bg-[#070B18] text-white shadow-md">
      <h1 className="font-bold text-[12px] flex items-center">
        <span>
          <ReactSVG
            src="/code-svgrepo-com.svg"
            beforeInjection={(svg) => {
              svg.setAttribute('style', 'width: 40px; height: 40px;');
              const paths = svg.querySelectorAll('path');
              paths.forEach(path => path.setAttribute('fill', 'blue'));
            }}
          />
        </span>
        Aakash Jha
      </h1>

      <nav className="flex">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7">
          <li><a href="#" className="hover:opacity-70 transition">Home</a></li>
          <li><a href="#About" className="hover:opacity-70 transition">About</a></li>
          <li><a href="#Skills" className="hover:opacity-70 transition">Skills</a></li>
          <li><a href="#Projects" className="hover:opacity-70 transition">Projects</a></li>
          <li><a href="#Contact" className="hover:opacity-70 transition">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-between h-5 w-6 z-50 p-0.5"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-full bg-white transform transition duration-300 origin-left ${isOpen ? 'rotate-45' : ''}`}></span>
          <span className={`h-0.5 w-full bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-full bg-white transform transition duration-300 origin-left ${isOpen ? '-rotate-45' : ''}`}></span>
        </button>
      </nav>

      <button className="hidden md:block">
        <a href="#Contact" className="bg-blue-500 p-2 rounded-md flex items-center gap-2 text-sm hover:bg-blue-600 transition">
          Hire Me <MoveUpRight size={15} />
        </a>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-14 h-[calc(100vh-56px)] left-0 w-full bg-[#070B18] flex flex-col text-white items-center gap-6 py-8 z-40 shadow-md">
          <li><a href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Home</a></li>
          <li><a href="#About" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">About</a></li>
          <li><a href="#Skills" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Skills</a></li>
          <li><a href="#Projects" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Projects</a></li>
          <li><a href="#Contact" onClick={() => setIsOpen(false)} className="text-lg font-medium hover:text-blue-400 transition">Contact</a></li>
          <li><a href="#Contact" onClick={() => setIsOpen(false)} className="text-lg font-medium bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">Hire Me</a></li>
        </ul>
      )}
    </div>
  )
}

export default Navbar