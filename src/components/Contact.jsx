import React, { useState } from "react";

const Contact = () => {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto">
      <div className="relative -bottom-20 max-w-screen-xl mx-auto mt-20 space-y-12 flex items-center justify-between border-[0.15rem] border-eerie-black rounded-3xl py-24 px-16 about-background z-10 bg-white">
        <div>
          <p className="text-5xl font-black bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent py-3 w-fit text-center">Still got inquiries?</p>
          <p className="text-xl w-[34rem] font-medium">If you have any suggestions, inquiries, and questions, or want to offer a collaboration, feel free to send us a message.</p>
        </div>
        <button className="w-fit mx-auto flex items-center gap-x-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] text-xl" onMouseEnter={() => setCtaHover(true)} onMouseLeave={() => setCtaHover(false)}>
          <img width="25" height="25" src="icons/add-user-male.png" alt="add-user-male" className={`${ctaHover && 'hidden'}`} />
          <p>Join community</p>
          <img width="25" height="25" src="icons/hero-add-arrow.png" alt="hero-add-arrow" className={`${!ctaHover && 'hidden'}`} />
        </button>
      </div>
    </div>
  )
}

export default Contact