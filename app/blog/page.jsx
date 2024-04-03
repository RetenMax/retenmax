import { getBlogPosts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Blog Retenmax",
    description: "Retenção máxima de clientes",
    keywords: "consultoria empresarial, software empresarial, campo grande ms, retenmax, retenção de clientes, retenção de clientes campo grande ms, retenção de clientes ms, retenção de clientes mato grosso do sul, retenção de clientes brasil, retenção de clientes sul, retenção de clientes centro-oeste, retenção de clientes norte, retenção de clientes nordeste, retenção de clientes sudeste, retenção de clientes suldeste, retenção de clientes mato grosso do sul, retenção de clientes mato grosso, retenção de clientes goiás, retenção de clientes são paulo, retenção de clientes rio de janeiro, retenção de clientes minas gerais, retenção de clientes espírito santo, retenção de clientes paraná, retenção de clientes santa catarina, retenção de clientes rio grande do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul ",
    authors: { name: "Retenmax" },
    viewport: "width=device-width, initial-scale=1.0",
    robots: "follow, index"
};

const Blog = async () => {

    const posts = await getBlogPosts();

    return (
        <main className="pl-16 pt-32">

            <h1 className="w-full leading-[50px] text-6xl lg:text-8xl font-extrabold antialiased text-orange-100 lg:leading-[86px]">
                Blog
            </h1>

            <div className="grid grid-cols-4 gap-6 pt-16 pb-16 bg-[url('/images/hero-bg.webp')]">
                {posts && posts.map(post => {
                    return(
                        <Link key={post.id} href={`blog/${post.slug}`}>
                            <div className="rounded shadow-lg p-4 w-full hover:opacity-70">
                                <Image
                                    style={{objectFit: "cover", borderRadius: "10px"}}
                                    src={`${process.env.NEXT_PUBLIC_PROD_API_ENDPOINT}/assets/${post.Thumbnail}`}
                                    alt={post.titulo}
                                    width={500}
                                    height={500}
                                />
                                <div className="flex flex-col justify-between min-h-44 bg-black/30 backdrop-blur-md p-5">
                                    <h1 className="text-4xl font-bold antialiased text-orange-100">
                                        {post.Titulo}
                                    </h1>
                                    <div className="flex text-gray-400 text-sm pt-2">
                                        {new Date(post.date_created).getUTCDate()}/
                                        {new Date(post.date_created).getMonth()}/
                                        {new Date(post.date_created).getFullYear()}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>

        </main>
    )
}

export default Blog
