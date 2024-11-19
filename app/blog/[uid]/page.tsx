import client from '@/app/prismicio';
import { PrismicDocument, SliceZone, Slice } from '@prismicio/types';
import { ImageField } from '@prismicio/client';
import Header from '@/components/Header';
import Link from 'next/link';

interface PostProps {
  params: { uid: string };
}

type PostSlice = Slice<
  string,
  {
    title?: string; 
    image?: ImageField;
    body?: string; 
  }
> & {
  slice_label: string | null;
};

type PostData = {
  slices: SliceZone<PostSlice>;
};

type PostDocument = PrismicDocument<PostData>;

export async function generateStaticParams() {
  const posts = await client.getAllByType('post');
  return posts.map((post) => ({
    uid: post.uid,
  }));
}

export default async function BlogPost({ params }: PostProps) {
  const post = (await client.getByUID('post', params.uid)) as PostDocument | null;

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  console.log("Estrutura de slices do post:", post.data.slices);

  return (
    <article className="rounded shadow-lg w-full  mx-auto bg-[url('/images/hero-bg.webp')]  ">
      <Header/>

      <div className='  pt-28 relative max-w-7xl mx-auto '>

        <Link href={'../blog'} className='  p-4 rounded-full bg-black/50 absolute hover:bg-orange-600 '> voltar </Link>

        
      {post.data.slices.map((slice, index) => (
        <div key={index} className=''>
          

          {slice.primary?.image?.url && (
            <img
              style={{ objectFit: "cover",  }}
              src={slice.primary.image.url}
              alt={slice.primary.image.alt || 'Imagem do post'}
              width={400}
              height={400}
              className='block mx-auto'
            />
          )}
          <div className="flex flex-col justify-between  backdrop-blur-md p-5 w-full  h-auto">
            
          <div className=' mx-auto  max-w-7xl'>
            {/* Renderização do título e do conteúdo diretamente como texto */}
            <h1 className="text-xl md:text-4xl max-w-[30ch] mx-auto text-center font-bold antialiased text-orange-100 pb-10">
              {slice.primary?.title || 'Título não disponível'}
            </h1>
            <p className='max-w-[150ch] mx-auto  text-left md:text-justify text-base'>
              {slice.primary?.body || 'Conteúdo não disponível'}
            </p>

            <div className="flex text-center  text-gray-400 text-sm py-2">
              {new Date(post.first_publication_date).getUTCDate()}/
              {new Date(post.first_publication_date).getMonth() + 1}/
              {new Date(post.first_publication_date).getFullYear()}
            </div>
          </div>
        </div>
        
        </div>
      ))}
      
      </div>
    </article>
  );
}
