import { getBlogPosts } from '@/lib/contentful';
import { PostCard } from '@/components/PostCard';
import { TagFilter } from '@/components/TagFilter';
import { Card, CardContent } from '@/components/ui/card';

const categories = ['code', 'reflectie', 'setback', 'teambuilding'];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;
  const posts = await getBlogPosts(tag);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Internship Journey</h1>

      <div className="mb-12">
        <TagFilter categories={categories} activeTag={tag} />
      </div>

      <div className="grid gap-6">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        ) : (
          <Card className="border-dashed">
            <CardContent className="py-20 text-center">
              <p className="text-muted-foreground italic">
                No posts found with the tag &ldquo;{tag}&rdquo;.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
