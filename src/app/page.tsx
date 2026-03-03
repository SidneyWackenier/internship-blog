import Link from "next/link";
import { getBlogPosts } from "@/lib/contentful";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const techStack = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "Contentful",
];

export default async function Home() {
  const recentPosts = await getBlogPosts(undefined, 1);

  return (
    <main className="max-w-4xl mx-auto px-8 py-16">
      {/* Hero */}
      <section className="py-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Internship Journal
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
          Weekly reflections on what I built, broke, and learned during my
          internship.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/blog">Read the Blog</Link>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/SidneyWackenier/SidneyWackenier"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Recent Posts */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-8">Most recent blog entry:</h2>
        {recentPosts.length > 0 ? (
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic">No posts yet.</p>
        )}
        <div className="mt-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">View all entries →</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Built With */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-4">Built With</h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </main>
  );
}
