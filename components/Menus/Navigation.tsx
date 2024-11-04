import Link from "next/link"

type Props = {
    onClick?: () => void
}

export const Navigation = ({onClick}: Props) => {
    return (
        <>
        <Link onClick={onClick} className="hover:underline uppercase" href="/">Home</Link>

        <Link onClick={onClick} className="hover:underline uppercase" href="#sobre">Sobre</Link>

        <Link onClick={onClick} className="hover:underline uppercase" href="#podcast">Podcast</Link>

        <Link onClick={onClick} className="hover:underline uppercase" href="#verticais">Verticais</Link>
        </>

    )
}  