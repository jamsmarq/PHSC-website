import React, { useState } from "react";

const Hero = () => {
  const [ctaHover, setCtaHover] = useState(false)
  const [learnMoreHover, setLearnMoreHover] = useState(false)

  const [benefits1Hover, setBenefits1Hover] = useState(false)
  const [benefits2Hover, setBenefits2Hover] = useState(false)
  const [benefits3Hover, setBenefits3Hover] = useState(false)

  return (
    <div className="w-full h-fit relative mx-auto bg-gradient-to-br from-[#E7EFFB] to-[#FBF2E7] pt-20">
      <div className="max-w-screen-xl px-4 md:px-6 xl:px-8 py-4 mx-auto flex flex-col justify-center space-y-10">
        <h1 className="text-7xl font-black mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent py-3">Philippine Student Community</h1>
        <p className="text-xl w-[40rem] mx-auto text-center text-davy-gray font-medium">A community for Filipino learners and educators to foster <span className="text-eerie-black"> transferrable and life-long skills </span> that are not usually taught in traditional classrooms.</p>
        <div className="mx-auto w-fit h-fit space-x-4 flex">
          {/* <button className="flex items-center gap-x-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] text-xl" onMouseEnter={() => setCtaHover(true)} onMouseLeave={() => setCtaHover(false)}>
            <img width="25" height="25" src="icons/add-user-male.png" alt="add-user-male" className={`${ctaHover && 'hidden'}`} />
            <p>Join community</p>
            <img width="25" height="25" src="icons/hero-add-arrow.png" alt="hero-add-arrow" className={`${!ctaHover && 'hidden'}`} />
          </button> */}
          <button className={`relative flex items-center w-[14.7rem] gap-x-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] text-xl`} onMouseEnter={() => setCtaHover(true)} onMouseLeave={() => setCtaHover(false)}>
            <div className={`h-fit flex items-center gap-x-3 transition-all duration-300 ease-in-out w-full ${ctaHover && "-translate-x-9"}`}>
              <img width="25" height="25" src="icons/add-user-male.png" alt="add-user-male" className={`transition-all duration-300 ${ctaHover && "opacity-0"}`} />
              <p className="whitespace-nowrap">Join community</p>
              <img width="25" height="25" src="icons/hero-add-arrow.png" alt="hero-add-arrow" className={`transition-all duration-300 opacity-0 ${ctaHover && "opacity-100"}`} />
            </div>
          </button>
          <button className="rounded-full px-6 py-3 font-bold border-2 border-eerie-black text-xl flex items-center gap-x-3 w-[11.6rem]" onMouseEnter={() => setLearnMoreHover(true)} onMouseLeave={() => setLearnMoreHover(false)}>
            <div className={`h-fit flex items-center gap-x-3 transition-all duration-300 ease-in-out w-full ${!learnMoreHover && "translate-x-3"}`}>
              <p className="whitespace-nowrap">Learn more</p>
              <img width="25" height="25" src="icons/hero-add-arrow.png" alt="hero-add-arrow" className={`transition-all duration-300 opacity-0 ${learnMoreHover && "opacity-100"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Hero 3d Assets */}
      <div className="relative flex justify-between w-full mx-auto max-w-screen-2xl">
        <img src="hero-left.png" width="405" height="405" className="absolute -left-20 -top-48" />
        <img src="hero-right.png" width="405" height="405" className="absolute -right-20 -top-48" />
      </div>

      {/* Stats Data */}
      <div className="relative top-20 flex justify-between items-center rounded-full border-2 py-8 px-28 w-fit mx-auto max-w-screen-2xl gap-x-16 border-eerie-black bg-white bg-opacity-40 backdrop-blur-md">
        <div className="flex gap-x-2 items-center">
          <div className="-space-x-14" onMouseEnter={() => setBenefits1Hover(true)} onMouseLeave={() => setBenefits1Hover(false)}>
            <img src="stats-brain.png" width="56" height="56" className={`inline-block opacity-0 transition-all duration-300 ease-in-out ${benefits1Hover && "opacity-100"}`} />
            <img src="stats-first.png" width="56" height="56" className={`inline-block transition-all duration-300 ease-in-out ${benefits1Hover && "opacity-0"}`} />
          </div>
          <div className="w-fit">
            <p className="text-2xl font-black text-[#E45200]">LEARN</p>
            <p className="font-medium w-[9rem]">practical skills with FREE online events</p>
          </div>
        </div>
        <span className="bg-eerie-black w-[0.1rem] h-[4rem] rounded-full"></span>
        <div className="flex gap-x-2 items-center">
          <div className="-space-x-14" onMouseEnter={() => setBenefits2Hover(true)} onMouseLeave={() => setBenefits2Hover(false)}>
            <img src="stats-palm.png" width="56" height="56" className={`inline-block opacity-0 transition-all duration-300 ease-in-out ${benefits2Hover && "opacity-100"}`} />
            <img src="stats-second.png" width="56" height="56" className={`inline-block transition-all duration-300 ease-in-out ${benefits2Hover && "opacity-0"}`} />
          </div>
          <div className="w-fit">
            <p className="text-2xl font-black text-[#0092E4]">ENGAGE</p>
            <p className="font-medium w-[8rem]">in timely activities and discussions</p>
          </div>
        </div>
        <span className="bg-eerie-black w-[0.1rem] h-[4rem] rounded-full"></span>
        <div className="flex gap-x-2 items-center">
          <div className="-space-x-14" onMouseEnter={() => setBenefits3Hover(true)} onMouseLeave={() => setBenefits3Hover(false)}>
            <img src="stats-handshake.png" width="56" height="56" className={`inline-block opacity-0 transition-all duration-300 ease-in-out ${benefits3Hover && "opacity-100"}`} />
            <img src="stats-third.png" width="56" height="56" className={`inline-block transition-all duration-300 ease-in-out ${benefits3Hover && "opacity-0"}`} />
          </div>
          <div className="w-fit">
            <p className="text-2xl font-black text-[#E4006D]">CONNECT</p>
            <p className="font-medium w-[11rem]">with like-minded learners and educators</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero