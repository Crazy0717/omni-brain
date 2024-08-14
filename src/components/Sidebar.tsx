"use client"
import Image from "next/image"
import { assets } from "../assets/assets"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { setValue } from "@/lib/slices/states"

const Sidebar = () => {
  const { prevPrompts, isDarkMode } = useAppSelector((state) => state.states)
  const dispatch = useAppDispatch()
  const [expanded, setExpanded] = useState(false)

  const loadOldResults = (oldPrompt: string) => {
    dispatch(setValue({ ident: "oldPrompt", value: oldPrompt }))
  }

  const newChat = () => {
    dispatch(setValue({ ident: "showResults", value: false }))
    dispatch(setValue({ ident: "isLoading", value: false }))
  }

  return (
    <aside
      className={cn(
        "w-full py-[25px] px-[15px] max-w-[230px] min-h-screen flex flex-col bg-light-1 max-phone:max-w-[180px] dark:bg-dark-2",
        { "w-auto": expanded }
      )}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={cn("ml-[14px]", { "max-phone:ml-[10px]": expanded })}
      >
        <Image
          className={cn("block cursor-pointer w-[20px]", {
            "filter-revert": isDarkMode,
          })}
          src={assets.menu_icon}
          alt="hamburger icon"
        />
      </div>
      <div
        onClick={newChat}
        className="mt-2.5 flex items-center gap-2.5 py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-[#4d4d4d] cursor-pointer transition duration-1 dark:bg-dark-3 dark:text-dark-text dark:hover:brightness-125"
      >
        <Image
          className={cn("w-[18px] max-phone:w-[16px]", {
            "max-phone:w-[20px]": expanded,
          })}
          src={assets.plus_icon}
          alt="newchat icon"
        />
        <p className={cn("max-phone:text-[14px]", { hidden: expanded })}>
          New Chat
        </p>
      </div>
      <div
        className={cn("animate-fadeIn2 flex flex-col", { hidden: expanded })}
      >
        <p className="mt-[30px] mb-[20px] max-phone:text-[14px] max-phone:mb-2 dark:text-dark-text">
          Recent
        </p>
        {prevPrompts &&
          prevPrompts.map((item, index) => (
            <div
              key={index}
              onClick={() => loadOldResults(item)}
              className={cn("sidebar-item", { "hover:bg-dark-3": isDarkMode })}
            >
              <Image
                className={cn("w-[20px] max-phone:w-[16px]", {
                  "filter-revert": isDarkMode,
                })}
                src={assets.message_icon}
                alt="hamburger icon"
              />
              <p className="text-res max-phone:text-[14px] dark:text-dark-text">
                {item}
              </p>
            </div>
          ))}
      </div>
    </aside>
  )
}

export default Sidebar
