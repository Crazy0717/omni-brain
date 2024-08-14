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
      <label
        aria-label="darkmode switch button"
        className="switch w-[2em] h-[1em] inline-block bg-light-1 text-[20px] rounded-[1em] dark:bg-dark-2"
      >
        <input
          checked={isDarkMode}
          onChange={toggleSwitch}
          className="absolute opacity-0"
          type="checkbox"
          aria-label="darkmode switch button"
        />
        <div className="w-[1em] h-[1em] rounded-[1em] dark:bg-dark-3"></div>
      </label>
    </div>
  )
}

export default ToggleBtn
