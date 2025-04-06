'use client'

import { Header } from "./components/navbar/Header"
import Sidebar from "./components/navbar/sidebar"
import { About } from "./components/about/about";
import Hero from "./components/Hero/MainPage";
const HomePage = () => {
  return (
    <div className="grid grid-cols-[54px_1fr] bg-[#18181B]">
      <Sidebar />
      <main>
        {/* <Header /> */}
        <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24">
          <Hero />
          <About />
        </div>
      </main>
    </div>
  );
}

export default HomePage