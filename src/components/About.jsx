import React, { useState } from "react";
import DivFadeIn from "./DivFadeIn";

const About = () => {
  const [aboutFirstPos, setAboutFirstPos] = useState('0');

  return (
    <>
      <div className="w-full h-fit bg-cover about-background pt-64 pb-48" id="about">
        <DivFadeIn className="mx-auto w-fit h-fit flex items-center space-x-10 max-w-screen-xl px-4 md:px-6 xl:px-8">
          <div className="bg-eerie-black w-[0.5rem] h-[16rem] rounded-full bg-gradient-to-b  from-[#BC1531] to-[#0737A4]"></div>
          <div className="space-y-4">
            <p className="uppercase text-[#2044FF] font-bold tracking-widest text-xl">Who is this for?</p>
            <p className="text-2xl w-[45rem] font-medium leading-loose">Simply put, this community is for any Filipino who is eager to learn skills and knowledge typically covered in Philippines' education system. So whether you are a student, educator, professional, or lifelong learner, this community is for you.</p>
          </div>
        </DivFadeIn>
      </div>

      <div className="relative -top-20 space-y-48 max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto">
        <DivFadeIn className="flex justify-between items-center relative space-x-10">
          <div className="flex">
            <div className="flex flex-col space-y-8">
              <h2 className="font-black text-3xl w-[24rem] bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Be a well-rounded learner and a practical individual</h2>
              <div className="space-y-6">
                <div className={`h-[2rem] overflow-y-hidden overflow-x-hidden space-x-8 flex transition-all duration-300 ease-in-out ${aboutFirstPos == 0 && "accord-h"}`}>
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 0 ? "bg-[#ECB822] h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className={`space-y-4 h-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 0 && "translate-y-5"}`}>
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(0)}>
                      <img src="about-first.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Develop your skills holistically</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                <div className={`h-[2rem] overflow-y-hidden overflow-x-hidden space-x-8 flex w-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 1 && "accord-h"}`}>
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 1 ? "bg-[#359C3A] h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className={`space-y-4 h-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 1 && "translate-y-5"}`}>
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(1)}>
                      <img src="about-second.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Cultivate Responsible qualities</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                <div className={`h-[2rem] overflow-y-hidden overflow-x-hidden space-x-8 flex w-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 2 && "accord-h"}`}>
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 2 ? "bg-[#CDA063] h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className={`space-y-4 h-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 2 && "translate-y-5"}`}>
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(2)}>
                      <img src="about-third.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Know executive functioning skills</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                <div className={`h-[2rem] overflow-y-hidden overflow-x-hidden space-x-8 flex w-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 3 && "accord-h"}`}>
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 3 ? "bg-[#602119] h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className={`space-y-4 h-fit transition-all duration-300 ease-in-out ${aboutFirstPos == 3 && "translate-y-5"}`}>
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(3)}>

                      <img src="about-fourth.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Promote Valuable Personal Growth</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                {/* 
                <div className="h-fit space-x-8 flex items-center">
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 0 ? "bg-eerie-black h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className="space-y-4 h-fit">
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(0)}>
                      <img src="about-first.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Develop your skills holistically</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10 ${aboutFirstPos == 0 ? "relative" : "hidden"}`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                <div className="h-fit space-x-8 flex items-center">
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 1 ? "bg-eerie-black h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className="space-y-4 h-fit">
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(1)}>
                      <img src="about-second.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Cultivate Responsible qualities</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10 ${aboutFirstPos == 1 ? "relative" : "hidden"}`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                <div className="h-fit space-x-8 flex items-center">
                  <span className={` w-[0.4rem] rounded-full ${aboutFirstPos == 2 ? "bg-eerie-black h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className="space-y-4 h-fit">
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(2)}>
                      <img src="about-third.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Know executive functioning skills</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10 ${aboutFirstPos == 2 ? "relative" : "hidden"}`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                <div className="h-fit space-x-8 flex items-center">
                  <span className={`w-[0.4rem] rounded-full ${aboutFirstPos == 3 ? "bg-eerie-black h-[11rem]" : "bg-transparent h-full"}`}></span>
                  <div className="space-y-4 h-fit">
                    <div className="flex items-center gap-x-2 hover:cursor-pointer" onClick={() => setAboutFirstPos(3)}>
                      <img src="about-fourth.png" width="30" height="30" className="" />
                      <p className="font-bold text-xl">Promote Valuable Personal Growth</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem] left-10 ${aboutFirstPos == 3 ? "relative" : "hidden"}`}>True learning and growth isn't just about what you know; it's about who you become. Excelling academically is important, but it's not the only measure of success in life's journey.</p>
                  </div>
                </div>
                */}
              </div>
            </div>
          </div>
          <img src="about-right.png" width="620" height="620" className="" />
          <span className="rounded-full h-72 w-72 bg-[#00B8E0] blur-[200px] opacity-50 absolute -right-20 -z-10"></span>
        </DivFadeIn>

        <DivFadeIn className="flex justify-between items-center relative -top-20 space-x-10">
          <img src="about-left.png" width="620" height="620" className="" />
          <div className="flex">
            <div className="flex flex-col space-y-8">
              <h2 className="font-black text-3xl w-[24rem] bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Take the next step to learn and join the community</h2>
              <div className="space-y-6">
                <div className="h-fit space-x-8 flex items-center">
                  <span className={`w-[0.4rem] rounded-full bg-[#8496F1] h-[11rem]`}></span>
                  <div className="space-y-4 h-fit">
                    <div className="flex flex-col gap-y-2">
                      <img src="about-fifth.png" width="35" height="35" className="" />
                      <p className="font-bold text-xl">Hop on our <a href="example.com" target="_blank" className="text-[#2044FF]">Discord </a> server</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem]`}>Discord serves as the main platform for community engagement because it has ample initial features.</p>
                  </div>
                </div>
                <div className="h-fit space-x-8 flex items-center">
                  <span className={`w-[0.4rem] rounded-full bg-[#0E88E2] h-[11rem]`}></span>
                  <div className="space-y-4 h-fit">
                    <div className="flex flex-col gap-y-2">
                      <img src="about-sixth.png" width="35" height="35" className="" />
                      <p className="font-bold text-xl">Follow our <a href="example.com" target="_blank" className="text-[#2044FF]">Facebook </a> page</p>
                    </div>
                    <p className={`relative font-medium text-davy-gray w-[24rem]`}>We use Facebook for the latest updates, news, and events because it's widely used by Filipino students.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="rounded-full h-72 w-72 bg-[#A6E000] blur-[200px] opacity-50 absolute -left-20 -z-10"></span>
        </DivFadeIn>
      </div>
    </>
  )
}

export default About