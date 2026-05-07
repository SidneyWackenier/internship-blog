import { client } from '@/lib/contentful';
import RichText from '@/components/RichText';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Document } from '@contentful/rich-text-types';

async function getBlogPost(slug: string) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  return response.items[0];
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { title, date, content, tags } = post.fields;

  const coverAsset = post.fields.coverImage as
    | { fields: { file: { url: string; details: { image: { width: number; height: number } } } } }
    | undefined;
  const coverImageUrl = coverAsset?.fields?.file?.url
    ? `https:${coverAsset.fields.file.url}`
    : undefined;

  return (
    <main className="max-w-3xl mx-auto p-8">
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
        <Link href="/blog">← Terug naar alle posts</Link>
      </Button>

      {coverImageUrl && coverAsset && (
        <Image
          src={coverImageUrl}
          alt={title as string}
          width={coverAsset.fields.file.details.image.width}
          height={coverAsset.fields.file.details.image.height}
          className="w-full h-auto max-h-[600px] object-contain rounded-xl mb-8"
          priority
        />
      )}

      <header className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {(tags as string[])?.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-extrabold mb-2">{title as string}</h1>
        <p className="text-muted-foreground">
          {new Date(date as string).toLocaleDateString('nl-NL', { dateStyle: 'long' })}
        </p>
      </header>

      <Separator className="mb-8" />

      <RichText content={content as Document} />
    </main>
  );
}
