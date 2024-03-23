import React from "react";
import DivFadeIn from "./DivFadeIn";

const Features = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 relative scroll-mt-10" id="features">
      <DivFadeIn className="flex items-center space-x-4 mx-auto w-fit">
        <p className="text-xl font-medium">Knowledge that are not usually taught in classrooms.</p>
        <h2 className="font-black text-3xl w-fit bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">What's in store?</h2>
      </DivFadeIn>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-8 gap-y-20 w-full mx-auto relative [&_div]:w-full [&_div]:h-fit [&_div]:space-y-3 [&_div]:col-span-1 [&_div]:flex [&_div]:flex-col [&_div]:items-center">
        <DivFadeIn className="">
          <img src="features-first.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18rem] text-center">Develop Practical Skills Through FREE Online Events</p>
        </DivFadeIn>
        <DivFadeIn className="">
          <img src="features-second.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18rem] text-center">Win Some Prizes With Open Challenges And Giveaways</p>
        </DivFadeIn>
        <DivFadeIn className="">
          <img src="features-third.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Make Connections And Create A Network With Other Students</p>
        </DivFadeIn>
        <DivFadeIn className="">
          <img src="features-fourth.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Get Academic And Professional Resources And Opportunities</p>
        </DivFadeIn>
        <DivFadeIn className="">
          <img src="features-fifth.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Participate On Activities And Make A Positive Impact</p>
        </DivFadeIn>
        <DivFadeIn className="">
          <img src="features-third.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Make Connections And Create A Network With Other Students</p>
        </DivFadeIn>
      </div>
      <span className="rounded-full h-72 w-72 bg-[#00E04C] blur-[200px] opacity-50 absolute top-32 -right-20 -z-10"></span>
    </div>
  )
}

export default Features