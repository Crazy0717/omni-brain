import Main from "@/components/Main"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="app flex animate-fadeIn1">
      <Sidebar />
      <Main />
    </div>
  )
}
