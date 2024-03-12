import React from "react";

const Features = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12">
      <div className="flex items-center space-x-4 mx-auto w-fit">
        <p className="text-xl font-medium">Knowledge that are not usually taught in classrooms.</p>
        <h2 className="font-black text-3xl w-fit bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">What's in store?</h2>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-x-8 gap-y-20 w-full mx-auto">
        <div className="w-full h-fit space-y-3 col-span-1 flex flex-col items-center">
          <img src="features-first.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18rem] text-center">Develop Practical Skills Through FREE Online Events</p>
        </div>
        <div className="w-full h-fit space-y-3 col-span-1 flex flex-col items-center">
          <img src="features-second.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18rem] text-center">Win Some Prizes With Open Challenges And Giveaways</p>
        </div>
        <div className="w-full h-fit space-y-3 col-span-1 flex flex-col items-center">
          <img src="features-third.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Make Connections And Create A Network With Other Students</p>
        </div>
        <div className="w-full h-fit space-y-3 col-span-1 flex flex-col items-center">
          <img src="features-fourth.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Get Academic And Professional Resources And Opportunities</p>
        </div>
         <div className="w-full h-fit space-y-3 col-span-1 flex flex-col items-center">
          <img src="features-fifth.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Participate On Activities And Make A Positive Impact</p>
        </div>
         <div className="w-full h-fit space-y-3 col-span-1 flex flex-col items-center">
          <img src="features-third.png" width="200" height="200" className="" />
          <p className="text-xl font-bold w-[18.5rem] text-center">Make Connections And Create A Network With Other Students</p>
        </div>
 
      </div>
    </div>
  )
}

export default Features