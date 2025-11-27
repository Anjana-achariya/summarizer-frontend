import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ThemeToggleBtn from './components/ThemeToggleBtn'
import HeroSection from "./components/HeroSection";
import Contact from "./components/Contact";
const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300">
      
      {/* Pass theme & setTheme to navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="p-6 text-center">
        <h2 className="text-2xl text-primary font-semibold">
          Welcome to GlowBrief 🤩✨
        </h2>
         <p className="opacity-80 mt-2 text-sm">From hours of content to minutes of insight.</p>
 
<HeroSection />
<Contact/>
        {/* <p className="opacity-80 mt-2 text-sm">
          Start by uploading your PDF, audio, YouTube link or text.
        </p> */}
      </main>
    </div>
  );
};

export default App;
