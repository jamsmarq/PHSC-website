import React, { useEffect, useState } from "react";
import DivFades from "./DivFades";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative flex flex-col justify-center max-w-screen-xl mx-auto w-full bg-transparent">
      <div className="flex items-center justify-between mx-auto w-full px-6 lg:px-6 xl:px-8 py-4 z-20 bg-white">
        <img src="vite.svg" width={31} height={31} className={`relative`} />
        <div className={`hidden lg:block space-x-6 font-medium tracking-wide transition-all duration-1000 ease-in-out opacity-0 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}>
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#features">Features</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
        <button className={`hidden lg:block rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] transition-all hover:duration-300 hover:opacity-80  duration-1000 ease-in-out opacity-0 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}>Join now</button>
        <div className={`cursor-pointer block transition-all duration-1000 ease-in-out opacity-10 relative -translate-y-20 lg:hidden  ${isVisible && "opacity-100 translate-y-0"}`} onClick={() => setOpenMenu(!openMenu)}>
          <img width="25" height="25" src="icons/menu-bar.png" alt="header-menu-bar" className={`${openMenu && "hidden"}`} />
          <img width="25" height="25" src="icons/close-menu.png" alt="header-close-menu" className={`${!openMenu && "hidden"}`} />
        </div>
      </div>
      <div className={`lg:hidden w-full h-fit absolute bg-white z-10 px-10 -translate-y-32 transition-all duration-300 ease-in-out ${openMenu && "block translate-y-44"}`}>
        <div className={`flex space-y-5 py-5 flex-col font-medium tracking-wide transition-all duration-1000 ease-in-out opacity-0 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}>
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#features">Features</a>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact</a>
          <button className={`rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] transition-all hover:duration-300 hover:opacity-80  duration-1000 ease-in-out opacity-0 relative -translate-y-20 ${isVisible && "opacity-100 translate-y-0"}`}>Join now</button>
        </div>
      </div>
    </div>
  )
}

export default Header