import ToggleBtn from "./ui/ToggleBtn"
import ChatPart from "./ChatPart"

const Main = () => {
  return (
    <main className="pb-[15vh] w-full min-h-screen relative dark:bg-dark-1">
      <nav className="p-[20px] flex items-center justify-between text-[22px] text-[#585858]">
        <p className="dark:text-dark-text">OmniBrain</p>
        <ToggleBtn />
      </nav>
      <div className="max-w-[900px] my-0 mx-auto max-phone:px-5 max-tablet:px-5 max-desktop:px-5">
        <ChatPart />
      </div>
    </main>
  )
}

export default Main
