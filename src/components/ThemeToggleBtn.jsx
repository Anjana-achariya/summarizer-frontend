import React from 'react'
import toggleDark from "../assets/toggledark.png";
import toggleLight from "../assets/togglelight.png";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  return (
    <button className="p-1.5">
      {theme === "dark" ? (
        <img 
          src={toggleDark} 
          className="w-16 h-16" 
          onClick={() => setTheme("light")}
          alt="darkToggle" 
        />
      ) : (
        <img 
          src={toggleLight} 
          className="w-16 h-16"
          onClick={() => setTheme("dark")}
          alt="lightToggle" 
        />
      )}
    </button>
  )
}

export default ThemeToggleBtn;
