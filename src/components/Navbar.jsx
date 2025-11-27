import React from 'react'
import logo from '../assets/favicon.png'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 py-4 xl:px-20 
      sticky top-0 bg-background border-b border-card z-50 fixed top-0 bg-transparent'>

      {/* Left: Logo + Title */}
      <div className="flex items-center gap-3">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-12 h-12 object-contain drop-shadow-[0_0_8px_#7C3AED]"
        />
        <div className='text-2xl font-bold text-primary'>GlowBrief</div>
      </div>

      {/* Right: Toggle + Contact */}
      <div className="flex items-center gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <a href="#contact">
          <button className="
            bg-gradient-to-t from-blue-800 via-purple-700 to-pink-500
            text-white px-5 py-2 rounded-full shadow-lg shadow-purple-500/30 
            hover:shadow-purple-500/60 hover:scale-105 transition duration-300
          ">
            Contact
          </button>
        </a>
      </div>

    </div>
  )
}

export default Navbar
