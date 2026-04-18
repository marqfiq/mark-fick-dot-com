export default function Home() {
  return (
    <div className="max-w-[860px] mx-auto px-[44px]">
      <nav className="pt-8 pb-0 flex justify-between items-baseline">
        <span className="text-[13px] font-medium text-text-head tracking-[-0.01em]">
          Mark Fick
        </span>
        <div className="flex gap-7">
          <a
            href="/writing"
            className="text-[12px] text-muted-2 transition-colors duration-150 hover:text-text-head"
          >
            writing
          </a>
          <a
            href="/work"
            className="text-[12px] text-muted-2 transition-colors duration-150 hover:text-text-head"
          >
            work
          </a>
          <a
            href="/lab"
            className="text-[12px] text-muted-2 transition-colors duration-150 hover:text-text-head"
          >
            lab
          </a>
          <a
            href="mailto:mark@markfick.com"
            className="text-[12px] text-accent transition-colors duration-150 hover:text-text-head"
          >
            mark@markfick.com
          </a>
        </div>
      </nav>

      <div className="pt-[72px] pb-[64px] border-b-[0.5px] border-border">
        <div className="font-mono text-[11px] text-muted-2 tracking-[0.04em] mb-[22px]">
          Tyler, TX &mdash; available for select work
        </div>
        <h1 className="font-serif text-[72px] font-normal leading-[0.95] tracking-[-0.04em] text-text-head m-0 mb-[36px]">
          Mark
          <br />
          <em className="italic text-[#888]">Fick</em>
        </h1>
        <p className="text-[16px] text-text-body leading-[1.65] max-w-[460px] font-normal">
          Solo founder. I build products and ship code &mdash;{" "}
          <strong className="text-text-strong font-medium">RetroFlow</strong> for engineering
          teams, <strong className="text-text-strong font-medium">Ambry</strong> for people who
          journal. I write about building companies without a team, distribution, and the gaps
          between product intuition and what users actually want.
        </p>
      </div>

      <div className="py-[48px] border-b-[0.5px] border-border">
        <div className="flex items-baseline gap-4 mb-[36px]">
          <span className="font-mono text-[11px] text-muted-3 tracking-[0.06em] whitespace-nowrap">
            building
          </span>
          <div className="flex-1 h-[0.5px] bg-border"></div>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-start gap-3 py-6 border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0">
          <div>
            <div className="font-mono text-muted-3 text-[11px] mb-[10px]">01</div>
            <div className="text-[18px] font-medium text-text-head tracking-[-0.02em] mb-2">
              RetroFlow
            </div>
            <p className="text-[13px] text-muted-1 leading-[1.6] max-w-[380px]">
              Retrospective tooling for engineering teams. Async-first, built around the feedback
              loops that actually change how teams work.
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono block text-[11px] text-muted-2 mb-[6px]">
              retroflow.io
            </span>
            <span className="font-mono text-[11px] text-muted-3">100+ weekly active users</span>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-start gap-3 py-6 border-b-[0.5px] border-border-2 last:border-b-0 last:pb-0">
          <div>
            <div className="font-mono text-muted-3 text-[11px] mb-[10px]">02</div>
            <div className="text-[18px] font-medium text-text-head tracking-[-0.02em] mb-2">
              Ambry
            </div>
            <p className="text-[13px] text-muted-1 leading-[1.6] max-w-[380px]">
              A journaling app for the things you almost forgot to write down. Calm, private,
              designed to get out of your way.
            </p>
          </div>
          <div className="text-right">
            <span className="font-mono block text-[11px] text-muted-2 mb-[6px]">
              ambryjournal.com
            </span>
            <span className="font-mono text-[11px] text-muted-3">&nbsp;</span>
          </div>
        </div>
      </div>

      <div className="py-[48px] border-b-[0.5px] border-border">
        <div className="flex items-baseline gap-4 mb-[36px]">
          <span className="font-mono text-[11px] text-muted-3 tracking-[0.06em] whitespace-nowrap">
            writing
          </span>
          <div className="flex-1 h-[0.5px] bg-border"></div>
          <a
            href="/writing"
            className="font-mono text-[11px] text-muted-2 whitespace-nowrap transition-colors duration-150 hover:text-text-head"
          >
            all &rarr;
          </a>
        </div>

        <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline py-[18px] border-b-[0.5px] border-border-2 last:border-b-0">
          <span className="font-mono text-[11px] text-muted-3 min-w-[20px]">01</span>
          <a
            href="#"
            className="text-[15px] text-text-mid font-normal leading-[1.4] transition-colors duration-150 hover:text-text-head"
          >
            Why I stopped building features and started counting users
          </a>
          <span className="font-mono text-[11px] text-muted-3 whitespace-nowrap">Apr 2025</span>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline py-[18px] border-b-[0.5px] border-border-2 last:border-b-0">
          <span className="font-mono text-[11px] text-muted-3 min-w-[20px]">02</span>
          <a
            href="#"
            className="text-[15px] text-text-mid font-normal leading-[1.4] transition-colors duration-150 hover:text-text-head"
          >
            What a 37k-impression post taught me about positioning copy
          </a>
          <span className="font-mono text-[11px] text-muted-3 whitespace-nowrap">Mar 2025</span>
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline py-[18px] border-b-[0.5px] border-border-2 last:border-b-0">
          <span className="font-mono text-[11px] text-muted-3 min-w-[20px]">03</span>
          <a
            href="#"
            className="text-[15px] text-text-mid font-normal leading-[1.4] transition-colors duration-150 hover:text-text-head"
          >
            Building a repeatable content system for a one-person company
          </a>
          <span className="font-mono text-[11px] text-muted-3 whitespace-nowrap">Feb 2025</span>
        </div>
      </div>

      <div className="py-[48px] border-b-[0.5px] border-border">
        <div className="flex items-baseline gap-4 mb-[36px]">
          <span className="font-mono text-[11px] text-muted-3 tracking-[0.06em] whitespace-nowrap">
            background
          </span>
          <div className="flex-1 h-[0.5px] bg-border"></div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-[1fr_auto] items-baseline">
            <div>
              <div className="text-[14px] text-text-head font-normal">Senior Software Engineer</div>
              <div className="text-[13px] text-muted-2 mt-[2px]">Acme Corp</div>
            </div>
            <span className="font-mono text-[11px] text-muted-3">2021 &ndash; 2024</span>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-baseline">
            <div>
              <div className="text-[14px] text-text-head font-normal">Full Stack Developer</div>
              <div className="text-[13px] text-muted-2 mt-[2px]">Startup Co.</div>
            </div>
            <span className="font-mono text-[11px] text-muted-3">2019 &ndash; 2021</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-[6px] mt-7">
          <span className="font-mono text-[11px] text-muted-2 border-b-[0.5px] border-muted-3 pb-[1px]">
            TypeScript
          </span>
          <span className="text-[11px] text-border">/</span>
          <span className="font-mono text-[11px] text-muted-2 border-b-[0.5px] border-muted-3 pb-[1px]">
            React
          </span>
          <span className="text-[11px] text-border">/</span>
          <span className="font-mono text-[11px] text-muted-2 border-b-[0.5px] border-muted-3 pb-[1px]">
            Next.js
          </span>
          <span className="text-[11px] text-border">/</span>
          <span className="font-mono text-[11px] text-muted-2 border-b-[0.5px] border-muted-3 pb-[1px]">
            Firebase
          </span>
          <span className="text-[11px] text-border">/</span>
          <span className="font-mono text-[11px] text-muted-2 border-b-[0.5px] border-muted-3 pb-[1px]">
            Node.js
          </span>
          <span className="text-[11px] text-border">/</span>
          <span className="font-mono text-[11px] text-muted-2 border-b-[0.5px] border-muted-3 pb-[1px]">
            Postgres
          </span>
        </div>
      </div>

      <footer className="py-8 flex justify-between items-center">
        <span className="font-mono text-[11px] text-muted-3">markfick.com</span>
        <div className="flex gap-5">
          <a
            href="https://linkedin.com/in/markfick"
            className="font-mono text-[11px] text-muted-2 transition-colors duration-150 hover:text-text-head"
          >
            linkedin
          </a>
          <a
            href="https://github.com/marqfiq"
            className="font-mono text-[11px] text-muted-2 transition-colors duration-150 hover:text-text-head"
          >
            github
          </a>
          <a
            href="mailto:mark@markfick.com"
            className="font-mono text-[11px] text-muted-2 transition-colors duration-150 hover:text-text-head"
          >
            email
          </a>
        </div>
      </footer>
    </div>
  );
}
