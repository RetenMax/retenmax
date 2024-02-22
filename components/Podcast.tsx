"use client"

import { Podcast as Podcasticon, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const Podcast = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
            id="podcast"
            className="container flex flex-col gap-4 items-center text-center justify-center rounded-2xl pt-10 pb-20 mb-10 w-full bg-[url('/images/bg-companies.webp')] bg-center bg-auto">
            <h1 className="w-full font-extrabold antialiased text-orange-100 pb-4 min-md:leading-[86px] text-4xl">
                Podcast Os Guardiões da Retenção
            </h1>
            <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-6">
                <div>
                    <Link href="https://open.spotify.com/show/5dOqBjM4r5LColubDMDnfn?si=VuG66XzqRzypEwdqGLjmYA" target="_blank">
                        <h3 className="text-orange-100 font-bold text-2xl pb-4 flex items-center gap-3 justify-center"><Podcasticon /> Acompanhe no Spotify</h3>
                    </Link>
                    <iframe
                        className="hidden md:block"
                        src="https://open.spotify.com/embed/show/5dOqBjM4r5LColubDMDnfn/video?utm_source=generator"
                        width="560"
                        height="315"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                    <iframe
                        className="block md:hidden"
                        src="https://open.spotify.com/embed/show/5dOqBjM4r5LColubDMDnfn/video?utm_source=generator"
                        width="320"
                        height="315"
                        frameBorder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy">
                    </iframe>
                </div>
                <div>
                <Link href="https://www.youtube.com/@retenmax" target="_blank">
                    <h3 className="text-orange-100 font-bold text-2xl pb-4 flex items-center gap-3 justify-center"><Youtube /> Acompanhe no Youtube</h3>
                </Link>
                <iframe
                    className="hidden md:block"
                    width="560"
                    height="315" src="https://www.youtube.com/embed/Lqjta6jsYxI?si=dFMjR8LBbWI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                <iframe
                    className="block md:hidden"
                    width="320"
                    height="315" src="https://www.youtube.com/embed/Lqjta6jsYxI?si=dFMjR8LBbWI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
                </div>
            </div>
        </motion.div>
    )
}

export default Podcast
