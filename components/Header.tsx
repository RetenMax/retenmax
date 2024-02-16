import Image from "next/image"
import { Button } from "./ui/button"

const Header = () => {
    return(
        <header className="fixed top-0 backdrop-blur-md bg-black/10 w-full pt-6 pb-6 z-10">
            <div className="container mx-auto flex justify-between">
                <Image
                    src={"/images/logo.svg"}
                    alt="Retenmax Logo"
                    width={160}
                    height={32}
                />
                <div className="flex gap-4">
                    <Button variant={'ghost'}>Podcast</Button>
                    <Button variant={'ghost'}>Serviços</Button>
                    <Button variant={'ghost'}>Clientes</Button>
                    <a href="#">
                        <Button>Entre em contato</Button>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header
