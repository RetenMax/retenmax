'use client'

import { motion } from "framer-motion";
import AnimatedGradientBackground from "./ui/animated-gradient-background";
import { GlowingEffect } from "./ui/glowing-effect";
import { Button } from "./ui/button";
import { ChevronRight, ChevronRightCircle } from "lucide-react";
import Link from "next/link";

export default  function Companies() {
    return (
        <div className="relative companies-bg flex flex-col gap-2 pt-10">

            <h1 className="text-center font-bold text-[38px]">Retenção em Todas as Verticais</h1>

            <div className="container mx-auto grid md:grid-cols-4 p-12 gap-4">

                <CompanyTileCard className="relative flex flex-col gap-2">
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="w-full h-fit mix-blend-lighten"
                        alt="Max IA - RetenMax"
                        src="/images/maxia.png"
                    />
                    <h1 className="font-semibold">Max IA</h1>
                    <p className="font-medium text-[14px] text-zinc-400">
                        Inteligência Artificial Aplicada à Gestão, ajudando empresas a automatizar atendimentos, otimizar processos e melhorar a experiência do cliente.
                    </p>
                    <Link href="/maxia">
                        <Button variant={"outline"} className="flex gap-2 mt-4">
                            Conheça mais
                            <ChevronRightCircle width={16} height={16} />
                        </Button>
                    </Link>
                </CompanyTileCard>

                <CompanyTileCard className="flex flex-col gap-2">
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="w-full h-fit self-center mix-blend-lighten"
                        alt="Finmax - RetenMax"
                        src="/images/finmax.webp"
                    />
                    <h1 className="font-semibold">FinMax</h1>
                    <p className="font-medium text-[14px] text-zinc-400">
                        O FinMax é a solução da RetenMax para empresas que desejam transformar a gestão financeira em um pilar de crescimento sustentável. Com foco em organização, clareza e estratégia, o serviço entrega uma visão completa da saúde financeira do negócio, permitindo que empresários tomem decisões mais assertivas e planejadas.
                    </p>
                    <Link href="/finmax">
                        <Button variant={"outline"} className="flex gap-2 mt-4">
                            Conheça mais
                            <ChevronRightCircle width={16} height={16} />
                        </Button>
                    </Link>
                </CompanyTileCard>

                <CompanyTileCard className="flex flex-col gap-2">
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="w-full h-fit self-center mix-blend-lighten"
                        alt="RMaster - RetenMax"
                        src="/images/rmaster.webp"
                    />
                    <h1 className="w-full font-semibold text-left">RMaster</h1>
                    <p className="font-medium text-[14px] text-zinc-400">Gestão Financeira Empresarial, ajudando empresas a estruturar, organizar e otimizar seus processos financeiros.</p>
                    <Link href="/rmaster">
                        <Button variant={"outline"} className="flex gap-2 mt-4">
                            Conheça mais
                            <ChevronRightCircle width={16} height={16} />
                        </Button>
                    </Link>
                </CompanyTileCard>

                <CompanyTileCard className="flex flex-col gap-2">
                    <motion.img
                        initial={{ opacity: 0, transform: "translateY(40px)" }}
                        whileInView={{ opacity: 1, transform: "translateY(0)" }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="w-full h-fit mix-blend-lighten"
                        alt="RMax - RetenMax"
                        src="/images/rmax.webp"
                    />
                    <h1 className="font-semibold">RMax</h1>
                    <p className="font-medium text-[14px] text-zinc-400">
                        Marketing Estratégico para empresas, ajudando negócios a fortalecer sua marca, atrair clientes e aumentar suas vendas.
                    </p>
                    <Link href="/rmax">
                        <Button variant={"outline"} className="flex gap-2 mt-4">
                            Conheça mais
                            <ChevronRightCircle width={16} height={16} />
                        </Button>
                    </Link>
                </CompanyTileCard>

            </div>

        </div>
    )
}

function CompanyTileCard({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 ${className}`}>
            <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
            />
            {children}
        </div>
    )
}

// "use client"


// import { motion } from "framer-motion"

// const Companies = () => {
//     return (
//         <section id="verticais"
//             className="w-full lg:h-[900px] bg-[url('/images/bg-companies.webp')] bg-center bg-cover py-22 md:py-44">
//             <div className="container grid h-full  ">

//                     <motion.div
//                         initial={{ opacity: 0, z: 1, transform: "translateY(40px)" }}
//                         whileInView={{ opacity: 1, z: 1, transform: "translateY(0)" }}
//                         transition={{ ease: 'easeInOut', duration: 1.5 }}
//                         className="w-full flex flex-col md:flex justify-center items-center min-h-full  pb-12 lg:p-2">
//                         <h1 className="leading-[46px] leading-2 text-4xl text-center md:text-left  md:text-7xl font-extrabold antialiased text-orange-100 pt-10 ">
//                             Retenção em Todas as Verticais 
//                         </h1>
//                     </motion.div>

//                     <div className="grid md:grid-cols-3 grid-rows-2 justify-center items-center p-12">

                

//                     <motion.img
//                      initial={{ opacity: 0, transform: "translateY(40px)" }}
//                      whileInView={{ opacity: 1, transform: "translateY(0)" }}
//                      transition={{ ease: 'easeInOut', duration: 1.5 }}
//                      className="mix-blend-lighten"
//                      width={320}
//                      height={400}
//                      alt="RetenMax"
//                      src="/images/logo.svg"
//                  />

//                     <motion.img
//                         initial={{ opacity: 0, transform: "translateY(40px)" }}
//                         whileInView={{ opacity: 1, transform: "translateY(0)" }}
//                         transition={{ ease: 'easeInOut', duration: 1.5 }}
//                         className="mix-blend-lighten"
//                         width={320}
//                         height={400}
//                         alt="RMax - RetenMax"
//                         src="/images/rmax.webp"
//                     />

//                     <motion.img
//                         initial={{ opacity: 0, transform: "translateY(40px)" }}
//                         whileInView={{ opacity: 1, transform: "translateY(0)" }}
//                         transition={{ ease: 'easeInOut', duration: 1.5 }}
//                         className="mix-blend-lighten"
//                         width={200}
//                         height="auto"
//                         alt="RMaster Empresas"
//                         src="/images/rmaster.webp"
//                     />

//                     <motion.img
//                         initial={{ opacity: 0, transform: "translateY(40px)" }}
//                         whileInView={{ opacity: 1, transform: "translateY(0)" }}
//                         transition={{ ease: 'easeInOut', duration: 1.5 }}
//                         className=" "
//                         width={320}
//                         height={400}
//                         alt="Max Ia Empresas "
//                         src="/images/maxia.png"
//                     />

//                     <motion.img
//                         initial={{ opacity: 0, transform: "translateY(40px)" }}
//                         whileInView={{ opacity: 1, transform: "translateY(0)" }}
//                         transition={{ ease: 'easeInOut', duration: 1.5 }}
//                         className=" "
//                         width={320}
//                         height={400}
//                         alt="Elevmax Empresas "
//                         src="/images/elevamax.png"
//                     />

//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Companies
