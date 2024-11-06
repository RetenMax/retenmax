"use client"

import Image from "next/image"
import { Button } from "./ui/button" 
import { ArrowRightCircle } from "lucide-react"
import Link from "next/link"

import { motion } from "framer-motion"

const Hero = () => {
    return(
        <div id="home" className="h-auto w-full bg-[url('/images/hero-bg.webp')] bg-cover lg:h-[800px]">
            <div className="container h-[600px] relative flex items-center md:h-[800px] md:items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ ease: 'easeInOut', duration: 1 }}
                    className="hidden md:block">
                    <Image
                        className="absolute top-0 -right-48 -z-10 opacity-80 mix-blend-soft-light"
                        src="/images/hero-banner.webp"
                        alt="Hero Banner Image"
                        width={900}
                        height={800}
                    />
                </motion.div>
                <motion.section
                    initial={{ opacity: 0, z: 1, transform: "translateY(40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateY(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}>
                    <h1 className="w-full leading-2 text-4xl md:text-7xl max-w-[13ch] font-semibold antialiased text-orange-100 lg:leading-[1]">
                    Solucionamos os <span className="font-extrabold">maiores desafios</span> da sua empresa. 
                    </h1>
                    <h2 className="pt-6 mb-5 font-light text-1xl max-w-[60ch]">
                   Estamos prontos para auxiliar sua empresa a enfrentar os desafios mais complexos e emergentes do mercado.
                    </h2>
                    <Link href="https://api.whatsapp.com/send?phone=5567999502501" target="_blank">
                        <Button className="flex gap-2 hover:scale-95 transition-transform duration-300" variant="destructive">
                        Descubrir o Potencial da Minha Empresa <ArrowRightCircle className="h-4 w-4" />
                        </Button>
                    </Link>
                </motion.section>
            </div>
        </div>
    )
}

export default Hero
