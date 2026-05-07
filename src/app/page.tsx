import Link from "next/link";
import { getBlogPosts } from "@/lib/contentful";
import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/SidneyWackenier",
    label: "GitHub",
    icon: GithubIcon,
    className: "bg-[#24292e] hover:bg-[#1a1e22] text-white",
  },
  {
    href: "https://www.linkedin.com/in/sidney-wackenier",
    label: "LinkedIn",
    icon: LinkedinIcon,
    className: "bg-[#0077B5] hover:bg-[#0069a0] text-white",
  },
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
          Wekelijkse reflecties over wat ik bouwde, brak en leerde tijdens mijn stage.
        </p>
        <Button asChild>
          <Link href="/blog">Lees de blog</Link>
        </Button>
      </section>

      <Separator />

      {/* Recent Posts */}
      <section className="py-12">
        <h2 className="text-2xl font-semibold mb-8">Meest recente blogpost:</h2>
        {recentPosts.length > 0 ? (
          <div className="grid gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground italic">Nog geen posts.</p>
        )}
        <div className="mt-8">
          <Button variant="ghost" asChild>
            <Link href="/blog">Bekijk alle posts →</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Social Links */}
      <section className="py-12 flex gap-3">
        {socialLinks.map(({ href, label, icon: Icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${className}`}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </section>
    </main>
  );
}
