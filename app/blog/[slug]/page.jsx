import { getBlogPost } from '@/lib/api'

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export async function generateMetadata({ params }) {

    const post = await getBlogPost(params.slug)

    return {
        title: `${post.titulo || ''} | Blog RetenMax | Retenção máxima de clientes`,
        description: `${post.titulo || ''} consultoria empresarial, software empresarial, campo grande ms, retenmax, retenção de clientes, retenção de clientes campo grande ms, retenção de clientes ms, retenção de clientes mato grosso do sul, retenção de clientes brasil, retenção de clientes sul, retenção de clientes centro-oeste, retenção de clientes norte, retenção de clientes nordeste, retenção de clientes sudeste, retenção de clientes suldeste, retenção de clientes mato grosso do sul, retenção de clientes mato grosso, retenção de clientes goiás, retenção de clientes são paulo, retenção de clientes rio de janeiro, retenção de clientes minas gerais, retenção de clientes espírito santo, retenção de clientes paraná, retenção de clientes santa catarina, retenção de clientes rio grande do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul`,
        keywords: "consultoria empresarial, software empresarial, campo grande ms, retenmax, retenção de clientes, retenção de clientes campo grande ms, retenção de clientes ms, retenção de clientes mato grosso do sul, retenção de clientes brasil, retenção de clientes sul, retenção de clientes centro-oeste, retenção de clientes norte, retenção de clientes nordeste, retenção de clientes sudeste, retenção de clientes suldeste, retenção de clientes mato grosso do sul, retenção de clientes mato grosso, retenção de clientes goiás, retenção de clientes são paulo, retenção de clientes rio de janeiro, retenção de clientes minas gerais, retenção de clientes espírito santo, retenção de clientes paraná, retenção de clientes santa catarina, retenção de clientes rio grande do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul, retenção de clientes mato grosso do sul",
        author: 'RetenMax',
        viewport: 'width=device-width, initial-scale=1.0',
        canonical: 'https://retenmax.com.br/blog',
        googlebot: 'index,follow'
    }
}

const createMarkup = (html) => {
    return { __html: html };
};

const BlogPost = async ({ params }) => {

    const post = await getBlogPost(params.slug)

    return (
        <main className="pl-16 pt-32 pb-32 bg-[url('/images/hero-bg.webp')]">

            <Link href="/blog">
                <Button className="mb-12">Voltar</Button>
            </Link>

            <h1 className="w-full h-40 leading-[50px] text-6xl lg:text-8xl font-extrabold antialiased text-orange-100 lg:leading-[86px]">
                {post.titulo}
            </h1>

            <span className="pt-32" dangerouslySetInnerHTML={createMarkup(post.texto)}></span>
        </main>
    )
}

export default BlogPost
