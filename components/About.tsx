"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRightCircle } from "lucide-react"

import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="container lg:pt-14 pb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto gap-8 bg-[url('/images/bg-about.webp')] bg-cover p-8 lg:p-24">
                <motion.div
                    initial={{ opacity: 0, z: 1, transform: "translateX(-40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateX(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    className="flex align-center flex-col gap-7 justify-center antialiased font-medium order-2 md:order-1">
                    <p>A RetenMax é uma Empresa com o foco de desenvolver e aprimorar tanto a Retenção de Talentos da empresa quanto a de Clientes.</p>
                    <p>Tal intuito mescla a experiência obtida em anos de mercado de trabalho no aprimoramento de empresas das mais diversas áreas, utilizando metodologias de Growth Hacking, Customer Success, Business Inteligence.</p>
                    <p>Usando de tecnologia e softwares próprios, temos os dados como parceiros na entrega. Resultando assim em performance empresarial, o conceito é viabilizar em um curto prazo de tempo implantações eficientes e resultados eficazes.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, z: 1, transform: "translateX(40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateX(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    className="flex flex-col justify-center align-center gap-6 order-1 md:order-2">
                    <h1 className="w-full text-5xl font-extrabold antialiased text-orange-100 lg:text-8xl">
                        O que é a Retenmax?
                    </h1>
                    <Link href="https://api.whatsapp.com/send?phone=5567999482501" target="_blank">
                        <Button className="flex gap-2 w-64" variant="destructive">
                            Quero reter meus clientes <ArrowRightCircle className="h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default About
