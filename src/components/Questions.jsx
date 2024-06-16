import React, { useState } from "react";
import { QuestionsData } from "../datas/QuestionsData";
import DivFades from "./DivFades";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const openQuestion = (index) => {
    if (index == openIndex) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-20 mx-auto mt-32 space-y-12 relative scroll-mt-10" id="faqs">
      <h2 className="font-black text-3xl w-fit mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Frequently Asked Questions</h2>
      <DivFades type="fadeInUp" className="mx-auto w-full border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden bg-[#FEFFFE]">
        {QuestionsData.map((question, index) => (
          <>
            <div className={`h-fit select-none px-16 py-8 w-full space-y-4 cursor-pointer ${index != (QuestionsData.length - 1) && "border-b-[0.15rem] border-eerie-black"}`} onClick={() => openQuestion(index)}>
              <div className="flex items-center w-full justify-between">
                <p className="font-bold text-xl">{question[0]}</p>
                <img src="icons/questions-arrow.png" width="20" height="20" className={`${openIndex == index && "rotate-180"}`} />
              </div>
              <p className={`font-medium text-davy-gray text-lg ${openIndex != index && "hidden"}`}>{question[1]}</p>
            </div>
          </>
        ))}
      </DivFades>
      <span className="rounded-full h-72 w-72 bg-[#e07b00] blur-[200px] opacity-50 absolute -top-20 -right-20 -z-10"></span>
    </div>
  )
}

export default Questions