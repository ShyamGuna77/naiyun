import { Header } from "./components/navbar/Header"
import Sidebar from "./components/navbar/sidebar"
const HomePage = () => {
  return (
    <div className="grid grid-cols-[54px_1fr]">
       <Sidebar />
         <main>
            <Header />
            </main>
    </div>
  )
}

export default HomePage