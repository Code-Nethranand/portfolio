import Navbar from "./Navbar"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-50 to-zinc-50/0 dark:from-zinc-900 dark:to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]"> 
            <h1>
                <a href="/" className="logo">
                <img 
                src="/images/logo.svg" 
                width={40}
                height={40} 
                alt="Code-Nethranand"
                className="filter dark:invert-0 invert" /></a>
            </h1>

            <div className="relative md:justify-self-center">
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button className="menu-btn" onClick={() => setNavOpen((prev) => !prev)}>
                        <span className="material-symbols-rounded">
                            {navOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
                <Navbar navOpen={navOpen} />
            </div>

            <div className="flex items-center gap-3 max-md:hidden md:justify-self-end">
                <ThemeToggle />
                <a href="#contact" className="btn btn-secondary h-9">Contact Me</a>
            </div>
        </div>
    </header>
  )
}

export default Header