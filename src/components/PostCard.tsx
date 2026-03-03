import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/contentful";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-1">
          {post.tags?.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-muted-foreground text-sm">
          {new Date(post.date).toLocaleDateString("en-US", { dateStyle: "long" })}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button variant="link" className="p-0 h-auto" asChild>
          <Link href={`/blog/${post.slug}`}>Read entry →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
