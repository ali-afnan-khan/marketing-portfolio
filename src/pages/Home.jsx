import { Link } from "react-router-dom";

const METRICS = [
  { value: "3+", label: "Years Scaling Budgets" },
  { value: "7.5×", label: "Average Funnel ROAS" },
];

const PILLARS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l4-4 4 4 4-5 4 3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M3 4h18" />
      </svg>
    ),
    title: "Strategic Paid Media Buying",
    subtitle: "High-Intent SEM & Converting Paid Social",
    description:
      "I don't rely on platform luck or generic templates. I engineer data-backed, multi-channel ad campaigns across Google Ads (SEM) and Meta Ads (SMM) built specifically to capture high-intent audiences and systematically convert passive scrollers into high-value buyers.",
    accentText: "text-clay",
    accentBg: "bg-clay-tint",
    accentLine: "bg-clay",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 00-2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    title: "Psychology-Backed Creative",
    subtitle: "High-converting copy & visual assets",
    description:
      "Clicks are earned at the creative layer. I help design ad copy and visuals around cognitive triggers — urgency, social proof, identity alignment — that move audiences from passive scrollers to active buyers.",
    accentText: "text-sage",
    accentBg: "bg-sage/10",
    accentLine: "bg-sage",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: "Funnel Optimization & CRO",
    subtitle: "Ecosystem Engineering & Friction Reduction",
    description:
      "Traffic is useless if your landing page leaks money. I audit your entire conversion ecosystem, providing high-level strategic direction and directing minute technical tweaks that eliminate funnel friction, boost conversion rates, and maximize average order value.",
    accentText: "text-gold",
    accentBg: "bg-gold/10",
    accentLine: "bg-gold",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden">

        {/* Soft warm wash (replaces neon glow) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[460px] rounded-full bg-clay/5 blur-[140px]" />
          <div className="absolute bottom-10 -right-24 w-[320px] h-[320px] rounded-full bg-sage/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center mx-auto">

          {/* Eyebrow badge */}
          <div className="mb-7 flex justify-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-taupe uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay animate-pulse" />
              Performance Marketing Expert · Paid Advertising Specialist
            </p>
          </div>

          {/* Display heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-ink">
            I Don't Buy Traffic.{" "}
            <span className="italic font-medium text-clay">
              I Engineer Profitable
            </span>{" "}
            Acquisition engines.
          </h1>

          {/* Sub-hook */}
          <p className="mt-7 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            While standard marketing just burn budgets chasing empty clicks and dashboard vanity metrics.
            I Don't. As a technical marketer, I combine high-level strategy with deep infrastructure execution
            —to turn every dollar of ad spend into profitable, predictable revenue.{" "}
            <span className="text-ink font-medium">verifiable bottom-line revenue.</span>
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="w-full sm:w-auto rounded-full bg-clay px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-clay-deep transition-all duration-200 hover:-translate-y-0.5"
            >
              View Case Studies →
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto rounded-full border border-line-strong bg-card px-8 py-3 text-sm font-semibold tracking-wide text-ink hover:border-clay hover:text-clay transition-all duration-200 hover:-translate-y-0.5"
            >
              My Approach
            </Link>
          </div>

          {/* ── METRICS BANNER ─────────────────────────── */}
          <div className="mt-16 grid grid-cols-2 gap-px rounded-xl overflow-hidden border border-line bg-line max-w-3xl mx-auto">
            {METRICS.map(({ value, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 bg-card px-4 py-6 hover:bg-paper-2 transition-colors duration-200"
              >
                <span className="font-display text-2xl sm:text-4xl font-semibold text-clay">
                  {value}
                </span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-taupe text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-taupe text-[11px] tracking-[0.3em]">
          <span>SCROLL</span>
          <span className="block h-6 w-px bg-gradient-to-b from-line-strong to-transparent" />
        </div>
      </section>

      {/* ── VALUE PROPOSITION PILLARS ─────────────────── */}
      <section className="px-6 pb-28 pt-4 max-w-7xl mx-auto border-t border-line">
        <div className="max-w-6xl mx-auto pt-20">

          {/* Section label */}
          <div className="text-center mb-16">
            <p className="text-[11px] font-medium tracking-[0.2em] text-clay uppercase mb-4">
              The Framework
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink tracking-tight">
              Three pillars. One outcome: <span className="italic text-clay">Growth.</span>
            </h2>
          </div>

          {/* Pillar cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <article
                key={i}
                className="group relative rounded-2xl bg-card border border-line p-7 hover:border-line-strong hover:shadow-[0_12px_40px_-12px_rgba(33,28,22,0.18)] transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] ${pillar.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className={`mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl ${pillar.accentBg} ${pillar.accentText}`}>
                  {pillar.icon}
                </div>

                {/* Title + subtitle */}
                <h3 className="font-display text-xl font-semibold text-ink mb-1.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] ${pillar.accentText} mb-4`}>
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-ink-soft leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
