import Main from "@/components/Main"
import Sidebar from "@/components/Sidebar"

export default function Home() {
  return (
    <div className="flex app">
      <Sidebar />
      <Main />
    </div>
  )
}
