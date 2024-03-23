import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <Contact />
      <div className="w-full h-fit relative mx-auto bg-gradient-to-br from-[#E7EFFB] to-[#FBF2E7] border-t-[0.15rem] border-eerie-black pt-20 pb-10 flex flex-col">
        <div className="flex items-center gap-x-6 select-none">
          <p className="animate-infinite-scroll w-fit text-9xl whitespace-nowrap font-black bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent py-3">PHILIPPINE STUDENT COMMUNITY</p>
          <p className="animate-infinite-scroll w-fit text-9xl whitespace-nowrap font-black bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent py-3">PHILIPPINE STUDENT COMMUNITY</p>
          <p className="animate-infinite-scroll w-fit text-9xl whitespace-nowrap font-black bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent py-3">PHILIPPINE STUDENT COMMUNITY</p>
        </div>
        <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 w-full mx-auto flex items-center justify-between">
          <p className="font-medium text-davy-gray text-sm">© 2024 Philippine Student Community. All rights reserved.</p>
          <p className="font-medium text-davy-gray text-sm">Designed & Programmed by <a className="underline" target="_blank" href="https://www.linkedin.com/in/jamsmarq">jamsmarq</a>. Windows icons by <a className="underline" target="_blank" href="https://icons8.com/icons/family-windows">Icons8</a>.</p>
        </div>
      </div>
    </>
  )
}

export default Footer