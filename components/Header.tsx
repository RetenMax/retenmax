"use client"

import Image from "next/image";

// Components
import { Button } from "./ui/button";
import Navigation from "./Menus/Navigation";

import { useWindowScroll } from "@uidotdev/usehooks";
import Link from "next/link";

export default function Header() {

    const [{ x, y }, scrollTo] = useWindowScroll();

    return (
        <div className={`fixed top-0 w-full flex items-center justify-center p-3 gap-16 z-50 ${y && y > 100 ? 'bg-zinc-900/50 backdrop-blur' : ''} transition-all ease-in-out duration-500`}>
            <Link href={"/"}>
                <Image 
                    src="./images/logo.svg"
                    alt="RetenMax Logo"
                    width={187}
                    height={40}
                    loading="lazy"
                />
            </Link>
            <Navigation />
            <Link href={"https://dna.retenmax.com.br/login"}>
                <Button
                    variant={"outline"}
                >
                    Logar-se
                </Button>
            </Link>
        </div>
    )
}