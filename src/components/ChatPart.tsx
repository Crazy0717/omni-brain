"use client"
import { assets } from "@/assets/assets"
import Image from "next/image"
import Card from "./ui/Card"
import MarkdownRenderer from "./MarkdownRenderer"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { useEffect, useState } from "react"
import { handleLoading, setPrevPrompts, setValue } from "@/lib/slices/states"
import fetchPrompt from "@/service/api"

const ChatPart = () => {
  const { prompt, isLoading, oldPrompt, showResults, isDarkMode } =
    useAppSelector((state) => state.states)
  const dispatch = useAppDispatch()
  const [resultsData, setResultsData] = useState("")
  const [recentPrompt, setRecentPrompt] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue({ ident: "prompt", value: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSent(prompt)
  }

  const onSent = async (promptWord: string) => {
    dispatch(handleLoading(true))
    dispatch(setValue({ ident: "showResults", value: true }))
    setResultsData("")

    const response = await fetchPrompt(promptWord)
    setRecentPrompt(promptWord)
    dispatch(handleLoading(false))

    let response2 = response.text().split(" ")
    for (let i = 0; i < response2.length; i++) {
      const nextWord = response2[i]
      typingEffect(i, nextWord + " ")
    }
    dispatch(setPrevPrompts(promptWord))
    dispatch(setValue({ ident: "prompt", value: "" }))
  }

  const typingEffect = (i: number, nextWord: string) => {
    setTimeout(function () {
      setResultsData((prev) => prev + nextWord)
    }, 70 * i)
  }

  useEffect(() => {
    if (!(oldPrompt === "")) onSent(oldPrompt)
  }, [oldPrompt])

  return (
    <>
      {!showResults ? (
        <>
          <div className="">
            <p className="animate-fadeIn2 mt-[50px] text-[40px] text-[#c4c7c5] font-[500] max-phone:text-[30px] max-phone:leading-9 max-tablet:text-[30px] max-tablet:leading-9 max-phone:mt-[10px] max-tablet:mt-[10px]">
              <span className="greeting_span">Hello, Dev</span>
            </p>
            <p className="mb-[50px] text-[40px] text-[#c4c7c5] font-[500] max-phone:text-[30px] max-phone:leading-9 max-tablet:text-[30px] max-tablet:leading-9 max-phone:mb-[30px] max-tablet:mb-[30px]">
              How can I help you today
            </p>
          </div>
          <div className="animate-fadeIn3 flex justify-between gap-y-2 max-sm:flex-wrap max-phone:flex-wrap max-tablet:flex-wrap">
            <Card
              handleClick={onSent}
              text="Suggest beautiful places to see on an upcoming road trip"
              iconUrl={assets.compass_icon}
            />
            <Card
              handleClick={onSent}
              text="Briefly sumarize this concept: uraban planning"
              iconUrl={assets.bulb_icon}
            />
            <Card
              handleClick={onSent}
              text="Brainstorm team bonding activities for our work retreat"
              iconUrl={assets.message_icon}
            />
            <Card
              handleClick={onSent}
              text="Improve the readability of the following code"
              iconUrl={assets.code_icon}
            />
          </div>
        </>
      ) : (
        <div className="px-[5%] max-h-[70vh] scrollbar-none overflow-y-scroll">
          <div className="px-5 py-2 my-[40px] bg-light-1 rounded-[20px] dark:bg-dark-3 dark:text-dark-text">
            <p className="dark:text-dark-text">{recentPrompt}</p>
          </div>
          <div className="flex items-start gap-2">
            <Image
              className={cn("logo", { "filter-revert": isDarkMode })}
              src="/omnibrain_logo.png"
              alt="omnibrain icon"
              width={20}
              height={20}
            />
            {isLoading ? (
              <div className="resultLoader w-full flex flex-col gap-2.5">
                <hr id={isDarkMode ? "darkLoader" : ""} />
                <hr id={isDarkMode ? "darkLoader" : ""} />
                <hr id={isDarkMode ? "darkLoader" : ""} />
              </div>
            ) : (
              <MarkdownRenderer>{resultsData}</MarkdownRenderer>
            )}
          </div>
        </div>
      )}

      <div className="animate-fadeIn5 w-full max-w-[900px] px-[20px] absolute bottom-5">
        <form
          onSubmit={handleSubmit}
          className="px-[20px] flex items-center justify-between bg-light-1 rounded-[50px] dark:bg-dark-3 dark:caret-dark-text"
        >
          <input
            onChange={handleChange}
            className="flex-1 bg-transparent outline-none text-[18px] dark:text-dark-text"
            type="text"
            placeholder="Type a prompt here..."
            value={prompt}
          />
          <button type="submit" className="py-[10px] cursor-pointer">
            <Image
              className={cn("w-[24px]", { "filter-revert": isDarkMode })}
              src={assets.send_icon}
              alt="send icon"
            />
          </button>
        </form>
      </div>
    </>
  )
}

export default ChatPart
