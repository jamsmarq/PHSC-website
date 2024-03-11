import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-6 xl:px-8 py-4 w-full  bg-transparent">
      <img src="vite.svg" />
      <div className="space-x-6 font-medium tracking-wide">
        <a href="#about">About</a>
        <a href="#topics">Tracks</a>
        <a href="#benefits">Features</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532]">Join now</button>
    </div>
  )
}

export default Header