/**
 * Writing lives here as plain data so the site can stay a static export.
 * Every post below is a STAND-IN (title + body written by Claude as a prompt
 * for the kind of essay that would fit). Replace or delete them, and set
 * `standIn: false` on real posts.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string };

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  tags: string[];
  readingMinutes: number;
  standIn: boolean;
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "the-bottleneck-moved",
    title: "The bottleneck moved",
    excerpt: "AI made writing code cheap. Nobody told code review.",
    date: "2026-11-04",
    tags: ["ai", "teams"],
    readingMinutes: 6,
    standIn: true,
    body: [
      { type: "p", text: "For most of my career, the constraint on a software team was how fast people could write code. That constraint is disappearing, and the work hasn't gone away. It moved downstream." },
      { type: "h2", text: "Where it went" },
      { type: "p", text: "Pull requests are bigger and more frequent. Reviewers are the new bottleneck, and the decisions about what to build matter more than ever because building is no longer the expensive part." },
      { type: "quote", text: "When output gets cheap, judgment becomes the scarce resource." },
      { type: "p", text: "This is a stand-in post. Replace it with your real take: what you've seen in RetroFlow data, what teams are doing about it, and what you'd recommend." },
    ],
  },
  {
    slug: "your-agent-is-a-new-hire-every-morning",
    title: "Your AI agent is a new hire every morning",
    excerpt: "Why coding agents keep rediscovering your codebase, and the cheap fix.",
    date: "2026-10-12",
    tags: ["ai", "agents"],
    readingMinutes: 5,
    standIn: true,
    body: [
      { type: "p", text: "Every session, your coding agent shows up with no memory of how your system works, what the conventions are, or which corners are load-bearing. It's an eager new hire with amnesia." },
      { type: "h2", text: "Onboarding docs, but for agents" },
      { type: "p", text: "The fix is the same thing that works for people: write down the architecture, workflows, pitfalls and risk areas once, in a place the agent reads first. That's the idea behind the Agent Context Audit." },
      { type: "p", text: "This is a stand-in post. Swap in real examples from audits you've run." },
    ],
  },
  {
    slug: "software-for-an-audience-of-one",
    title: "Software for an audience of one",
    excerpt: "Ambry started as a gift for my partner. It taught me more about product than anything else I've built.",
    date: "2026-09-02",
    tags: ["side projects", "product"],
    readingMinutes: 4,
    standIn: true,
    body: [
      { type: "p", text: "When you build for exactly one person, you can't hide behind metrics. Either they open it every day or they don't." },
      { type: "p", text: "This is a stand-in post. Tell the real Ambry Journal story: why you built it, what surprised you, and how it grew." },
    ],
  },
  {
    slug: "what-finance-data-taught-me-about-trust",
    title: "What finance data taught me about trust",
    excerpt: "Six years of reconciling ledgers is a surprisingly good education in building systems people rely on.",
    date: "2026-08-10",
    tags: ["data", "career"],
    readingMinutes: 5,
    standIn: true,
    body: [
      { type: "p", text: "In finance, a number that's wrong once is a number nobody trusts again. That lesson shaped how I think about every system I've built since." },
      { type: "p", text: "This is a stand-in post. Fill it in with stories from Nationwide and Bowhead." },
    ],
  },
];

export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string, style: "short" | "long" = "short") {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", style === "short" ? { month: "short", year: "numeric", timeZone: "UTC" } : { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
