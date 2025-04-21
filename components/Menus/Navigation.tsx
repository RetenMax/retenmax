import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="w-fit h-auto rounded-3xl border p-1">
            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Verticais</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-zinc-900">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <div
                                            className="flex h-full w-full bg-[url('/images/hero-banner.webp')] bg-cover backdrop-blur select-none flex-col justify-center rounded-md p-6"
                                        />
                                    </NavigationMenuLink>
                                </li>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/maxia"
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <div className="text-sm font-medium leading-none">
                                                Max IA
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                A Max IA é uma vertical dedicada a inteligência artificial, com o objetivo de potencializar a retenção de clientes.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/finmax"
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <div className="text-sm font-medium leading-none">
                                                FinMax
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Gestão Financeira Empresarial, ajudando empresas a estruturar, organizar e otimizar seus processos financeiros.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/rmax"
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <div className="text-sm font-medium leading-none">
                                                RMax
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Marketing Estratégico para empresas, ajudando negócios a fortalecer sua marca, atrair clientes e aumentar suas vendas.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/rmaster"
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <div className="text-sm font-medium leading-none">
                                                RMaster
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Construção de Processos, definição da Cultura Organizacional e implementação de indicadores para fortalecer a gestão.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/elevamax"
                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        >
                                            <div className="text-sm font-medium leading-none">
                                                ElevaMax
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                Ambiente exclusivo para Assinantes com Conteúdos Aprofundados.
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="#podcast" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Podcast
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="#sobre" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Empresa
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem>
                        <Link href="/produtos" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Produtos
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem> */}

                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

// import Link from "next/link"

// type Props = {
//     onClick?: () => void
// }

// export const Navigation = ({onClick}: Props) => {
//     return (
//         <>
//         <Link onClick={onClick} className="hover:underline " href="/#verticais">Verticais</Link>

//         <Link onClick={onClick} className="hover:underline " href="/#sobre">Sobre</Link>

//         <Link onClick={onClick} className="hover:underline " href="/#podcast">Podcast</Link>

//         <Link onClick={onClick} className="hover:underline " href="/#clientes">Clientes</Link>

        
//         <Link onClick={onClick} className="hover:underline " href="/blog">Blog</Link>
//         <Link onClick={onClick} className=" px-6 py-4 bg-black/50 rounded-full hover:bg-orange-500 transition-transform duration-300   " href="https://dna.retenmax.com.br/login">Login</Link>
//         </>

//     )
// }  