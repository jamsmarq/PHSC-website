import React, { useState } from "react";
import DivFadeIn from "./DivFadeIn";

const Rules = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 relative scroll-mt-10" id="faqs">
      <h2 className="font-black text-3xl w-fit mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Some rules to remember</h2>
      <div className="space-y-4">
        <DivFadeIn className="mx-auto w-full border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden bg-[#FEFFFE]">
          <div className={`h-fit px-16 py-8 w-full space-y-4 border-b-[0.15rem] border-eerie-black"}`}>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-2" onClick={() => setAboutFirstPos(0)}>
                <img src="about-first.png" width="30" height="30" className="" />
                <p className="font-bold text-xl">Always be kind and civil</p>
              </div>
              <p className={`font-medium text-davy-gray text-lg w-[31rem]`}>Be respectful and polite to all members. Treat everyone with kindness and maintain a civil tone in all interactions.</p>
            </div>
          </div>
        </DivFadeIn>
        <DivFadeIn className="mx-auto w-full border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden bg-[#FEFFFE]">
          <div className={`h-fit px-16 py-8 w-full space-y-4 border-b-[0.15rem] border-eerie-black"}`}>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-2" onClick={() => setAboutFirstPos(0)}>
                <img src="about-first.png" width="30" height="30" className="" />
                <p className="font-bold text-xl">Any NSFW are not allowed</p>
              </div>
              <p className={`font-medium text-davy-gray text-lg w-[31rem]`}>Any explicit material of any kind is prohibited. Keep the server safe and respectful for all community members.</p>
            </div>
          </div>
        </DivFadeIn>
        <DivFadeIn className="mx-auto w-full border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden bg-[#FEFFFE]">
          <div className={`h-fit px-16 py-8 w-full space-y-4 border-b-[0.15rem] border-eerie-black"}`}>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-2" onClick={() => setAboutFirstPos(0)}>
                <img src="about-first.png" width="30" height="30" className="" />
                <p className="font-bold text-xl">No spamming or selling</p>
              </div>
              <p className={`font-medium text-davy-gray text-lg w-[31rem]`}>Let’s keep the server clutter-free and respectful by refraining from excessive messages and promotions.
</p>
            </div>
          </div>
        </DivFadeIn>
        <DivFadeIn className="mx-auto w-full border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden bg-[#FEFFFE]">
          <div className={`h-fit px-16 py-8 w-full space-y-4 border-b-[0.15rem] border-eerie-black"}`}>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-2" onClick={() => setAboutFirstPos(0)}>
                <img src="about-first.png" width="30" height="30" className="" />
                <p className="font-bold text-xl">Follow Discord Guidelines</p>
              </div>
              <p className={`font-medium text-davy-gray text-lg w-[31rem]`}>Ensure your actions and content comply with Discord's <a href="https://discord.com/terms" target="_blank" className="text-blue-600 visited:text-purple-600">Terms of Service</a> and <a href="https://discord.com/guidelines" target="_blank" className="text-blue-600 visited:text-purple-600">Community Guidelines</a>.</p>
            </div>
          </div>
        </DivFadeIn>
        <DivFadeIn className="mx-auto w-full border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden bg-[#FEFFFE]">
          <div className={`h-fit px-16 py-8 w-full space-y-4 border-b-[0.15rem] border-eerie-black"}`}>
            <div className="flex items-center w-full justify-between">
              <div className="flex items-center gap-x-2" onClick={() => setAboutFirstPos(0)}>
                <img src="about-first.png" width="30" height="30" className="" />
                <p className="font-bold text-xl">Share and speak your thoughts</p>
              </div>
              <p className={`font-medium text-davy-gray text-lg w-[31rem]`}>This is a safe space that's free of bias, conflict and criticism.
Feel free to share what you think and we will respond.</p>
            </div>
          </div>
        </DivFadeIn>

      </div>
      <span className="rounded-full h-72 w-72 bg-[#A600E0] blur-[200px] opacity-50 absolute -top-20 -left-20 -z-10"></span>
    </div>
  )
}

export default Rules