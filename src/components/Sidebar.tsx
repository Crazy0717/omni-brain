"use client"
import Image from "next/image"
import { assets } from "../assets/assets"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { setValue } from "@/lib/slices/apiData"

const Sidebar = () => {
  const { prevPrompts } = useAppSelector((state) => state.apiData)
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
        "w-full py-[25px] px-[15px] max-w-[230px] min-h-screen flex flex-col bg-light-1 max-phone:max-w-[180px]",
        { "w-auto": expanded }
      )}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={cn("ml-[15px]", { "max-phone:ml-[10px]": expanded })}
      >
        <Image
          className="block cursor-pointer w-[20px]"
          src={assets.menu_icon}
          alt="hamburger icon"
        />
      </div>
      <div
        onClick={newChat}
        className="mt-2.5 flex items-center gap-2.5 py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-[gray] cursor-pointer"
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
        <p className="mt-[30px] mb-[20px] max-phone:text-[14px] max-phone:mb-2">
          Recent
        </p>
        {prevPrompts &&
          prevPrompts.map((item, index) => (
            <div
              key={index}
              onClick={() => loadOldResults(item)}
              className="sidebar-item"
            >
              <Image
                className="w-[20px] max-phone:w-[16px]"
                src={assets.message_icon}
                alt="hamburger icon"
              />
              <p className="text-res max-phone:text-[14px]">{item}</p>
            </div>
          ))}
      </div>
    </aside>
  )
}

export default Sidebar
