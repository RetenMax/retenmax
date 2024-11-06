import { useState } from "react";
import { Navigation } from "./Navigation";

export const Hamburger = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button onClick={toggleMenu} className="lg:hidden flex flex-col justify-center space-y-1 ">
                <div className={`w-6 h-0.5 bg-white transition-transform duration-300  ${isOpen ? "rotate-45 translate-y-2 " : ""} `} />
                <div className={`w-6 h-0.5 bg-white transition-transform duration-300  ${isOpen ? "opacity-0 " : ""} `} />
                <div className={`w-6 h-0.5 bg-white transition-transform duration-300  ${isOpen ? "-rotate-45 -translate-y-1 " : ""} `} />

            </button>

            <div className={`fixed top-[84px] left-0 h-lvh bg-zinc-900/80 z-10 backdrop-blur-3xl text-white w-full flex items-center justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out lg:hidden`}>

                <nav className="flex flex-col items-center gap-4 text-[1.5rem] ">

                <Navigation onClick={toggleMenu} />
                
                </nav>
            </div>
        </>
    )
}