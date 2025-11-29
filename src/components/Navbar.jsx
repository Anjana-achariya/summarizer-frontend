import React, { useState } from 'react'
import logo from '../assets/favicon.png'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({ theme, setTheme }) => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      {/* NAVBAR */}
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

        {/* Right: HOW TO USE → TOGGLE → CONTACT */}
        <div className="flex items-center gap-4">

          {/* HOW TO USE BUTTON (before toggle) */}
          <button
            onClick={() => setShowHelp(true)}
            className="text-sm text-primary underline hover:opacity-70"
          >
            How to use?
          </button>

          {/* THEME TOGGLE (now AFTER the How-to button) */}
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />

          {/* CONTACT BUTTON */}
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
      {showHelp && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
    <div className="
      rounded-lg p-6 max-w-lg w-full shadow-xl
      bg-white text-gray-900
      dark:bg-gray-900 dark:text-gray-100
    ">

      <h2 className="text-xl font-semibold mb-3 text-primary">
        How to use GlowBrief ✨
      </h2>

      <ul className="text-sm space-y-2">
        <li>• Upload a PDF to get a structured summary.</li>
        <li>• Upload audio (mp3/wav) to transcribe & summarize.</li>
        <li>• Paste a YouTube link (must have subtitles).</li>
        <li>• Or type/paste any custom text.</li>
        <li>• Click Summarize → results appear on the right panel.</li>
      </ul>

      <button
        onClick={() => setShowHelp(false)}
        className="
          mt-4 w-full py-2 rounded-md 
          bg-primary text-white 
          hover:bg-primary/80 transition
        "
      > Close</button>


   
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
