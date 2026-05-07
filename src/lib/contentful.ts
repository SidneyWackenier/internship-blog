import { createClient } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: Document;
  coverImage?: string;
}

export async function getBlogPosts(selectedTag?: string, limit?: number): Promise<BlogPost[]> {
  const query: Record<string, unknown> = {
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
  };

  if (selectedTag && selectedTag !== 'all') {
    query['fields.tags[in]'] = selectedTag;
  }

  if (limit) {
    query.limit = limit;
  }

  const response = await client.getEntries(query);

  return response.items.map((item) => {
    const img = item.fields.coverImage as
      | { fields: { file: { url: string } } }
      | undefined;
    return {
      title: item.fields.title,
      slug: item.fields.slug,
      date: item.fields.date,
      excerpt: item.fields.excerpt,
      tags: item.fields.tags,
      coverImage: img?.fields?.file?.url ? `https:${img.fields.file.url}` : undefined,
    };
  }) as BlogPost[];
}