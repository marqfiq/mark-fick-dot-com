import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost, formatDate, sortedPosts } from "@/content/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date, tags: post.tags },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const idx = sortedPosts.findIndex((p) => p.slug === slug);
  const next = sortedPosts[idx + 1] ?? sortedPosts[0];

  return (
    <main className="mx-auto max-w-[720px] px-4 pb-28 pt-32 sm:px-6 md:pt-40">
      <Link href="/writing" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted hover:text-ink">
        <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span> All writing
      </Link>

      <article className="mt-10">
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date, "long")}</time>
            <span>·</span>
            <span>{post.readingMinutes} min read</span>
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-paper-2 px-2 py-0.5">{t}</span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-[clamp(2.3rem,6vw,3.6rem)] font-medium leading-[1.05] tracking-tight text-ink">{post.title}</h1>
          <p className="mt-4 font-display text-xl italic text-ink-2">{post.excerpt}</p>
          {post.standIn && (
            <p className="mt-6 rounded-xl border border-dashed border-rose/60 px-4 py-3 text-sm text-rose">
              Stand-in post written as a placeholder — replace it in <code className="font-mono">src/content/posts.ts</code>.
            </p>
          )}
        </header>

        <div className="prose prose-lg prose-warm max-w-none">
          {post.body.map((b, i) =>
            b.type === "h2" ? <h2 key={i}>{b.text}</h2> : b.type === "quote" ? <blockquote key={i}>{b.text}</blockquote> : <p key={i}>{b.text}</p>
          )}
        </div>
      </article>

      {next && next.slug !== post.slug && (
        <Link href={`/writing/${next.slug}`} className="group mt-20 block rounded-3xl border border-rule bg-card p-8">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Read next</span>
          <span className="mt-2 block font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">{next.title} →</span>
        </Link>
      )}
    </main>
  );
}
