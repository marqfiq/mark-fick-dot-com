import type { Metadata } from "next";
import Link from "next/link";
import { sortedPosts, formatDate } from "@/content/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building software, AI and engineering teams, and side projects.",
};

export default function WritingIndex() {
  return (
    <main className="mx-auto max-w-[820px] px-4 pb-28 pt-32 sm:px-6 md:pt-40">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Writing</p>
      <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4rem)] font-medium leading-[1.02] tracking-tight text-ink">
        Notes from the <em className="italic text-accent">messy middle</em> of building software.
      </h1>
      <p className="mt-6 max-w-[560px] text-lg leading-relaxed text-ink-2">
        On AI and engineering teams, building products alone, and the occasional side quest.
      </p>

      <ul className="mt-14">
        {sortedPosts.map((post) => (
          <li key={post.slug} className="border-t border-rule">
            <Link href={`/writing/${post.slug}`} className="group block py-7">
              <div className="flex items-center gap-3 font-mono text-xs text-muted">
                <span>{formatDate(post.date, "long")}</span>
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
                {post.standIn && <span className="rounded-full border border-rose/50 px-2 py-0.5 text-rose">stand-in</span>}
              </div>
              <h2 className="mt-2 font-display text-3xl font-medium text-ink transition-colors group-hover:text-accent">{post.title}</h2>
              <p className="mt-2 text-ink-2">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
