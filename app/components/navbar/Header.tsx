
import Link from "next/link";

import { SiCodepen,SiGithub,SiLinkedin } from "react-icons/si";
import { Button } from "./Button";

export const Header = () => {
    return (
        <>
        <header className="h-[720px] px-4 flex items-center justify-between
        sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md
        ">
            <MyLinks />
            <Button >My resume</Button>
            </header>
        </>
    )
}

export const MyLinks = () => {
    return (
      <>
        <div className="flex items-center justify-between text-lg gap-4">
          <Link
            href="https://www.linkedin.com"
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
          >
            <SiCodepen />
          </Link>
          <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://www.linkedin.com"
          >
            <SiGithub />
          </Link>
          <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://www.linkedin.com"
          >
            <SiLinkedin />
          </Link>
          <Link
            className="text-zinc-300 hover:text-indigo-300 transition-colors"
            href="https://www.linkedin.com"
          >
            <SiCodepen />
          </Link>
        </div>
        ;
      </>
    );
   
}