import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section id="about" className="w-full bg-bg min-h-[100dvh] flex flex-col">
        <div className="max-w-[860px] w-full mx-auto px-[20px] shrink-0">
          <Navbar />
        </div>
        <ScrollReveal fadeOnly className="flex-1 flex flex-col">
          <div className="max-w-[860px] w-full mx-auto px-[20px] pt-[32px] pb-[72px] flex-1 flex flex-col justify-center items-start">
            <img
              src="/profile.jpg"
              alt="Mark Fick"
              className="w-[124px] h-[124px] md:w-[172px] md:h-[172px] object-cover rounded-[16px] md:rounded-[20px] mb-[32px] border border-border-2 transition-all duration-300"
            />
            {/* Converted header sizing to use dynamic base relative rem scaling */}
            <h1 className="font-serif text-[clamp(1.5rem,14vw,3rem)] whitespace-nowrap font-normal leading-[0.95] tracking-[-0.04em] text-text-head m-0 mb-[36px]">
              Hi, <em className="italic text-accent-rose">I'm Mark</em>
            </h1>
            <div className="flex flex-col gap-5 text-base text-text-body leading-[1.65] font-normal">
              <p>
                I'm a technical founder and builder based in Seattle.
              </p>
              <p>
                I'm currently building <strong className="text-text-strong font-medium">RetroFlow</strong>, a platform designed to help teams surface and resolve friction in their development process - especially as AI increases the volume and speed of output. I focus on turning real workflow problems into products and systems that teams can actually use.
              </p>
              <p>
                Outside of that, I spend my time tinkering with side projects, traveling, or enjoying a good cup of coffee.
              </p>
            </div>

            <a
              href="https://linkedin.com/in/mark-fick"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm text-text-mid font-medium hover:text-text-head transition-colors group"
            >
              linkedin
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* What I'm up to Section - Alternating Color */}
      {/* <ScrollReveal>
        <section className="w-full bg-bg-alt">
          <div className="max-w-[860px] mx-auto px-[20px] py-[72px]">
            <div className="flex items-center gap-4 mb-[48px]">
              <h2 className="font-serif text-2xl font-bold text-text-head tracking-[0.01em] whitespace-nowrap">
                What I'm up to
              </h2>
              <div className="flex-1 h-[0.5px] bg-border"></div>
            </div>

            <div className="flex flex-col gap-5 text-base text-text-body leading-[1.65] max-w-[620px] font-normal">
              <p>
                I'm building <strong className="text-text-strong font-medium">RetroFlow</strong> — a platform that helps engineering teams surface and fix the friction in how they actually work.
              </p>
              <p>
                Most of my thinking right now is about what AI is doing to software development. Increased output is shifting the bottleneck away from writing code and toward review, coordination, and decision-making. RetroFlow is how I'm exploring and solving that in practice.
              </p>
              <p>
                Beyond that, I'm experimenting at the intersection of AI and engineering systems — how tools become more autonomous, how development processes evolve, and what infrastructure teams actually need as they scale.
              </p>
              <p>
                <strong className="text-text-strong font-medium">What I'm good at:</strong> I pick up quickly on how systems behave - especially where they break under pressure. Give me a short amount of time with a team or workflow and I'll have a working model of where the friction is coming from and what's worth fixing. I love building simple, practical solutions that fit into how teams already work rather than layering new process on top.
              </p>
            </div>

            <a
              href="https://retroflow.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm text-text-mid font-medium hover:text-text-head transition-colors group"
            >
              Find out more at retroflow.io
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>
      </ScrollReveal> */}

      {/* Building Section - Alternating Color */}
      <ScrollReveal>
        <section className="w-full bg-bg-alt">
          <div className="max-w-[860px] mx-auto px-[20px] py-[72px]">
            <div className="flex items-center gap-4 mb-[48px]">
              <h2 className="font-serif text-2xl font-bold text-text-head tracking-[0.01em] whitespace-nowrap">
                Past Projects
              </h2>
              <div className="flex-1 h-[0.5px] bg-border"></div>
            </div>

            <div className="flex flex-col pb-8 mb-8 border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0 last:mb-0">
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-mono text-muted-3 text-xs">01</div>
                <a href="https://retroflow.io" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                  retroflow.io
                </a>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <div className="text-xl font-medium text-text-head tracking-[-0.02em]">
                  RetroFlow
                </div>
                <span className="font-mono text-xs text-muted-3">
                  &nbsp;
                </span>
              </div>
              <p className="text-sm text-muted-1 leading-[1.6] w-full max-w-none">
                Retrospective tooling for engineering teams. Async-first, built around the feedback
                loops that actually change how teams work.
              </p>
            </div>

            <div className="flex flex-col pb-8 mb-8 border-b-[0.5px] border-border-2">
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-mono text-muted-3 text-xs">02</div>
                <a href="https://ambryjournal.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                  ambryjournal.com
                </a>
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <div className="text-xl font-medium text-text-head tracking-[-0.02em]">
                  Ambry Journal
                </div>
                <span className="font-mono text-xs text-muted-3">
                  &nbsp;
                </span>
              </div>
              <p className="text-sm text-muted-1 leading-[1.6] w-full max-w-none">
                A simple journaling app I built for my partner. It started as a personal project and became a product I'm proud of.
              </p>
            </div>

            <div className="flex flex-col pb-8 mb-8 border-b-[0.5px] border-border-2">
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-mono text-muted-3 text-xs">03</div>
                <a href="https://retroflow.io/ai-context-audit" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                  retroflow.io/ai-context-audit
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.12fr] gap-6 items-start mt-1">
                <div className="flex flex-col">
                  <h3 className="text-xl font-medium text-text-head tracking-[-0.02em] mb-3">
                    Agent Context Audit
                  </h3>
                  <p className="text-sm text-muted-1 leading-[1.6] w-full max-w-none">
                    A focused audit that turns scattered repo knowledge into reusable context for AI coding agents: architecture, workflows, conventions, known pitfalls, and risk areas, so agents start with the context they need instead of rediscovering the codebase from scratch.
                  </p>
                </div>
                <a
                  href="https://retroflow.io/ai-context-audit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-[12px] border border-border-2 aspect-[16/9] w-full bg-surface shadow-md block"
                >
                  <img
                    src="/agent-context-audit.png"
                    alt="Agent Context Audit"
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              </div>
            </div>

            <div className="flex flex-col pb-8 mb-8 border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0 last:mb-0">
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-mono text-muted-3 text-xs">04</div>
                <a href="https://retroflow.io/ai-project-roi" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-muted-2 transition-colors duration-150 hover:text-text-head">
                  retroflow.io/ai-project-roi
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.12fr] gap-6 items-start mt-1">
                <div className="flex flex-col">
                  <h3 className="text-xl font-medium text-text-head tracking-[-0.02em] mb-3">
                    AI Project ROI
                  </h3>
                  <p className="text-sm text-muted-1 leading-[1.6] w-full max-w-none">
                    A feasibility and ROI calculator designed to help teams analyze whether an AI project is actually worth building. It scores readiness across data quality, stakeholders, and complexity, outlining clear implementation paths with estimated hours and value saved.
                  </p>
                </div>
                <a
                  href="https://retroflow.io/ai-project-roi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden rounded-[12px] border border-border-2 aspect-[16/9] w-full bg-surface shadow-md block"
                >
                  <img
                    src="/ai-project-roi.png"
                    alt="AI Project ROI"
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Background Section - Standard Color */}
      <ScrollReveal>
        <section id="work" className="w-full bg-bg">
          <div className="max-w-[860px] mx-auto px-[20px] py-[72px]">
            <div className="flex items-center gap-4 mb-[48px]">
              <h2 className="font-serif text-2xl font-bold text-text-head tracking-[0.01em] whitespace-nowrap">
                Experience
              </h2>
              <div className="flex-1 h-[0.5px] bg-border"></div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <div className="text-base text-text-head font-normal">Founding Engineer, Full Stack &ndash; Retroflow</div>
                  <span className="font-mono text-xs text-muted-3 shrink-0">2025 &ndash; Present</span>
                </div>
                <div className="text-sm text-muted-2 leading-[1.6] w-full">Built and shipped a production SaaS platform end-to-end using React, Firebase, Stripe, and LLM APIs, growing organically to 1,600 monthly active users; owned data modeling, authentication, subscription billing, and real-time collaboration.</div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <div className="text-base text-text-head font-normal">Senior Software Engineer, Data Platforms &ndash; Bowhead</div>
                  <span className="font-mono text-xs text-muted-3 shrink-0">2022 &ndash; 2025</span>
                </div>
                <div className="text-sm text-muted-2 leading-[1.6] w-full">Owned data integrity across major system migrations, built automated ingestion pipelines and reconciliation reporting, and shipped internal operations tools as the company scaled toward IPO.</div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <div className="text-base text-text-head font-normal">Software Engineering Consultant &ndash; Lettuce Innovate</div>
                  <span className="font-mono text-xs text-muted-3 shrink-0">2020 &ndash; 2022</span>
                </div>
                <div className="text-sm text-muted-2 leading-[1.6] w-full">Led technical engagements from discovery to handoff, building custom data and software solutions and automating manual financial and reporting processes.</div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <div className="text-base text-text-head font-normal">Software Engineer, Analytics &ndash; Nationwide</div>
                  <span className="font-mono text-xs text-muted-3 shrink-0">2018 &ndash; 2020</span>
                </div>
                <div className="text-sm text-muted-2 leading-[1.6] w-full">Automated finance business processes using data engineering and BI, developing validation algorithms for general ledger entries to catch risks and anomalies.</div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <div className="text-base text-text-head font-normal">Software Engineer, Finance Data Governance &ndash; Nationwide</div>
                  <span className="font-mono text-xs text-muted-3 shrink-0">2016 &ndash; 2018</span>
                </div>
                <div className="text-sm text-muted-2 leading-[1.6] w-full">Conducted risk and control analysis on financial data streams, built forecasting models for revenue and expenses, and standardized financial data pipelines.</div>
              </div>
            </div>

            <div className="text-sm text-muted-2 mt-10 mb-3">Technologies I've worked with</div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-muted-3 w-[70px] shrink-0">Stack</span>
                <span className="font-mono text-xs text-muted-2">TypeScript, Python, React, Node.js</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-muted-3 w-[70px] shrink-0">Data</span>
                <span className="font-mono text-xs text-muted-2">SQL, ETL/ELT, data modeling, analytics pipelines</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-muted-3 w-[70px] shrink-0">Infra</span>
                <span className="font-mono text-xs text-muted-2">Firebase, Postgres, AWS, Azure</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-muted-3 w-[70px] shrink-0">Systems</span>
                <span className="font-mono text-xs text-muted-2">real-time apps, event-driven architecture</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-muted-3 w-[70px] shrink-0">Product</span>
                <span className="font-mono text-xs text-muted-2">analytics instrumentation, funnel design, experimentation</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-muted-3 w-[70px] shrink-0">AI</span>
                <span className="font-mono text-xs text-muted-2">LLM APIs, agent workflows</span>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Writing Section - Alternating Color */}
      {/* <section id="writing" className="w-full bg-bg">
        <div className="max-w-[860px] mx-auto px-[20px] py-[72px]">
          <div className="flex items-center gap-4 mb-[48px]">
            <h2 className="font-serif text-2xl font-bold text-text-head tracking-[0.01em] whitespace-nowrap">
              Thinking & Writing
            </h2>
            <div className="flex-1 h-[0.5px] bg-border"></div>
            <a
              href="/writing"
              className="font-mono text-xs text-muted-2 whitespace-nowrap transition-colors duration-150 hover:text-text-head hidden md:block"
            >
              see all &rarr;
            </a>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-6 items-baseline pb-[24px] mb-[24px] border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0 last:mb-0">
            <a
              href="#"
              className="text-lg text-text-mid font-normal leading-[1.4] transition-colors duration-150 hover:text-text-head"
            >
              Why I stopped building features and started counting users
            </a>
            <span className="font-mono text-xs text-muted-3 whitespace-nowrap">Apr 2025</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-6 items-baseline pb-[24px] mb-[24px] border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0 last:mb-0">
            <a
              href="#"
              className="text-lg text-text-mid font-normal leading-[1.4] transition-colors duration-150 hover:text-text-head"
            >
              What a 37k-impression post taught me about positioning copy
            </a>
            <span className="font-mono text-xs text-muted-3 whitespace-nowrap">Mar 2025</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] gap-6 items-baseline pb-[24px] border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0">
            <a
              href="#"
              className="text-lg text-text-mid font-normal leading-[1.4] transition-colors duration-150 hover:text-text-head"
            >
              Building a repeatable content system for a one-person company
            </a>
            <span className="font-mono text-xs text-muted-3 whitespace-nowrap">Feb 2025</span>
          </div>

          <div className="mt-8 text-right md:hidden">
            <a
              href="/writing"
              className="font-mono text-xs text-muted-2 whitespace-nowrap transition-colors duration-150 hover:text-text-head"
            >
              see all &rarr;
            </a>
          </div>
        </div>
      </section> */}

      {/* Get in Touch Section - Alternating Color */}
      <ScrollReveal>
        <section id="contact" className="w-full bg-bg-alt">
          <div className="max-w-[860px] mx-auto px-[20px] py-[72px]">
            <div className="flex items-center gap-4 mb-[48px]">
              <h2 className="font-serif text-2xl font-bold text-text-head tracking-[0.01em] whitespace-nowrap">
                Get in Touch
              </h2>
              <div className="flex-1 h-[0.5px] bg-border"></div>
            </div>

            <div className="flex flex-col gap-8 max-w-[540px]">
              <p className="text-base text-text-body leading-[1.65] font-normal">
                Whether you'd like to work with me or find out more about what I'm working on, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <a
                  href="mailto:markfick31415@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-text-mid font-medium hover:text-text-head transition-colors group"
                >
                  Email
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/mark-fick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-mid font-medium hover:text-text-head transition-colors group"
                >
                  LinkedIn
                  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer - Standard Color */}
      <footer className="w-full bg-bg-dark border-t border-border-2">
        <div className="max-w-[860px] mx-auto px-[20px] py-12 flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://linkedin.com/in/mark-fick"
              className="font-mono text-sm text-muted-2 transition-colors duration-150 hover:text-text-head"
            >
              linkedin
            </a>
            <span className="font-mono text-sm text-muted-3">|</span>
            <a
              href="https://github.com/marqfiq"
              className="font-mono text-sm text-muted-2 transition-colors duration-150 hover:text-text-head"
            >
              github
            </a>
            <span className="font-mono text-sm text-muted-3">|</span>
            <a
              href="mailto:markfick31415@gmail.com"
              className="font-mono text-sm text-muted-2 transition-colors duration-150 hover:text-text-head"
            >
              email
            </a>
          </div>
          <span className="font-mono text-sm text-text-body font-medium tracking-[0.02em]">Mark Fick</span>
        </div>
      </footer>
    </main>
  );
}
