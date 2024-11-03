import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

const Header = async () => {
    return(
        <header className="fixed top-0 backdrop-blur-md bg-black/10 w-full pt-6 pb-6 z-10">
            <div className="container mx-auto flex justify-between">
                <Link href="/">
                    <Image
                        src={"/images/logo.svg"}
                        alt="Retenmax Logo"
                        width={161}
                        height={32}
                    />
                </Link>
                <div className="hidden lg:flex gap-4 visible">
                    <Link href="#empresas">
                        <Button variant={'ghost'}>Empresas</Button>
                    </Link>
                    <Link href="#sobre">
                        <Button variant={'ghost'}>Sobre Nós</Button>
                    </Link>
                    <Link href="#podcast">
                        <Button variant={'ghost'}>Podcast</Button>
                    </Link>
                    <Link href="#clientes">
                        <Button variant={'ghost'}>Clientes</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
