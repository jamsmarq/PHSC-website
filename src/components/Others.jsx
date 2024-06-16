import React, { useState } from "react";
import DivFades from "./DivFades";

const Others = () => {
  const [partnerHover, setPartnerHover] = useState(false)
  const [mentorHover, setMentorHover] = useState(false)

  console.log("Hello I have been loaded")

  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 relative">
      <h2 className="font-black text-3xl w-fit mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Community Miscellaneuos</h2>
      <div className="mx-auto flex space-x-8 w-full">
        <DivFades type="fadeInUp" className="w-full flex items-center space-x-6 rounded-3xl border-eerie-black bg-[#FFEFEF] border-[0.15rem] p-10">
          <img src="illustrations/partnerships.png" width="130" height="130" className="" />
          <div className="flex flex-col space-y-4">
            <p className="text-xl font-bold">Collaboration and Partnership</p>
            <p className="w-[20rem] font-medium text-davy-gray">Mastering digital tools, navigating online platforms, and leveraging tech innovations for personal and professional growth.</p>
            <button className="relative w-[9.8rem] flex items-center gap-x-3 rounded-full border-2 border-eerie-black px-4 py-2 overflow-hidden" onMouseEnter={() => setPartnerHover(true)} onMouseLeave={() => setPartnerHover(false)}>
              <div className={`h-fit flex items-center gap-x-3 transition-all duration-300 ease-in-out w-full ${partnerHover && "-translate-x-8"}`}>
                <img width="20" height="20" src="icons/partner.png" alt="add-user-male" className={`transition-all duration-300 ${partnerHover && "opacity-0"}`}  />
                <p className="font-bold whitespace-nowrap">Be a partner</p>
                <img width="20" height="20" src="icons/hero-arrow.png" alt="add-user-male" className={`transition-all duration-300 opacity-0 ${partnerHover && "opacity-100"}`} />
              </div>
            </button>
          </div>
        </DivFades>
        <DivFades type="fadeInUp" className="w-full flex items-center space-x-6 rounded-3xl border-eerie-black bg-[#EFF6FF] border-[0.15rem] p-10">
          <img src="illustrations/volunteers.png" width="130" height="130" className="" />
          <div className="flex flex-col space-y-4">
            <p className="text-xl font-bold">Mentors & Volunteers</p>
            <p className="w-[20rem] font-medium text-davy-gray">Mastering digital tools, navigating online platforms, and leveraging tech innovations for personal and professional growth.</p>
            <button className="relative w-[9.1rem] flex items-center gap-x-3 rounded-full border-2 border-eerie-black px-4 py-2 overflow-hidden" onMouseEnter={() => setMentorHover(true)} onMouseLeave={() => setMentorHover(false)}>
              <div className={`h-fit flex items-center gap-x-3 transition-all duration-300 ease-in-out w-full ${mentorHover && "-translate-x-8"}`}>
                <img width="20" height="20" src="icons/mentor.png" alt="add-user-male" className={`transition-all duration-300 ${mentorHover && "opacity-0"}`}  />
                <p className="font-bold whitespace-nowrap">Apply now</p>
                <img width="20" height="20" src="icons/hero-arrow.png" alt="add-user-male" className={`transition-all duration-300 opacity-0 ${mentorHover && "opacity-100"}`} />
              </div>
            </button>
          </div>
        </DivFades>
      </div>
      <span className="rounded-full h-72 w-72 bg-[#E0006C] blur-[200px] opacity-50 absolute -top-20 -right-20 -z-10"></span>
    </div>
  )
}

export default Others