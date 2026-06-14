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
      "I don’t rely on platform luck or generic templates. I engineer data-backed, multi-channel ad campaigns across Google Ads (SEM) and Meta Ads (SMM) built specifically to capture high-intent audiences and systematically convert passive scrollers into high-value buyers.",
    accent: "from-indigo-500 to-blue-500",
    glow: "group-hover:shadow-indigo-500/10",
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
    accent: "from-violet-500 to-purple-500",
    glow: "group-hover:shadow-violet-500/10",
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
    accent: "from-sky-500 to-indigo-500",
    glow: "group-hover:shadow-sky-500/10",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 overflow-hidden">

        {/* Ambient glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full bg-indigo-600/20 blur-[130px]" />
          <div className="absolute top-1/2 -right-20 w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center mx-auto">

          {/* Eyebrow badge */}
          <div className="mb-6 flex justify-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-indigo-400 uppercase">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Performance Marketing Expert · Paid Advertising Specialist
            </p>
          </div>

          {/* Display heading */}
          <h1 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-[#F0EEE9]">
            I Don't Buy Traffic.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">
              I Engineer Profitable
            </span>{" "}
            Acquisition engines.
          </h1>

          {/* Sub-hook */}
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            While standard marketing just burn budgets chasing empty clicks and dashboard vanity metrics. 
            I Don't. As a technical marketer, I combine high-level strategy with deep infrastructure execution
            —to turn every dollar of ad spend into profitable, predictable revenue.{" "}
            <span className="text-slate-200 font-medium">verifiable bottom-line revenue.</span>
          </p>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="w-full sm:w-auto rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Case Studies →
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              My Approach
            </Link>
          </div>

          {/* ── METRICS BANNER ─────────────────────────── */}
          <div className="mt-16 grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/5 bg-white/5 max-w-3xl mx-auto">
            {METRICS.map(({ value, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 bg-[#0A0A0F]/90 px-4 py-5 sm:py-6 hover:bg-[#1E1E2E]/40 transition-colors duration-200"
              >
                <span className="font-['Syne'] text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-violet-300">
                  {value}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 tracking-wide text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-600 text-xs tracking-widest">
          <span>SCROLL</span>
          <span className="block h-6 w-px bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </section>

      {/* ── VALUE PROPOSITION PILLARS ─────────────────── */}
      <section className="px-6 pb-28 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">

          {/* Section label */}
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-3">
              The Framework
            </p>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl font-bold text-[#F0EEE9]">
              Three pillars. One outcome: Growth.
            </h2>
          </div>

          {/* Pillar cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <article
                key={i}
                className={`group relative rounded-2xl bg-slate-950/40 border border-slate-900 p-7 hover:border-indigo-500/20 transition-all duration-300 overflow-hidden ${pillar.glow}`}
              >
                {/* Top gradient accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div className={`mb-5 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${pillar.accent} p-0.5`}>
                  <div className="w-full h-full rounded-[10px] bg-[#0A0A0F] flex items-center justify-center text-indigo-300">
                    {pillar.icon}
                  </div>
                </div>

                {/* Title + subtitle */}
                <h3 className="font-['Syne'] text-lg font-semibold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className={`text-xs font-medium tracking-wide bg-gradient-to-r ${pillar.accent} bg-clip-text text-transparent mb-4`}>
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
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