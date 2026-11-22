import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-6 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div>
          <div className="font-display text-2xl font-semibold text-ink">Mark Fick</div>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} · {site.location}
          </p>
        </div>
        <div className="flex gap-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-2">
          <a className="link-underline hover:text-ink" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="link-underline hover:text-ink" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="link-underline hover:text-ink" href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
