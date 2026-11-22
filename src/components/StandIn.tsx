import type { Copy } from "@/content/site";

/** Renders site copy; placeholder ("stand-in") copy gets a visible dashed marker. */
export default function Text({ value }: { value: Copy }) {
  if (typeof value === "string") return <>{value}</>;
  return (
    <span className="stand-in" title="Stand-in copy — replace in src/content/site.ts">
      {value.standIn}
    </span>
  );
}
