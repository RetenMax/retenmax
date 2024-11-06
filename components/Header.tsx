"use client"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "./Menus/Navigation"
import { Hamburger } from "./Menus/Hamburger"

const Header = () => {

    return (
        <header className="fixed top-0 backdrop-blur-md bg-black/10 w-full pt-6 pb-6 z-10">
            <div className="container mx-auto flex justify-between">
                <Link href="/">
                    <Image
                        src={"/images/logo.svg"}
                        alt="Retenmax Logo"
                        width={161}
                        height={32}
                    />
                </Link>

                <Hamburger/>

                <nav className="hidden lg:flex items-center gap-8 font-medium">
                    <Navigation/>
                </nav>

            </div>
        </header>
    )
}

export default Header
