import Link from "next/link";
import { Button } from "@/components/ui/button";

type TagFilterProps = {
  categories: string[];
  activeTag?: string;
};

export function TagFilter({ categories, activeTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 pb-6 border-b border-border">
      <Button variant={!activeTag ? "default" : "ghost"} size="sm" asChild>
        <Link href="/blog">All</Link>
      </Button>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={activeTag === cat ? "default" : "ghost"}
          size="sm"
          asChild
        >
          <Link href={`/blog?tag=${cat}`}>{cat}</Link>
        </Button>
      ))}
    </div>
  );
}
