import client from '@/app/prismicio';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata = {
    title: "Blog Retenmax",
    description: "Retenção máxima de clientes",
    keywords: "consultoria empresarial, software empresarial, ...",
    authors: { name: "Retenmax" },
};

export const viewport = "width=device-width, initial-scale=1.0";

export default async function Blog() {
    // Fetch dos posts diretamente no componente
    const posts = await client.getAllByType('post', {
        fetchOptions: {
            next: {revalidate: 60},
        }
    });

    return (
        <>
            <Header />
            <main className='mt-28'>
                <h1 className="w-full leading-[50px] px-4 text-6xl lg:text-8xl font-extrabold antialiased text-orange-100 lg:leading-[86px] max-w-7xl mx-auto">
                    Blog
                </h1>
                <div className="bg-[url('/images/hero-bg.webp')] h-lvh">

                <div className="grid md:grid-cols-4 gap-6 pt-16 pb-16   max-w-7xl mx-auto">
                    {posts.map(post => (
                        <Link key={post.id} href={`/blog/${post.uid}`}>
                            <div className="rounded shadow-lg p-4 w-full hover:opacity-70 ">
                                {post.data.slices.map((slice, index) => (
                                    <div key={index}>
                                        {slice.primary?.image?.url && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                style={{ objectFit: "cover", borderRadius: "10px" }}
                                                src={slice.primary.image.url}
                                                alt={slice.primary.image.alt || 'Imagem do post'}
                                                width={500}
                                                height={500}
                                            />
                                        )}
                                        <div className="flex flex-col justify-between min-h-44 bg-black/30 backdrop-blur-md p-5">
                                            <h1 className=" font-bold antialiased text-orange-100 text-xl pb-2">
                                                {slice.primary?.title || 'Título não disponível'}
                                            </h1>
                                            <p className='max-h-24 overflow-hidden'>
                                                {slice.primary?.body || 'Conteúdo não disponível'}
                                            </p>
                                            <div className="flex text-gray-400 text-sm pt-2">
                                                {new Date(post.first_publication_date).getUTCDate()}/
                                                {new Date(post.first_publication_date).getMonth() + 1}/
                                                {new Date(post.first_publication_date).getFullYear()}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Link>
                        
                    ))}
                    </div>
                </div>
            </main>
        </>
    );
}
