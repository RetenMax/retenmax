"use client"

import Image from "next/image"

import { motion } from "framer-motion"

const Team = () => {
    return(
        <section className="bg-[url('/images/bg-team.webp')] bg-cover antialiased max-md:mt-8 md:p-20">
            <div className="container grid md:grid-cols-3">

                <div className="grid md:col-span-3">
                    <h1 className="font-extrabold text-center text-orange-100 max-md: md:leading-[80px] text-3xl">
                        Quem são os Guardiões da Retenção
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="grid h-full  gap-26 md:grid-cols-3">

                        <div className="flex flex-col items-center">
                            <Image
                                width={340}
                                height={430}
                                src="/images/art.png"
                                alt="Arthur Maximiliano"
                                className="mb-4"
                            />
                            <h2 className="text-orange-100 font-semibold">CSO e Founder na RetenMax</h2>
                            <h3 className="text-orange-100">Engenheiro de Produção</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                width={340}
                                height={430}
                                src="/images/anderson.png"
                                alt="Anderson "
                                className="mb-4"
                            />
                            <h2 className="text-orange-100 font-semibold">CRO e Sócio na RetenMax</h2>
                            <h2 className="text-orange-100">Gestor de Produtos</h2>
                            <h3 className="text-orange-100">CIM ® Gestor Comercial</h3>
                        </div>

                        <div className="flex flex-col items-center">
                            <Image
                                width={320}
                                height={400}
                                src="/images/kaio.png"
                                alt="Kaio "
                                className="mb-4"
                            />
                            <h2 className="text-orange-100 font-semibold">CTO e Sócio na RetenMax</h2>
                            <h2 className="text-orange-100">Desenvolvedor de software</h2>
                        </div>

                        
                    </motion.div>
                </div>
          
                        

               


            </div>

        </section>
    )
}

export default Team

{/*
 <motion.img
                    initial={{ opacity: 0, transform: "translateX(40px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    width="100%"
                    height="auto"
                    src="images/guardioes-side.webp"
                    alt="Guardiões da Retenção"
                    className="hidden md:block"
                />
*/}