"use client"

import { motion } from "framer-motion"

const Podcast = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
            id="podcast"
            className="container flex flex-col gap-4 items-center text-center justify-center rounded-2xl pt-10 pb-20 mb-10 w-full bg-[url('/images/bg-companies.webp')] bg-center bg-auto">
            <h1 className="w-full leading-[86px] text-4xl font-extrabold antialiased text-orange-100">Os Guardiões da Retenção</h1>
            <iframe
                width="560"
                height="315" src="https://www.youtube.com/embed/Lqjta6jsYxI?si=URUNXq5oztfhengT"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </motion.div>
    )
}

export default Podcast
