import { assets } from "@/assets/assets"
import Image from "next/image"
import React from "react"
import Card from "./ui/Card"

const Main = () => {
  return (
    <main className="pb-[15vh] w-full min-h-screen relative">
      <nav className="p-[20px] flex items-center justify-between text-[22px] text-[#585858] ">
        <p>OmniBrain</p>
        {/* <Image src={assets.user_icon} alt="user icon" /> */}
      </nav>
      <div className="max-w-[900px] my-0 mx-auto">
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
        <div className="w-full max-w-[900px] px-[20px] absolute bottom-5">
          <div className="px-[20px] flex items-center justify-between bg-light-1 rounded-[50px]">
            <input
              className="flex-1  bg-transparent outline-none text-[18px]"
              type="text"
              placeholder="Type a prompt here..."
            />
            <div className="py-[10px] cursor-pointer">
              <Image
                className="w-[24px]"
                src={assets.send_icon}
                alt="send icon"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
