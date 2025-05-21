"use client"

// Libs
import Image from "next/image";
import Link from "next/link";

// Components
import { Button } from "./ui/button";
import Navigation from "./Menus/Navigation";

// Hooks
import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import MobileNavigation from "./Menus/MobileNavigation";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {

    const [{ x, y }, scrollTo] = useWindowScroll();

    const { height, width } = useWindowSize()

    const isMobile = (width ?? 0) < 768


    // Mobile Menus
    const [ open, setOpen ] = useState(false)

    return (
        <>
            <div className={`sticky top-0 w-full flex items-center justify-between md:justify-center p-3 gap-16 z-50 ${y && y > 100 ? 'bg-zinc-900/50 backdrop-blur' : ''} transition-all ease-in-out duration-500`}>
                <Link href={"/"}>
                    {isMobile ? (
                        <Image 
                            src="./images/logo-small.svg"
                            alt="RetenMax Logo"
                            width={40}
                            height={60}
                            loading="lazy"
                        />
                    ) : (
                        <Image 
                            src="./images/logo.svg"
                            alt="RetenMax Logo"
                            width={187}
                            height={40}
                            loading="lazy"
                        />
                    )}
                </Link>
                {isMobile ? (
                    <div
                        className="w-9 h-9 flex items-center justify-center"
                        onClick={() => setOpen(true)}
                    >
                        <Menu />
                    </div>
                ) : (
                    <>
                        <Navigation />
                        <Link href={"https://dna.retenmax.com.br/login"}>
                            <Button
                                variant={"outline"}
                            >
                                Logar-se
                            </Button>
                        </Link>
                    </>
                )}
            </div>
            <MobileNavigation
                open={open}
                menuState={() => setOpen(!open)}
            />
        </>
    )
}