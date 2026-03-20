import { client } from '@/lib/contentful';
import RichText from '@/components/RichText';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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

  return (
    <main className="max-w-3xl mx-auto p-8">
      <Button variant="ghost" size="sm" className="mb-6 -ml-2" asChild>
        <Link href="/blog">← Back to all posts</Link>
      </Button>

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
          {new Date(date as string).toLocaleDateString('en-US', { dateStyle: 'long' })}
        </p>
      </header>

      <Separator className="mb-8" />

      <RichText content={content as any} />
    </main>
  );
}
