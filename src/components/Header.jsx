import React, { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6 xl:px-8 py-4 w-full bg-transparent">
      <img src="vite.svg" className={`transition-all duration-1000 ease-in-out opacity-10 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}/>
      <div className={`space-x-6 font-medium tracking-wide transition-all duration-1000 ease-in-out opacity-0 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}>
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#features">Features</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact</a>
      </div>
      <button className={`rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] transition-all hover:duration-300 hover:opacity-80  duration-1000 ease-in-out opacity-0 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}>Join now</button>
    </div>
  )
}

export default Header