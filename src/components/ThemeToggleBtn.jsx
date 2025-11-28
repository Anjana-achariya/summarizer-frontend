import React from 'react'
import toggleDark from "../assets/toggledark.png";
import toggleLight from "../assets/togglelight.png";


const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button className="p-1.5">
        {/* rounded-md border border-gray-300  */}
      {theme === "dark" ? (
        <img 
          src={toggledark} 
          className="w-16 h-16" 
          onClick={() => setTheme("light")}
          alt="darkToggle" 
        />
      ) : (
        <img 
          src={togglelight} 
          className="w-16 h-16" 
          onClick={() => setTheme("dark")}
          alt="lightToggle" 
        />
      )}
    </button>
  )
}

export default ThemeToggleBtn

