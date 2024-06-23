"use client"
import { assets } from "@/assets/assets"
import Image from "next/image"
import React, { useState } from "react"
import Card from "./ui/Card"
import fetchPrompt from "@/service/api"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { handleLoading, setValue } from "@/lib/slices/apiData"

const Main = () => {
  const { prompt, isLoading } = useAppSelector((state) => state.apiData)
  const dispatch = useAppDispatch()
  const [showResults, setShowResults] = useState(false)
  const [resultsData, setResultsData] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")

  const onSent = async (promptWord: string) => {
    dispatch(handleLoading(true))
    const response = await fetchPrompt(promptWord)
    setRecentPrompt(prompt)
    dispatch(handleLoading(false))
    setShowResults(true)
    setResultsData(response.text())
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue({ ident: "prompt", value: e.target.value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSent(prompt)
  }
  console.log(resultsData)
  return (
    <main className="pb-[15vh] w-full min-h-screen relative">
      <nav className="p-[20px] flex items-center justify-between text-[22px] text-[#585858] ">
        <p>OmniBrain</p>
        {/* <Image src={assets.user_icon} alt="user icon" /> */}
      </nav>
      <div className="max-w-[900px] my-0 mx-auto">
        {!showResults ? (
          <>
            <div className="">
              <p className="mt-[50px] text-[40px] text-[#c4c7c5] font-[500]">
                <span className="greeting_span">Hello, Dev</span>
              </p>
              <p className="mb-[50px] text-[40px] text-[#c4c7c5] font-[500]">
                How can I help you today
              </p>
            </div>
            <div className="flex justify-between">
              <Card
                text="Suggest beautiful places to see on an upcoming road trip"
                iconUrl={assets.compass_icon}
              />
              <Card
                text="Briefly sumarize this concept: uraban planning"
                iconUrl={assets.bulb_icon}
              />
              <Card
                text="Brainstorm team bonding activities for our work retreat"
                iconUrl={assets.message_icon}
              />
              <Card
                text="Improve the readability of the following code"
                iconUrl={assets.code_icon}
              />
            </div>
          </>
        ) : (
          <div className="px-[5%] max-h-[70vh] scrollbar-none overflow-y-scroll">
            <div className="my-[40px]">
              <p>{recentPrompt}</p>
            </div>
            <div className="">
              <Image src={assets.gemini_icon} alt="omnibrain icon" />
              {isLoading ? (
                <div className="resultLoader w-full flex flex-col gap-2.5">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  className="text-[17px] font-[300] leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: resultsData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="w-full max-w-[900px] px-[20px] absolute bottom-5">
          <form
            onSubmit={handleSubmit}
            className="px-[20px] flex items-center justify-between bg-light-1 rounded-[50px]"
          >
            <input
              onChange={handleChange}
              className="flex-1  bg-transparent outline-none text-[18px]"
              type="text"
              placeholder="Type a prompt here..."
            />
            <button type="submit" className="py-[10px] cursor-pointer">
              <Image
                className="w-[24px]"
                src={assets.send_icon}
                alt="send icon"
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Main
