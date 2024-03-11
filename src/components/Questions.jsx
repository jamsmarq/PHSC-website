import React, { useState } from "react";
import { QuestionsData } from "../datas/QuestionsData";

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
    <div className="max-w-screen-xl px-4 md:px-6 xl:px-8 mx-auto mt-32 space-y-12">
      <h2 className="font-black text-3xl w-fit mx-auto bg-gradient-to-r from-[#0737A4] to-[#BC1532] bg-clip-text text-transparent">Frequently Asked Questions</h2>
      <div className="mx-auto w-[60rem] border-[0.15rem] border-eerie-black rounded-3xl overflow-hidden">
        {QuestionsData.map((question, index) => (
          <>
            <div className={`h-fit select-none px-16 py-8 w-full space-y-4 cursor-pointer ${index != (QuestionsData.length - 1) && "border-b-[0.15rem] border-eerie-black"}`} onClick={() => openQuestion(index)}>
              <div className="flex items-center w-full justify-between">
                <p className="font-bold text-xl">{question[0]}</p>
                <img src="questions-arrow.png" width="20" height="20" className="" />
              </div>
              <p className={`font-medium text-davy-gray text-lg ${openIndex != index && "hidden"}`}>{question[1]}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Questions