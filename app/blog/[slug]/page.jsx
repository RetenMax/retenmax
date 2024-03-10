import { getBlogPost } from '@/lib/api'

const createMarkup = (html) => {
    return { __html: html };
};

const BlogPost = async ({ params }) => {

    const post = await getBlogPost(params.slug)

    return (
        <main className="pl-16 pt-32 pb-32">
            <h1 className="w-full h-40 leading-[50px] text-6xl lg:text-8xl font-extrabold antialiased text-orange-100 lg:leading-[86px]">
                {post.titulo}
            </h1>
            <span className="pt-32" dangerouslySetInnerHTML={createMarkup(post.texto)}></span>
        </main>
    )
}

export default BlogPost
