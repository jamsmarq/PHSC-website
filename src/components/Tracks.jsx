import React from "react";
import DivFades from "./DivFades";

const Tracks = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 scroll-mt-10" id="tracks">
      <DivFades className="flex items-center space-x-4 mx-auto w-fit">
        <h2 className="font-black text-3xl w-fit bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Transferrable skills?</h2>
        <p className="text-xl font-medium">Knowledge that are not usually taught in classrooms.</p>
      </DivFades>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-full mx-auto relative [&_div]:p-5 [&_div]:border-eerie-black [&_div]:w-full [&_div]:h-fit [&_div]:space-y-3 [&_div]:col-span-1 [&_div]:rounded-2xl [&_div]:border-[0.15rem]">
        <DivFades type="fadeInUp" className="bg-[#FFEFEF]">
          <img src="icons/tracks-first.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Business and Finance</p>
          <p className="font-medium text-davy-gray w-[19rem]">Essential financial literacy, budgeting, and entrepreneurial skills for personal and professional success.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#EFFFF3]">
          <img src="icons/tracks-second.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Personal Productivity</p>
          <p className="font-medium text-davy-gray w-[19rem]">Effective time management, goal-setting, and organizational skills to enhance productivity and achieve personal goals.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#EFF6FF]">
          <img src="icons/tracks-third.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Crafts and Creativity</p>
          <p className="font-medium text-davy-gray w-[19rem]">Exploring artistic expression, honing creative skills, and fostering innovation through various craft-based activities.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#FBEFFF]">
          <img src="icons/tracks-fourth.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Critical Thinking</p>
          <p className="font-medium text-davy-gray w-[19rem]">Analyze information, solve problems, and make informed decisions through logical reasoning and evidence-based judgment.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#FEFFEF]">
          <img src="icons/tracks-fifth.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Inter- and Intrapersonal</p>
          <p className="font-medium text-davy-gray w-[19rem]">Interpersonal communication, empathy, and self-awareness for effective social interactions and personal development.</p>
        </DivFades>
        <DivFades  type="fadeInUp"className="bg-[#FFEFF5]">
          <img src="icons/tracks-sixth.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Health and Wellness</p>
          <p className="font-medium text-davy-gray w-[19rem]">Physical and mental well-being, embracing healthy lifestyles, and prioritizing self-care for overall wellness.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#EFFFFE]">
          <img src="icons/tracks-seventh.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Technological Proficiency</p>
          <p className="font-medium text-davy-gray w-[20rem]">Mastering digital tools, navigating online platforms, and leveraging tech innovations for personal and professional growth.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#EFF0FF]">
          <img src="icons/tracks-eight.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">National and Cultural Heritage</p>
          <p className="font-medium text-davy-gray w-[19rem]">Appreciating the rich history, traditions, and cultural diversity of the Philippines to foster national identity and cultural pride.</p>
        </DivFades>
        <DivFades type="fadeInUp" className="bg-[#FFFAEF]">
          <img src="icons/tracks-ninth.png" width="40" height="40" className="" />
          <p className="text-xl font-bold">Social Responsibility</p>
          <p className="font-medium text-davy-gray w-[19rem]">A sense of civic duty, promoting community involvement, and advocating for social justice and equity.</p>
        </DivFades>
        <span className="rounded-full h-72 w-72 bg-[#0400e0] blur-[200px] opacity-50 absolute top-32 left-20 -z-10"></span>
      </div>
    </div>
  )
}

export default Tracks;