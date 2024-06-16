import React from "react";
import DivFades from "./DivFades";

const Features = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 relative scroll-mt-10" id="features">
      <DivFades className="flex items-center space-x-4 mx-auto w-fit">
        <p className="text-xl font-medium">A community that values holistic growth and connection.</p>
        <h2 className="font-black text-3xl w-fit bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">What's in store?</h2>
      </DivFades>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-8 gap-y-20 w-full mx-auto relative [&_div]:w-full [&_div]:h-fit [&_div]:space-y-3 [&_div]:col-span-1 [&_div]:flex [&_div]:flex-col [&_div]:items-center">
        <DivFades type="fadeInUp" className="">
          <img src="illustrations/features-first.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18rem] text-center">Develop Practical Skills Through FREE Online Events</p>
        </DivFades>
        <DivFades type="fadeInUp" className="">
          <img src="illustrations/features-second.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18rem] text-center">Win Some Prizes With Open Challenges And Giveaways</p>
        </DivFades>
        <DivFades type="fadeInUp" className="">
          <img src="illustrations/features-third.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Make Connections And Create A Network With Other Students</p>
        </DivFades>
        <DivFades type="fadeInUp" className="">
          <img src="illustrations/features-fourth.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Get Academic And Professional Resources And Opportunities</p>
        </DivFades>
        <DivFades type="fadeInUp" className="">
          <img src="illustrations/features-fifth.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Participate On Activities And Make A Positive Impact</p>
        </DivFades>
        <DivFades type="fadeInUp" className="">
          <img src="illustrations/features-third.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Make Connections And Create A Network With Other Students</p>
        </DivFades>
      </div>
      <span className="rounded-full h-72 w-72 bg-[#00E04C] blur-[200px] opacity-50 absolute top-32 -right-20 -z-10"></span>
    </div>
  )
}

export default Features