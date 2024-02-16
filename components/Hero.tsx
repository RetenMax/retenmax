import Image from "next/image"
import { Button } from "./ui/button"
import { ArrowRightCircle } from "lucide-react"


const Hero = () => {
    return(
        <div className="w-full h-[800px] bg-[url('/images/hero-bg.webp')] bg-cover">
            <div className="container h-[800px] relative flex items-center">
                <Image
                    className="absolute top-0 right-0 -z-10"
                    src="/images/hero-banner.webp"
                    alt="Hero Banner Image"
                    width={900}
                    height={800}
                />
                <section>
                    <h1 className="w-full leading-[86px] text-8xl font-extrabold antialiased text-orange-100">
                        Retenção <br></br> Máxima <br></br> de Clientes
                    </h1>
                    <h2 className="pt-6 mb-6 font-light">
                        Nós já atendemos mais de 1000 empresas em todo Brasil e no mundo. <br></br> Entenda como melhorar a performance da sua empresa.
                    </h2>
                    <Button className="flex gap-2" variant="destructive">
                        Quero reter meus clientes <ArrowRightCircle className="h-4 w-4" />
                    </Button>
                </section>
            </div>
        </div>
    )
}

export default Hero
