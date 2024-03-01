"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Whatsapp = () => {
    return (
        <div className="fixed right-0 bottom-0 m-12">
            <motion.div 
                initial={{ opacity: 0, transform: "translateY(40px)" }}
                whileInView={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ ease: 'easeInOut', duration: 1.5 }}
                className="bg-orange-500 rounded-full p-5 w-auto h-auto cursor-pointer">
                <Link href="https://api.whatsapp.com/send?phone=5567999502501">
                    <Image
                        width={33}
                        height={33}
                        alt="Whatsapp RetenMax"
                        src="/icons/whatsapp.svg"
                    />
                </Link>
            </motion.div>
        </div>
    )
}

export default Whatsapp