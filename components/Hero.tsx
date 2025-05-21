'use client'

// Libs
import { motion } from "framer-motion";
import Link from "next/link";

// Components
import { ChevronRightCircle } from "lucide-react";
import AnimatedGradientBackground from "./ui/animated-gradient-background";
import { Button } from "./ui/button";
import { GooeyText } from "./ui/gooey-text-morphing";

export default function Hero() {
    return (
        <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 4 }}
                className="z-10"
            >
                <div className="flex flex-col items-center justify-center gap-12">

                    <h1 className="md:max-w-2xl text-2xl p-6 md:text-[48px] font-semibold text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-300">
                        Solucionamos os maiores desafios de sua empresa em
                    </h1>

                    <GooeyText
                        texts={["IA", "Financeiro", "Atendimento", "Processos", "Marketing", "Vendas"]}
                        morphTime={2}
                        cooldownTime={0.25}
                        className="font-bold transition-all ease-in-out"
                    />
                    <h1 className="max-w-xl text-[18px] font-light text-zinc-400 text-center mt-2">
                        Estamos prontos para auxiliar sua empresa a enfrentar os desafios mais complexos e emergentes do mercado.
                    </h1>
                    <Link href="https://api.whatsapp.com/send?phone=556799438628&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20RetenMax." target="_blank">
                        <Button className="flex gap-2">
                            Descobrir o potencial de minha empresa
                            <ChevronRightCircle
                                width={16}
                                height={16}
                            />
                        </Button>
                    </Link>
                </div>
            </motion.div>

            <AnimatedGradientBackground
                Breathing={true}
                gradientColors={["#000000", "#201105", "#3A1F09", "#CC5F00", "#E17100", "#F58300", "#FF9D2C"]}
                startingGap={95}
            />
        </div>
    )
}


// "use client"

// import Image from "next/image"
// import { Button } from "./ui/button" 
// import { ArrowRightCircle } from "lucide-react"
// import Link from "next/link"

// import { motion } from "framer-motion"

// const Hero = () => {
//     return(
//         <div id="home" className="h-auto w-full bg-[url('/images/hero-bg.webp')] bg-cover">
//             <div className="container h-[600px] relative flex items-center md:items-center">
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ ease: 'easeInOut', duration: 1 }}
//                     className="hidden md:block">
//                     <Image
//                         className="absolute top-0 -right-48 -z-10 opacity-80 mix-blend-soft-light"
//                         src="/images/hero-banner.webp"
//                         alt="Hero Banner Image"
//                         width={400}
//                         height={800}
//                     />
//                 </motion.div>
//                 <motion.section
//                     initial={{ opacity: 0, z: 1, transform: "translateY(40px)" }}
//                     whileInView={{ opacity: 1, z: 1, transform: "translateY(0)" }}
//                     transition={{ ease: 'easeInOut', duration: 1.5 }}>
//                     <h1 className="w-full leading-2 text-4xl md:text-7xl max-w-[13ch] font-semibold antialiased text-orange-100 lg:leading-[1]">
//                     Solucionamos os <span className="font-extrabold">maiores desafios</span> da sua empresa. 
//                     </h1>
//                     <h2 className="pt-6 mb-5 font-light text-1xl max-w-[60ch]">
//                    Estamos prontos para auxiliar sua empresa a enfrentar os desafios mais complexos e emergentes do mercado.
//                     </h2>
//                     <Link href="https://api.whatsapp.com/send?phone=556799438628&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20RetenMax." target="_blank">
//                         <Button className="flex gap-2 hover:scale-95 transition-transform duration-300" variant="destructive">
//                         Descobrir o Potencial da Minha Empresa <ArrowRightCircle className="h-4 w-4" />
//                         </Button>
//                     </Link>
//                 </motion.section>
//             </div>
//         </div>
//     )
// }

// export default Hero
