"use client"

import Image from "next/image"

import { motion } from "framer-motion"

const Companies = () => {
    return(
        <section id="empresas"
            className="w-full h-[600px] bg-[url('/images/bg-companies.webp')] bg-center bg-cover">
            <div className="container grid h-full lg:grid-cols-3">
                <div className="flex justify-center items-center col-span-2">
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="mix-blend-lighten"
                        width={740}
                        height={500}
                        alt="Retenmax Empresas"
                        src="/images/companies.webp"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, z: 1, transform: "translateY(40px)" }}
                    whileInView={{ opacity: 1, z: 1, transform: "translateY(0)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    className="w-full flex flex-col justify-center items-center w-full min-h-full">
                    <h1 className="leading-[46px] text-5xl font-extrabold antialiased text-orange-100 lg:text-7xl ">
                        Retenção em todas as verticais
                    </h1>
                </motion.div>
            </div>
        </section>
    )
}

export default Companies
