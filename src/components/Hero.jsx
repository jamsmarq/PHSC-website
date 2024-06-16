import React, { useState } from "react";
import DivFades from "./DivFades";

const Hero = () => {
  const [ctaHover, setCtaHover] = useState(false)
  const [learnMoreHover, setLearnMoreHover] = useState(false)

  return (
    <div className="w-full h-fit relative mx-auto bg-gradient-to-br from-[#E7EFFB] to-[#FBF2E7] pt-8 xs:pt-10 sm:pt-16 md:pt-20">
      <DivFades className="max-w-screen-xl px-5 md:px-6 xl:px-8 py-4 mx-auto flex flex-col justify-center space-y-8 md:space-y-10">
        <h1 className="md:w-[40rem] leading-tight text-center lg:w-fit text-5xl xs:text-6xl sm:text-6xl md:text-7xl font-black mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent md:py-3">Philippine Student Community</h1>
        <p className="text-lg md:text-xl md:w-[40rem] mx-auto text-center text-davy-gray font-medium md:leading-normal">A community for Filipino learners and educators to foster <span className="text-eerie-black"> transferrable and life-long skills </span> that are not usually taught in traditional classrooms.</p>
        <div className="mx-auto w-full md:w-fit h-fit space-x-4 flex flex-col md:flex-row">
          {/* <button className="flex items-center gap-x-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] text-xl" onMouseEnter={() => setCtaHover(true)} onMouseLeave={() => setCtaHover(false)}>
            <img width="25" height="25" src="icons/add-user-male.png" alt="add-user-male" className={`${ctaHover && 'hidden'}`} />
            <p>Join community</p>
            <img width="25" height="25" src="icons/hero-add-arrow.png" alt="hero-add-arrow" className={`${!ctaHover && 'hidden'}`} />
          </button> */}
          <button className={`relative flex items-center mx-auto md:mx-0 md:w-[14.7rem] gap-x-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] text-xl`} onMouseEnter={() => setCtaHover(true)} onMouseLeave={() => setCtaHover(false)}>
            <div className={`h-fit flex items-center gap-x-3 transition-all duration-300 ease-in-out w-fit md:w-full ${ctaHover && "md:-translate-x-9"}`}>
              <img width="25" height="25" src="icons/add-user.png" alt="add-user-male" className={`transition-all duration-300 ${ctaHover && "md:opacity-0"}`} />
              <p className="whitespace-nowrap">Join community</p>
              <img width="25" height="25" src="icons/hero-add-arrow.png" alt="hero-add-arrow" className={`hidden md:block transition-all duration-300 opacity-0 ${ctaHover && "md:opacity-100"}`} />
            </div>
          </button>
          <button className="hidden md:flex rounded-full px-6 py-3 font-bold border-2 border-eerie-black text-xl items-center gap-x-3 w-[11.6rem]" onMouseEnter={() => setLearnMoreHover(true)} onMouseLeave={() => setLearnMoreHover(false)}>
            <div className={`h-fit flex items-center gap-x-3 transition-all duration-300 ease-in-out w-full ${!learnMoreHover && "translate-x-3"}`}>
              <p className="whitespace-nowrap">Learn more</p>
              <img width="25" height="25" src="icons/hero-arrow.png" alt="hero-add-arrow" className={`transition-all duration-300 opacity-0 ${learnMoreHover && "opacity-100"}`} />
            </div>
          </button>
        </div>
      </DivFades>

      {/* Hero 3d Assets */}
      <div className="relative flex justify-between w-full mx-auto max-w-screen-2xl">
        <DivFades>
          <img src="illustrations/hero-left.png" width="405" height="405" className="hidden md:block absolute -left-40 w-[350px] -top-40 lg:w-[405px] lg:-left-20 lg:-top-48" />
        </DivFades>
        <DivFades>
          <img src="illustrations/hero-right.png" width="405" height="405" className="hidden md:block absolute -right-40 w-[350px] -top-40 lg:w-[405px] lg:-right-20 lg:-top-48" />
        </DivFades>
      </div>

      {/* Stats Data */}
      <DivFades type="fadeInUp" className="relative top-20 flex justify-between items-center rounded-full border-2 py-8 px-28 w-fit mx-auto max-w-screen-2xl gap-x-16 border-eerie-black bg-white bg-opacity-40 backdrop-blur-md">
        <div className="flex gap-x-2 items-center">
          <div className="-space-x-14">
            <img src="icons/book-shelf.png" width="56" height="56" className={``} />
          </div>
          <div className="w-fit">
            <p className="text-2xl font-black text-[#E45200]">LEARN</p>
            <p className="font-medium w-[9rem]">practical skills with FREE online events</p>
          </div>
        </div>
        <span className="bg-eerie-black w-[0.1rem] h-[4rem] rounded-full"></span>
        <div className="flex gap-x-2 items-center">
          <div className="-space-x-14">
            <img src="icons/workflow.png" width="56" height="56" className={``} />
          </div>
          <div className="w-fit">
            <p className="text-2xl font-black text-[#0092E4]">ENGAGE</p>
            <p className="font-medium w-[8rem]">in timely activities and discussions</p>
          </div>
        </div>
        <span className="bg-eerie-black w-[0.1rem] h-[4rem] rounded-full"></span>
        <div className="flex gap-x-2 items-center">
          <div className="-space-x-14">
            <img src="icons/omnichannel.png" width="56" height="56" className={``} />
          </div>
          <div className="w-fit">
            <p className="text-2xl font-black text-[#E4006D]">CONNECT</p>
            <p className="font-medium w-[11rem]">with like-minded learners and educators</p>
          </div>
        </div>
      </DivFades>
    </div>
  )
}

export default Hero