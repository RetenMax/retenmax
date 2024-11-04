"use client"

import Image from "next/image"

import { motion } from "framer-motion"

const Companies = () => {
    return(
        <section id="empresas"
            className="w-full lg:h-[600px] bg-[url('/images/bg-companies.webp')] bg-center bg-cover">
            <div className="container grid h-full lg:grid-cols-3">
                <div className="flex flex-col justify-center items-center col-span-2 p-12">
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="mix-blend-lighten"
                        width={320}
                        height={400}
                        alt="RetenMax"
                        src="/images/logo.svg"
                    />
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="mix-blend-lighten"
                        width={320}
                        height={400}
                        alt="Finmax - RetenMax"
                        src="/images/finmax.webp"
                    />
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="mix-blend-lighten"
                        width={320}
                        height={400}
                        alt="RMax - RetenMax"
                        src="/images/rmax.webp"
                    />
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="mix-blend-lighten"
                        width={200}
                        height="auto"
                        alt="RMaster Empresas"
                        src="/images/rmaster.webp"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, z: 1, transform: "translateY(40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateY(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    className="w-full flex flex-col justify-center items-center min-h-full  pb-12 lg:p-2">
                    <h1 className="leading-[46px] leading-2 text-4xl text-center md:text-left  md:text-7xl font-extrabold antialiased text-orange-100 ">
                        Retenção em todas as verticais
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}

export default Companies
