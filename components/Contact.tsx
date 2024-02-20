"use client"

import { ArrowRightCircle } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const Contact = () => {
    return(
        <motion.section
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
            id="contato"
            className="container pt-14 pb-14 antialiased">
            <div className="grid items-center justify-center align-center h-[600px] bg-[url('/images/bg-contact.webp')] bg-cover p-24">
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="w-full text-8xl text-center font-extrabold text-orange-100">
                        Vamos <br></br>Conversar?
                    </h1>
                    <p className="text-orange-100">Nós ajudamos a sua empresa a aprimorar a retenção de clientes e a de colaboradores.</p>
                    <Link href="https://api.whatsapp.com/send?phone=5567999482501" target="_blank">
                        <Button className="flex gap-2" variant="destructive">
                            Quero reter meus clientes <ArrowRightCircle className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
