/**
 * All homepage copy lives here so it's easy to edit in one place.
 *
 * Anything wrapped as `standIn("...")` is placeholder copy written by Claude.
 * It renders with a dashed underline + "stand-in" tooltip so it's easy to spot.
 * Replace it with plain strings once you have the real content.
 */

export type Copy = string | { standIn: string };
export const standIn = (text: string): Copy => ({ standIn: text });

export const site = {
  /**
   * Turn sections on/off. Flip `writing` to true once real posts exist in
   * src/content/posts.ts; that re-enables the homepage section, nav link,
   * hero link and the /writing pages.
   */
  features: {
    writing: false,
    offTheClock: false,
  },

  name: "Mark Fick",
  location: "Seattle, WA",
  email: "markfick31415@gmail.com",
  linkedin: "https://linkedin.com/in/mark-fick",
  github: "https://github.com/marqfiq",

  hero: {
    kicker: "Technical founder · Seattle",
    // Rendered as: before + <em>emphasis</em> + after
    headline: { before: "I build tools for the friction ", emphasis: "between", after: " the code." },
    intro:
      "I'm Mark — a builder who spent a decade inside finance data, data platforms, and consulting before going all-in on my own products. These days I'm building RetroFlow, helping engineering teams find and fix what slows them down as AI changes how software gets made.",
    photoCaption: "Seattle, mostly caffeinated.",
    availability: standIn("Open to a few consulting & advisory engagements in 2027"),
  },

  now: {
    updated: "November 2026",
    items: [
      {
        label: "Building",
        text: "RetroFlow — async retros and workflow insight for engineering teams, now with tooling for AI-heavy codebases.",
      },
      {
        label: "Thinking about",
        text: "What happens when writing code gets cheap and review, coordination, and decisions become the bottleneck.",
      },
      { label: "Reading", text: standIn("“The Goal” by Eliyahu Goldratt, for the third time") },
      { label: "Drinking", text: standIn("A washed Ethiopian pour-over, most mornings") },
      { label: "Next trip", text: standIn("Somewhere with good coffee and bad Wi-Fi") },
    ] as { label: string; text: Copy }[],
  },

  principles: [
    {
      title: "The bottleneck moved.",
      body: "AI made writing code cheap. The hard part is now review, coordination, and deciding what's worth building at all. So that's where I spend my attention.",
    },
    {
      title: "Fit the workflow, don't add process.",
      body: "The best tools slot into how a team already works. I'd rather ship one small thing people actually use than a framework nobody adopts.",
    },
    {
      title: "Find where it breaks under pressure.",
      body: "Give me a short time with a team or system and I'll have a working model of where the friction comes from and which part is worth fixing first.",
    },
  ],

  experience: [
    { role: "Founding Engineer", org: "RetroFlow", years: "2025 – now", note: "Built and shipped the platform end-to-end; grew to 1,600 monthly active users." },
    { role: "Senior Software Engineer, Data Platforms", org: "Bowhead", years: "2022 – 25", note: "Data integrity through major migrations as the company scaled toward IPO." },
    { role: "Software Engineering Consultant", org: "Lettuce Innovate", years: "2020 – 22", note: "Led engagements from discovery to handoff; automated financial reporting." },
    { role: "Software Engineer, Analytics", org: "Nationwide", years: "2018 – 20", note: "Validation algorithms that caught risk in general ledger entries." },
    { role: "Software Engineer, Finance Data Governance", org: "Nationwide", years: "2016 – 18", note: "Forecasting models and standardized financial data pipelines." },
  ],

  offTheClock: [
    {
      label: "Coffee",
      text: standIn("Ranking Seattle's pour-over spots on a spreadsheet nobody asked for. Current #1: a tiny place in Capitol Hill."),
    },
    {
      label: "Travel",
      text: standIn("Recently: Lisbon, Kyoto, and a lot of the Olympic Peninsula. I plan trips around bakeries."),
    },
    {
      label: "Tinkering",
      text: standIn("Small weekend tools, home automation that mostly works, and the occasional over-engineered spreadsheet."),
    },
  ] as { label: string; text: Copy }[],

  contact: {
    pitch:
      "I'm most useful to teams figuring out how to get the most of AI. If that's you, or you just want to trade notes, say hi.",
  },
};
