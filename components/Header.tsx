import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"
import { getMainMenu } from "@/lib/api"

const Header = async () => {

    const menu = await getMainMenu()

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
                    {menu.map(menu => {
                        return(
                            <Link key={menu.id} href={menu.Link}>
                                <Button variant={'ghost'}>{menu.Titulo}</Button>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
