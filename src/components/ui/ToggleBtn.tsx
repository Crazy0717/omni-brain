"use client"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux"
import { setValue } from "@/lib/slices/states"
import { useEffect } from "react"

const ToggleBtn = () => {
  const { isDarkMode } = useAppSelector((state) => state.states)
  const dispatch = useAppDispatch()

  const toggleSwitch = () => {
    dispatch(setValue({ ident: "isDarkMode", value: !isDarkMode }))
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    dispatch(setValue({ ident: "isDarkMode", value: isDarkMode }))
  }, [isDarkMode])

  useEffect(() => {
    dispatch(
      setValue({
        ident: "isDarkMode",
        value: window.matchMedia("(prefers-color-scheme: dark)").matches,
      })
    )
  }, [])

  return (
    <div className="inline-block ">
      <div
        onClick={toggleSwitch}
        className="w-[2em] h-[1.2em] absolute rigth-0 z-[1] rounded-[1em]"
      ></div>
      <label className="switch w-[2em] h-[1em] inline-block bg-light-1 text-[20px] rounded-[1em] dark:bg-dark-2">
        <input
          defaultChecked={isDarkMode}
          className="absolute opacity-0"
          type="checkbox"
        />
        <div className="w-[1em] h-[1em] rounded-[1em] dark:bg-dark-3"></div>
      </label>
    </div>
  )
}

export default ToggleBtn
