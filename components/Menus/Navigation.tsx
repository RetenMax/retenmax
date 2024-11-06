import Link from "next/link"

type Props = {
    onClick?: () => void
}

export const Navigation = ({onClick}: Props) => {
    return (
        <>
        <Link onClick={onClick} className="hover:underline " href="https://www.retenmax.com.br/#verticais">Verticais</Link>

        <Link onClick={onClick} className="hover:underline " href="https://www.retenmax.com.br/#sobre">Sobre</Link>

        <Link onClick={onClick} className="hover:underline " href="https://www.retenmax.com.br/#podcast">Podcast</Link>

        <Link onClick={onClick} className="hover:underline " href="https://www.retenmax.com.br/#clientes">Clientes</Link>

        
        <Link onClick={onClick} className="hover:underline " href="https://www.retenmax.com.br/blog">Blog</Link>
        <Link onClick={onClick} className=" px-6 py-4 bg-black/50 rounded-full hover:bg-orange-500 transition-transform duration-300   " href="https://dna.retenmax.com.br/login">Login</Link>
        </>

    )
}  