import React from "react";

const Action = () => {
  return (
    <div className="w-full h-fit relative mx-auto bg-gradient-to-br from-[#E7EFFB] to-[#FBF2E7] py-20 border-y-[0.15rem] mt-32 border-eerie-black">
      <div className="max-w-screen-xl px-4 md:px-6 xl:px-8 py-4 mx-auto flex flex-col justify-center space-y-10">
        <div className="space-y-2">
          <p className="text-5xl font-black mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent py-3 w-[30rem] text-center">Ready to stay ahead of the events game?</p>
          <p className="text-xl w-[40rem] mx-auto text-center font-bold">Join our growing community today!</p>
        </div>
        <button className="w-fit mx-auto flex items-center gap-x-3 rounded-full bg-red-600 px-6 py-3 font-bold text-white bg-gradient-to-r from-[#0737A4] to-[#BC1532] text-xl">
          <img width="25" height="25" src="icons/add-user-male.png" alt="add-user-male" className="" />
          <p>Join community</p>
        </button>
      </div>
    </div>
  )
}

export default Action