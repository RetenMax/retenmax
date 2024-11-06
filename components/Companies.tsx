"use client"


import { motion } from "framer-motion"

const Companies = () => {
    return (
        <section id="verticais"
            className="w-full lg:h-[900px] bg-[url('/images/bg-companies.webp')] bg-center bg-cover py-22 md:py-44">
            <div className="container grid h-full  ">

                    <motion.div
                        initial={{ opacity: 0, z: 1, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, z: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="w-full flex flex-col md:flex justify-center items-center min-h-full  pb-12 lg:p-2">
                        <h1 className="leading-[46px] leading-2 text-4xl text-center md:text-left  md:text-7xl font-extrabold antialiased text-orange-100 pt-10 ">
                            Retenção em Todas as Verticais 
                        </h1>
                    </motion.div>

                    <div className="grid md:grid-cols-3 grid-rows-2 justify-center items-center p-12">

                 
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

                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className=" "
                        width={320}
                        height={400}
                        alt="Max Ia Empresas "
                        src="/images/maxia.png"
                    />

                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className=" "
                        width={320}
                        height={400}
                        alt="Elevmax Empresas "
                        src="/images/elevamax.png"
                    />

                </div>

            </div>
        </section>
    )
}

export default Companies
