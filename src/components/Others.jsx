import React, { useState } from "react";
import { QuestionsData } from "../datas/QuestionsData";

const Others = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const openQuestion = (index) => {
    if (index == openIndex) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 relative">
      <h2 className="font-black text-3xl w-fit mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Community Miscellaneuos</h2>
      <div className="mx-auto flex space-x-8 w-full">
        <div className="w-full flex items-center space-x-6 rounded-3xl border-eerie-black bg-[#FFEFEF] border-[0.15rem] p-10">
          <img src="hero-left.png" width="130" height="130" className="" />
          <div className="flex flex-col space-y-4">
            <p className="text-xl font-bold">Collaboration and Partnership</p>
            <p className="w-[20rem] font-medium text-davy-gray">Mastering digital tools, navigating online platforms, and leveraging tech innovations for personal and professional growth.</p>
            <button className="w-fit flex items-center gap-x-3 rounded-full border-2 border-eerie-black px-4 py-2">
              <img width="20" height="20" src="icons/add-user-male.png" alt="add-user-male" className="" />
              <p className="font-bold">Be a partner</p>
            </button>
          </div>
        </div>
        <div className="w-full flex items-center space-x-6 rounded-3xl border-eerie-black bg-[#EFF6FF] border-[0.15rem] p-10">
          <img src="hero-left.png" width="130" height="130" className="" />
          <div className="flex flex-col space-y-4">
            <p className="text-xl font-bold">Mentors & Volunteers</p>
            <p className="w-[20rem] font-medium text-davy-gray">Mastering digital tools, navigating online platforms, and leveraging tech innovations for personal and professional growth.</p>
            <button className="w-fit flex items-center gap-x-3 rounded-full border-2 border-eerie-black px-4 py-2">
              <img width="20" height="20" src="icons/add-user-male.png" alt="add-user-male" className="" />
              <p className="font-bold">Apply now</p>
            </button>
          </div>
        </div>
      </div>
      <span className="rounded-full h-72 w-72 bg-[#E0006C] blur-[200px] opacity-50 absolute -top-20 -right-20 -z-10"></span>
    </div>
  )
}

export default Others