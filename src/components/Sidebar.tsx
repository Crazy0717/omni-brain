"use client"
import Image from "next/image"
import { assets } from "../assets/assets"
import { useState } from "react"
import { cn } from "@/lib/utils"

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <aside className="py-[25px] px-[15px] max-w-[230px] min-h-screen flex flex-col bg-light-1">
      <div onClick={() => setExpanded(!expanded)} className="ml-[15px]">
        <Image
          className="block cursor-pointer w-[20px]"
          src={assets.menu_icon}
          alt="hamburger icon"
        />
      </div>
      <div className="mt-2.5 flex items-center gap-2.5 py-[10px] px-[15px] bg-[#e6eaf1] rounded-[50px] text-[14px] text-[gray]">
        <Image className="w-[18px]" src={assets.plus_icon} alt="newchat icon" />
        <p className={cn("", { hidden: expanded })}>New Chat</p>
      </div>
      <div className={cn("flex flex-col", { hidden: expanded })}>
        <p className="mt-[30px] mb-[20px]">Recent</p>
        <div className="sidebar-item">
          <Image
            className="w-[20px]"
            src={assets.message_icon}
            alt="hamburger icon"
          />
          <p className="text-res">Whay is rRearRearRearRearRearRearRea</p>
        </div>
      </div>
      <div className="mt-auto">
        <div className={cn("sidebar-item", { "justify-center": expanded })}>
          <Image
            className="w-[20px]"
            src={assets.question_icon}
            alt="question icon"
          />
          <p className={expanded ? "hidden" : ""}>Help</p>
        </div>
        <div className={cn("sidebar-item", { "justify-center": expanded })}>
          <Image
            className="w-[20px]"
            src={assets.history_icon}
            alt="history icon"
          />
          <p className={expanded ? "hidden" : ""}>Activity</p>
        </div>
        <div className={cn("sidebar-item", { "justify-center": expanded })}>
          <Image
            className="w-[20px]"
            src={assets.setting_icon}
            alt="setting icon"
          />
          <p className={expanded ? "hidden" : "border"}>Setting</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
