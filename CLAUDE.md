# CLAUDE.md — Internship Portfolio

This is Sidney Wackenier's internship portfolio: a Next.js blog and personal page documenting a developer internship at Jstack (Kontich, Belgium). The site is content-driven via Contentful and has no backend, database, or authentication.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, server components by default) |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 + `@tailwindcss/typography` |
| Components | shadcn/ui (New York style) + Lucide React icons |
| CMS | Contentful (headless, read-only via SDK) |
| Fonts | Geist Sans + Geist Mono via `next/font/google` |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           Root layout — imports Header, sets metadata + fonts
│   ├── page.tsx             Home — hero, most recent blog post, tech stack badges
│   ├── blog/
│   │   ├── page.tsx         Blog listing — tag filter + PostCard grid
│   │   └── [slug]/page.tsx  Individual post — rich text content, tags, date
│   └── over/
│       └── page.tsx         About Me — bio, skills, internship details
├── components/
│   ├── Header.tsx           Sticky nav bar (Home / About Me / Blog)
│   ├── PostCard.tsx         Blog post preview card
│   ├── RichText.tsx         Contentful rich text renderer with Tailwind styling
│   ├── TagFilter.tsx        Tag button group for filtering blog posts
│   └── ui/                  shadcn/ui primitives (badge, button, card, etc.)
└── lib/
    ├── contentful.ts        Contentful client + getBlogPosts() + BlogPost type
    └── utils.ts             cn() utility (clsx + tailwind-merge)
```

This is a **single app** — there is no monorepo, no `apps/` directory, no `packages/` directory, and no separate API server.

---

## Routing

| Route | Page |
|---|---|
| `/` | Home |
| `/over` | About Me |
| `/blog` | Blog listing (accepts `?tag=` query param) |
| `/blog/[slug]` | Individual blog post |

---

## Contentful Integration

Environment variables (stored in `.env.local`, never commit):
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN` (read-only delivery API token)

The Contentful content type is `blogPost` with these fields:
- `title` — string
- `slug` — string (used as URL path)
- `date` — ISO date string
- `excerpt` — short string for previews
- `tags` — array of strings: `code`, `reflectie`, `setback`, `teambuilding`
- `content` — Contentful rich text document (rendered via `RichText` component)

All Contentful fetching is **server-side only** — in async Server Components. Never fetch Contentful data from client components.

---

## Conventions

### Components
- Named exports for shared components (`export function Header()`)
- Default exports for page components (`export default function BlogPage()`)
- Props typed inline with TypeScript interfaces
- Use `@/` path alias for all imports (never relative `../../`)

### Styling
- Use Tailwind utilities only — no inline styles, no CSS modules
- Use semantic color tokens (`text-muted-foreground`, `bg-primary`, `bg-muted`) — never hardcode hex colors
- Max content width is `max-w-4xl mx-auto` (use `max-w-3xl` for reading-focused pages like blog posts)
- All pages use `px-8 py-16` outer padding

### shadcn/ui
- Prefer existing shadcn/ui primitives (`Button`, `Badge`, `Card`, `Separator`) over building new ones
- Check `src/components/ui/` before adding a new shadcn component
- Install new components with: `npx shadcn@latest add <component>`

### TypeScript
- Strict mode is on — no `any` unless absolutely necessary and commented
- Prefer `interface` over `type` for object shapes

---

## Available Custom Commands

| Command | Purpose |
|---|---|
| `/cleanup` | Fix lint, remove console.logs, find unused code |
| `/feature <description>` | Plan + implement a new feature |
| `/review` | Pre-commit code review (TypeScript, ESLint, conventions) |
| `/verify` | Generate a manual QA checklist for a feature |

---

## What NOT to Do

- Do not create an `apps/`, `packages/`, or `prisma/` directory — this is not a monorepo and has no database
- Do not add client-side data fetching for Contentful — keep it server-side
- Do not use `useEffect` for data that can be fetched in a Server Component
- Do not hardcode hex colors — use Tailwind semantic tokens
- Do not commit `.env.local` or any file containing API keys
- Do not add new dependencies without checking if shadcn/ui or an existing library already covers the need
