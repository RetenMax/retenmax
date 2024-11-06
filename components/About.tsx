"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRightCircle } from "lucide-react"

import { motion } from "framer-motion"

const About = () => {
    return (
        <section id="sobre" className="container lg:pt-14 pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto gap-8 bg-[url('/images/bg-about.webp')] bg-cover p-8 lg:p-32">
                <motion.div
                    initial={{ opacity: 0, z: 1, transform: "translateX(-40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateX(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    className="flex align-center flex-col gap-7 justify-center antialiased font-medium order-2 md:order-1">
                    <p>A RetenMax é a parceira estratégica que ajuda empresas a enfrentar seus maiores desafios, promovendo uma transformação completa e sustentável. Com foco em Tecnologia e Automação, Marketing de Performance, Finanças Inteligentes, Gestão de Processos e Educação Empresarial, oferecemos soluções personalizadas para otimizar operações, fortalecer marcas e capacitar equipes. Nossa missão é clara: solucionar problemas complexos e impulsionar o crescimento das empresas.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, z: 1, transform: "translateX(40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateX(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    className="flex flex-col justify-center align-center gap-6 order-1 md:order-2">
                    <h1 className="w-full leading-2 text-4xl md:text-7xl font-extrabold antialiased text-orange-100 lg:text-8xl">
                        O que é a Retenmax?
                    </h1>
                    <Link href="https://api.whatsapp.com/send?phone=5567999502501" target="_blank">
                        <Button className="flex gap-2 hover:scale-95 transition-transform duration-300" variant="destructive">
                        Descobrir o Potencial da Minha Empresa <ArrowRightCircle className="h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default About
