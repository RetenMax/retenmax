"use client"

// LIbs
import { useState } from "react"

// Icons
import { X } from "lucide-react"
import Image from "next/image"

export default function MobileNavigation({ open, menuState }) {
    return (
        <div className={`${open ? 'block' : 'hidden'} w-full h-screen bg-zinc-900/50 backdrop-blur fixed top-0 left-0 z-50 flex gap-4`}>

            <div className="flex w-full h-fit items-center justify-between p-4">
                <Image 
                    src="./images/logo-small.svg"
                    alt="RetenMax Logo"
                    width={40}
                    height={60}
                    loading="lazy"
                />
                <X className="w-9 h-9" onClick={menuState} />
            </div>

        </div>
    )
}