import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import client from '@/app/prismicio';
export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('📝 Dados do Webhook:', body);

    revalidatePath('/blog');

    if (body.documents && body.documents.length > 0) {
      const documentId = body.documents[0];

      const post = await client.getByID(documentId);
      
      if (post && post.uid) {
        console.log(`🔄 Revalidando post específico: /blog/${post.uid}`);
        revalidatePath(`/blog/${post.uid}`);
      }
    }

    return NextResponse.json({ message: 'Revalidated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
