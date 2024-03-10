"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

import { motion } from "framer-motion"

const Header = () => {
    return(
        <header className="fixed top-0 backdrop-blur-md bg-black/10 w-full pt-6 pb-6 z-10">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                className="container mx-auto flex justify-between">
                <Link href="/">
                    <Image
                        src={"/images/logo.svg"}
                        alt="Retenmax Logo"
                        width={161}
                        height={32}
                    />
                </Link>
                <div className="hidden lg:flex gap-4 visible">
                    <Link href="/blog">
                        <Button variant={'ghost'}>Blog</Button>
                    </Link>
                    <Link href="/#podcast">
                        <Button variant={'ghost'}>Podcast</Button>
                    </Link>
                    <Link href="/#empresas">
                        <Button variant={'ghost'}>Serviços</Button>
                    </Link>
                    <Link href="/#clientes">
                        <Button variant={'ghost'}>Clientes</Button>
                    </Link>
                    <Link href="/#contato">
                        <Button>Entre em contato</Button>
                    </Link>
                </div>
            </motion.div>
        </header>
    )
}

export default Header
