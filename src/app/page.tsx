import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Text from "@/components/StandIn";
import CopyEmail from "@/components/CopyEmail";
import { site } from "@/content/site";
import { sortedPosts, formatDate } from "@/content/posts";

function SectionHead({ num, title, aside }: { num: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-rule pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-accent">{num}</span>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      </div>
      {aside}
    </div>
  );
}

const Arrow = () => (
  <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-1">
    →
  </span>
);

export default function Home() {
  const { hero, now, principles, experience, offTheClock, contact, features } = site;

  // Number only the sections that are switched on, so hidden ones leave no gaps.
  const sectionOrder = ["work", "principles", features.writing && "writing", "experience", features.offTheClock && "offTheClock"].filter(Boolean);
  const num = (id: string) => String(sectionOrder.indexOf(id) + 1).padStart(2, "0");

  return (
    <main className="mx-auto max-w-[1080px] px-4 sm:px-6">
      {/* ---------------- Hero ---------------- */}
      <section id="about" className="grid items-center gap-12 pb-20 pt-32 md:grid-cols-[1.45fr_1fr] md:pb-28 md:pt-40">
        <ScrollReveal>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">{hero.kicker}</p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,4.9rem)] font-medium leading-[0.98] tracking-[-0.025em] text-ink">
            {hero.headline.before}
            <em className="font-normal italic text-accent">{hero.headline.emphasis}</em>
            {hero.headline.after}
          </h1>
          <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-ink-2">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper">
              Get in touch <Arrow />
            </a>
            {features.writing ? (
              <Link href="/writing" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
                <span className="link-underline">Read my writing</span> <Arrow />
              </Link>
            ) : (
              <a href="#work" className="group inline-flex items-center gap-2 text-sm font-medium text-ink">
                <span className="link-underline">See what I&apos;ve built</span> <Arrow />
              </a>
            )}
          </div>
          <p className="mt-8 inline-flex items-center gap-2.5 text-sm text-ink-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Text value={hero.availability} />
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="justify-self-center md:justify-self-end">
          <figure className="relative w-[250px] rotate-[2.5deg] bg-card p-3 pb-4 shadow-[0_18px_40px_-18px_rgba(60,35,20,0.45)] transition-transform duration-500 hover:rotate-0 sm:w-[290px]">
            <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 bg-highlight/80" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/profile.jpg" alt="Mark Fick" className="aspect-[4/5] w-full object-cover" />
            <figcaption className="mt-3 text-center font-display text-base italic text-ink-2">{hero.photoCaption}</figcaption>
          </figure>
        </ScrollReveal>
      </section>

      {/* ---------------- Now ---------------- */}
      <section id="now" className="pb-24">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl border border-rule bg-card px-6 py-10 sm:px-10">
            {/* coffee ring */}
            <svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute -right-10 -top-12 h-56 w-56 text-accent opacity-[0.12]">
              <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="7" strokeDasharray="300 18 90 12" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
                Now<span className="text-accent">.</span>
              </h2>
              <span className="font-mono text-xs text-muted">updated {now.updated}</span>
            </div>
            <dl className="grid gap-x-12 gap-y-6 md:grid-cols-2">
              {now.items.map((item) => (
                <div key={item.label} className="grid grid-cols-[110px_1fr] gap-4 border-t border-rule pt-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted">{item.label}</dt>
                  <dd className="text-ink-2">
                    <Text value={item.text} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </section>

      {/* ---------------- Work ---------------- */}
      <section id="work" className="pb-24">
        <ScrollReveal>
          <SectionHead num={num("work")} title="Things I've built" />
        </ScrollReveal>

        {/* Featured: RetroFlow */}
        <ScrollReveal>
          <a
            href="https://retroflow.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid overflow-hidden rounded-3xl border border-rule bg-card transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(60,35,20,0.5)] md:grid-cols-[1fr_1.1fr]"
          >
            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
              <div>
                <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
                  <span className="rounded-full bg-accent px-2.5 py-1 text-paper">Building now</span>
                  <span className="text-muted">retroflow.io</span>
                </div>
                <h3 className="font-display text-4xl font-semibold tracking-tight text-ink">RetroFlow</h3>
                <p className="mt-4 max-w-[440px] leading-relaxed text-ink-2">
                  Async-first retrospectives and workflow insight for engineering teams — built around the feedback loops that
                  actually change how teams work. I built it end-to-end: product, data model, billing, real-time collaboration.
                </p>
              </div>
              <div className="flex items-end gap-8">
                <div>
                  <div className="font-display text-4xl font-medium text-ink">1,600</div>
                  <div className="font-mono text-xs text-muted">monthly active users</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-medium text-ink">0 → 1</div>
                  <div className="font-mono text-xs text-muted">solo-built, organic growth</div>
                </div>
              </div>
            </div>
            {/* Illustrated board (CSS stand-in for a product screenshot) */}
            <div className="relative min-h-[260px] bg-paper-2 p-6 sm:p-8" aria-hidden>
              <div className="grid h-full grid-cols-3 gap-3 transition-transform duration-500 group-hover:scale-[1.02]">
                {[
                  { h: "Went well", c: "bg-[#d9e4c8]", n: [70, 45, 60] },
                  { h: "Friction", c: "bg-[#f2c9b3]", n: [55, 80, 40, 50] },
                  { h: "Try next", c: "bg-[#f3e1a6]", n: [65, 50] },
                ].map((col, i) => (
                  <div key={col.h} className="flex flex-col gap-2.5">
                    <div className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-muted">{col.h}</div>
                    {col.n.map((w, j) => (
                      <div
                        key={j}
                        className={`${col.c} rounded-md p-2.5 shadow-sm`}
                        style={{ transform: `rotate(${((i + j) % 3) - 1}deg)` }}
                      >
                        <div className="h-1.5 rounded bg-black/20" style={{ width: `${w}%` }} />
                        <div className="mt-1.5 h-1.5 w-[85%] rounded bg-black/10" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </a>
        </ScrollReveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* Ambry */}
          <ScrollReveal>
            <a href="https://ambryjournal.com" target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-3xl border border-rule bg-card">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#efe3cf] p-6 dark:bg-[#2c241d]" aria-hidden>
                <div className="h-full rotate-[-2deg] rounded-sm bg-[#fffaf0] p-4 shadow-md transition-transform duration-500 group-hover:rotate-0 dark:bg-[#3a3028]">
                  <div className="font-display text-sm italic text-[#94586f]">Tuesday, a good one</div>
                  {[90, 75, 82, 60].map((w, i) => (
                    <div key={i} className="mt-3 border-b border-[#e3d6c2] pb-0.5 dark:border-[#51463c]">
                      <div className="h-1.5 rounded bg-[#cbb9a2]/70" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs text-muted">ambryjournal.com</span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-ink">Ambry Journal</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  A journaling app I built as a gift for my partner. It started as software for an audience of one and grew into a
                  product I&apos;m proud of.
                </p>
              </div>
            </a>
          </ScrollReveal>

          {[
            {
              href: "https://retroflow.io/ai-context-audit",
              url: "retroflow.io/ai-context-audit",
              img: "/agent-context-audit.png",
              title: "Agent Context Audit",
              body: "Turns scattered repo knowledge into reusable context for AI coding agents, so they stop rediscovering your codebase every session.",
            },
            {
              href: "https://retroflow.io/ai-project-roi",
              url: "retroflow.io/ai-project-roi",
              img: "/ai-project-roi.png",
              title: "AI Project ROI",
              body: "A feasibility and ROI calculator that scores whether an AI project is actually worth building — with hours and value saved.",
            },
          ].map((p, i) => (
            <ScrollReveal key={p.title} delay={(i + 1) * 100}>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col overflow-hidden rounded-3xl border border-rule bg-card">
                <div className="aspect-[16/10] overflow-hidden bg-paper-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs text-muted">{p.url}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.body}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section className="pb-24">
        <ScrollReveal>
          <SectionHead num={num("principles")} title="How I think about building" />
        </ScrollReveal>
        <div className="grid gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div className="font-display text-6xl font-light italic leading-none text-accent/70">{i + 1}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-ink">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-2">{p.body}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ---------------- Writing (toggle: site.features.writing) ---------------- */}
      {features.writing && (
      <section id="writing" className="pb-24">
        <ScrollReveal>
          <SectionHead
            num={num("writing")}
            title="Writing"
            aside={
              <Link href="/writing" className="group hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-2 sm:inline-flex">
                <span className="link-underline">All posts</span> <Arrow />
              </Link>
            }
          />
        </ScrollReveal>
        <ul>
          {sortedPosts.slice(0, 3).map((post) => (
            <ScrollReveal key={post.slug}>
              <li className="border-b border-rule">
                <Link href={`/writing/${post.slug}`} className="group grid gap-2 py-6 sm:grid-cols-[110px_1fr_auto] sm:items-baseline sm:gap-8">
                  <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
                  <span>
                    <span className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-accent">
                      <span className={post.standIn ? "stand-in" : ""}>{post.title}</span>
                    </span>
                    <span className="mt-1 block text-ink-2">{post.excerpt}</span>
                  </span>
                  <span className="hidden font-mono text-xs text-muted sm:block">{post.readingMinutes} min</span>
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
        <Link href="/writing" className="group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-2 sm:hidden">
          All posts <Arrow />
        </Link>
      </section>
      )}

      {/* ---------------- Experience ---------------- */}
      <section id="experience" className="pb-24">
        <ScrollReveal>
          <SectionHead
            num={num("experience")}
            title="Where I've been"
            aside={
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-2 sm:inline-flex">
                <span className="link-underline">Full history on LinkedIn</span> <Arrow />
              </a>
            }
          />
        </ScrollReveal>
        <ScrollReveal>
          <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-ink-2">
            Ten years from finance data governance to founding engineer. The common thread:{" "}
            <span className="marker text-ink">making systems that people can actually trust</span>, then making them faster.
          </p>
          <ol>
            {experience.map((job) => (
              <li key={job.role + job.years} className="grid gap-1 border-t border-rule py-5 sm:grid-cols-[110px_1fr_1.3fr] sm:gap-8">
                <span className="font-mono text-xs text-muted sm:pt-1">{job.years}</span>
                <div>
                  <div className="font-medium text-ink">{job.org}</div>
                  <div className="text-sm text-ink-2">{job.role}</div>
                </div>
                <p className="text-sm leading-relaxed text-muted">{job.note}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-mono text-xs leading-relaxed text-muted">
            Usual tools: TypeScript · Python · React · Node · SQL · Firebase · Postgres · AWS · LLM APIs & agent workflows
          </p>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-2 sm:hidden">
            Full history on LinkedIn <Arrow />
          </a>
        </ScrollReveal>
      </section>

      {/* ---------------- Off the clock (toggle: site.features.offTheClock) ---------------- */}
      {features.offTheClock && (
      <section className="pb-24">
        <ScrollReveal>
          <SectionHead num={num("offTheClock")} title="Off the clock" />
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {offTheClock.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 100}>
              <div className="h-full rounded-2xl bg-paper-2 p-6">
                <div className="font-display text-xl italic text-rose">{item.label}</div>
                <p className="mt-2 text-ink-2">
                  <Text value={item.text} />
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      )}

      {/* ---------------- Contact ---------------- */}
      <section id="contact" className="pb-28">
        <ScrollReveal>
          <div className="rounded-3xl bg-ink px-6 py-14 text-paper sm:px-12 sm:py-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/60">Get in touch</p>
            <h2 className="mt-4 max-w-[700px] font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-medium leading-[1.02] tracking-tight">
              Let&apos;s talk about the <em className="italic text-highlight">slow parts</em> of your team.
            </h2>
            <p className="mt-6 max-w-[560px] leading-relaxed text-paper/75">{contact.pitch}</p>
            <div className="mt-8 [&_a]:bg-paper [&_a]:text-ink [&_button]:border-paper/25 [&_button]:text-paper/80">
              <CopyEmail email={site.email} />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
