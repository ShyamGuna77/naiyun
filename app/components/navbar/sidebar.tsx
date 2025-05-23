/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect,useState } from "react";
import { motion } from "motion/react";
import SidebarLink from "./sidebarLink";

const Sidebar = () => {

    const [selected,setSelected] = useState("");
    useEffect(() => {
        const sections = document.querySelectorAll('.section-wrapper')
        const options = {
          threshold: 0.3,
        };

     
        const callback = (entries: any) => {
          entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
              setSelected(entry.target.id);
            }
          });
        };

        const observer = new IntersectionObserver(callback, options);

        sections.forEach((section) => observer.observe(section));
    },[])

  return (
    <motion.nav
      initial={{ x: -70 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="no-scrollbar bg-zinc-950 h-screen sticky top-0 left-0 z-20 flex flex-col items-center overflow-y-scroll text-white"
    >
      <span className="shrink-0 text-xl font-black leading-[1] size-10 flex items-center justify-center my-4">
        SPD<span className="text-indigo-500">.</span>
      </span>
      <SidebarLink
        selected={selected}
        setSelected={setSelected}
        value="about"
        href="#about"
      >
        About
      </SidebarLink>
      <SidebarLink
        selected={selected}
        setSelected={setSelected}
        value="projects"
        href="#projects"
      >
        Projects
      </SidebarLink>
      <SidebarLink
        selected={selected}
        setSelected={setSelected}
        value="experience"
        href="#experience"
      >
        Exp.
      </SidebarLink>
      <SidebarLink
        selected={selected}
        setSelected={setSelected}
        value="contact"
        href="#contact"
      >
        Contact
      </SidebarLink>
    </motion.nav>
  );
}

export default Sidebar

