import { useState } from "react";
import { Link } from "react-router-dom";

// ─── Asset references ─────────────────────────────────────────────────────────
// To resolve the static bundler build errors, these are referenced as string paths.
// Move your images directly into your project's `public/assets/` directory 
// (e.g. public/assets/private_label_ecom_clothing_store_meta_ads_dashboard_snapshot.jpg).

const ecomDashboard   = "/assets/private_label_ecom_clothing_store_meta_ads_dashboard_snapshot.jpg";
const ecomShopify    = "/assets/private_label_ecom_clothing_store_shopify_dashboard_snapshort.jpg";

const tourMetaAfter   = "/assets/private_tour_operator_after_snapshot_meta_ads.jpg";
const tourMetaBefore  = "/assets/private_tour_operator_before_snapshot_meta_ads.jpg";
const tourCRM         = "/assets/private_tour_operator_crm_dashboard_after_snapshot.PNG";
const tourGoogleAfter = "/assets/private_tour_operator_google_ads_dashboard_before_snapshot.PNG";

const concertCRM      = "/assets/concert_ticket_sales_meta_ads_crm_dashboard_snapshot.jpg";
const concertSpend     = "/assets/concert_ticket_sales_meta_ads_meta_dashboard_spend.jpg";

const concertVideo     = "/assets/concert_case_study.mp4";
// ─── Data ─────────────────────────────────────────────────────────────────────

const CASE_STUDIES = [
  {
    id: "ecom-apparel",
    index: "01",
    category: "E-Commerce · Meta Ads",
    title: "Private Label Apparel Brand",
    subtitle: "From breaking even to 7.5× ROAS in 60 days",
    accent: "from-indigo-500 to-blue-500",
    accentSolid: "bg-indigo-500",
    metrics: [
      { value: "7.5×", label: "ROAS" },
      { value: "PKR 2M+", label: "Revenue Generated" },
      { value: "60 days", label: "Sprint Duration" },
    ],
    brief: {
      context:
        "An apparel brand competing in a crowded market with razor-thin margins. The client’s only goal was to break even—any positive return would be a massive win.",
      obstacles: [
        "Severe shortage of ad creatives at launch",
        "High risk of quick ad fatigue against copycat competitors",
        "A narrow window to scale before market saturation",
      ],
    },
    framework:
      "Structured rapid budget testing to isolate winning ad creative styles instantly. Built an agile account framework to hyper-segment audiences and rotate hooks dynamically. We aggressively cut underperforming elements daily to protect profit margins and keep acquisition costs rock-bottom.",
    images: {
      layout: "grid-2",
      items: [
        { src: ecomDashboard, alt: "Meta Ads dashboard — campaign performance overview", label: "Meta Ads Dashboard" },
        { src: ecomShopify,   alt: "Shopify revenue dashboard snapshot",             label: "Shopify Revenue"   },
      ],
    },
  },

  {
    id: "tour-operator",
    index: "02",
    category: "Lead Gen · Google & Meta Ads",
    title: "Direct Acquisition Engine for Tour Operator",
    subtitle: "Recovered $60K/yr in middleman commissions by driving direct bookings",
    accent: "from-violet-500 to-purple-500",
    accentSolid: "bg-violet-500",
    metrics: [
      { value: "3.66×", label: "True ROAS (Google)" },
      { value: "~ $40K", label: "Total Blended Revenue (6 months)" },
      { value: "30–50%", label: "Annual Revenue via Direct Bookings" },
    ],
    brief: {
      context:
        "A $240K tour operator losing $60,000 every year to OTA commissions (Viator). Their existing Meta and Google ad setups were losing money- 0 Conversions or No Strategy.",
      obstacles: [
        "Broken conversion tracking pipelines with almost zero data visibility",
        "Disorganized ad accounts draining budget",
        "Broad keywords catching low-intent traffic and wasting spend",
      ],
    },
    framework:
      "Rebuilt the entire eco-system from scratch and killed broad keywords. Launched a sharp Google Ads search blueprint catching high-intent travelers looking for specific local tours. Used Meta Ads to inject instant cash flow early on, then shut them down once Google hit peak efficiency to focus 100% of the budget on the highest-converting funnel. Creating a blended revenue of $38K in just a span of 6 months",
    
      // Find this inside id: "concert-tickets" at the bottom of the object
    images: {
      layout: "before-after",
      items: [
        { src: tourMetaBefore,  alt: "Meta Ads account — before restructure", label: "Meta · Before", tag: "Before" },
        { src: tourMetaAfter,   alt: "Meta Ads account — after restructure",  label: "Meta · After",  tag: "After"  },
        { src: tourGoogleAfter, alt: "Google Ads dashboard snapshot",         label: "Google Ads"    },
        { src: tourCRM,         alt: "CRM verified revenue dashboard",        label: "CRM Revenue"   },
      ],
    },
  },

  {
    id: "concert-tickets",
    index: "03",
    category: "Event Marketing · Meta Ads",
    title: "Orchestra Concert Ticket Sales",
    subtitle: "15.7× ROAS — cleared all inventory at 70% under planned budget",
    accent: "from-sky-500 to-indigo-500",
    accentSolid: "bg-sky-500",
    metrics: [
      { value: "15.7×", label: "ROAS" },
      { value: "$232", label: "Actual Ad Spend" },
      { value: "70%", label: "Budget Saved" },
    ],
    brief: {
      context:
        "A high-profile orchestra concert needing to hit $3,200 in revenue from a strict $800 budget inside a fast, one-month deadline.",
      obstacles: [
        "Major tracking deficits and hidden checkout drop-offs",
        "High-friction booking process killing conversions",
        "Niche local audience requiring extreme targeting precision",
      ],
    },
    framework:
      "Audited and patched the entire tracking setup before spending a dime. Profiled precise local event-goers and used psychological triggers to build personalized ad creatives. Deployed strict ad placement exclusions and a target bidding strategy to sweep the market without bleeding cash.",
    images: {
      layout: "grid-2",
      items: [
        { src: concertSpend, alt: "Meta Ads spend dashboard — concert campaign", label: "Meta Ads Spend" },
        { src: concertCRM,   alt: "CRM dashboard — ticket sales verified",       label: "CRM Verified Revenue" },
        // Add this third object to the items array:
        { src: concertVideo, alt: "Campaign walkthrough video",                  label: "Result Show-Case Video", isVideo: true }
      ],
    },
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricPill({ value, label, accent }) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/5">
      <span className={`font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${accent}`}>
        {value}
      </span>
      <span className="text-xs text-slate-500 tracking-wide text-center">{label}</span>
    </div>
  );
}

function ImageGrid({ config }) {
  const [lightbox, setLightbox] = useState(null);

  if (config.layout === "before-after") {
    const [before, after, ...rest] = config.items;
    return (
      <>
        <div className="space-y-3">
          {/* Before / After split */}
          <div className="grid grid-cols-2 gap-2">
            {[before, after].map((img) => (
              <button
                key={img.label}
                onClick={() => setLightbox(img)}
                className="group relative rounded-lg overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-colors cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent" />
                <span className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${img.tag === "Before" ? "bg-red-500/80 text-white" : "bg-emerald-500/80 text-white"}`}>
                  {img.tag}
                </span>
                <span className="absolute bottom-2 left-2 text-xs text-slate-300 font-medium">{img.label}</span>
              </button>
            ))}
          </div>
          {/* Remaining images */}
          <div className={`grid gap-2 ${rest.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
            {rest.map((img) => (
              <button
                key={img.label}
                onClick={() => setLightbox(img)}
                className="group relative rounded-lg overflow-hidden border border-white/5 hover:border-indigo-500/30 transition-colors cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs text-slate-300 font-medium">{img.label}</span>
              </button>
            ))}
          </div>
        </div>

        {lightbox && (
          <Lightbox img={lightbox} onClose={() => setLightbox(null)} />
        )}
      </>
    );
  }

// Default: grid-2
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {config.items.map((img) => (
          <button
            key={img.label}
            onClick={() => setLightbox(img)}
            className="group relative rounded-lg overflow-hidden border border-white/5 bg-[#0A0A0F] h-40 w-full text-left cursor-zoom-in"
          >
            {img.isVideo ? (
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                {/* Visual preview rotated 90 deg left (-rotate-90) */}
                <video
                  src={img.src}
                  muted
                  className="w-full h-full object-cover -rotate-90 scale-125 pointer-events-none"
                />
              </div>
            ) : (
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/90 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2 text-xs text-slate-300 font-medium pointer-events-none">
              {img.label}
            </span>
          </button>
        ))}
      </div>

      {lightbox && (
        <Lightbox img={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

function Lightbox({ img, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-xl w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {img.isVideo ? (
          <div className="w-full aspect-[9/16] max-h-[75vh] flex items-center justify-center bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Plays full size, rotated 90 degrees left */}
            <video
              src={img.src}
              controls
              autoPlay
              className="w-full h-full object-contain -rotate-90"
            />
          </div>
        ) : (
          <img
            src={img.src}
            alt={img.alt}
            className="w-full rounded-xl border border-white/10 shadow-2xl"
          />
        )}
        <p className="mt-3 text-center text-sm text-slate-400 w-full">{img.label}</p>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-800 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg leading-none z-[110]"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function ObstacleItem({ text }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-red-400/70" />
      {text}
    </li>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0D0D18]">

      {/* ── Page Header ───────────────────────────────── */}
      <section className="relative px-6 pt-28 pb-16 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-3">
            Verified results
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#F0EEE9] mb-4">
            Case Studies
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Three engagements. Every metric below is CRM-verified or platform-audited —
            no inflated attribution, no blended vanity numbers.
          </p>
        </div>
      </section>

      {/* ── Case Study Cards ──────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto space-y-10">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="group relative rounded-2xl bg-[#1A1A2E] border border-white/5 hover:border-indigo-500/20 transition-colors duration-500 overflow-hidden"
            >
              {/* Top accent line */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${cs.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-7 sm:p-9">

                {/* ── Card header ── */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-display text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${cs.accent}`}>
                        {cs.index}
                      </span>
                      <span className="text-xs text-slate-500 tracking-wide uppercase">{cs.category}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F0EEE9] leading-tight">
                      {cs.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-slate-400">{cs.subtitle}</p>
                  </div>
                </div>

                {/* ── Metrics row ── */}
                <div className="grid grid-cols-3 gap-3 mb-10">
                  {cs.metrics.map((m) => (
                    <MetricPill key={m.label} value={m.value} label={m.label} accent={cs.accent} />
                  ))}
                </div>

                {/* ── Two-column body: left = content, right = images ── */}
                <div className="grid lg:grid-cols-5 gap-8">

                  {/* Left: 3 content blocks */}
                  <div className="lg:col-span-3 space-y-8">

                    {/* Block 1: The Brief & Obstacle */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
                        <span className={`inline-block w-4 h-px bg-gradient-to-r ${cs.accent}`} />
                        The Brief & Obstacle
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">{cs.brief.context}</p>
                      <ul className="space-y-2">
                        {cs.brief.obstacles.map((o) => <ObstacleItem key={o} text={o} />)}
                      </ul>
                    </div>

                    {/* Block 2: The Framework Strategy */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
                        <span className={`inline-block w-4 h-px bg-gradient-to-r ${cs.accent}`} />
                        The Framework Strategy
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{cs.framework}</p>
                    </div>
                  </div>
                  {/* Right: Image evidence panel */}
                  <div className="lg:col-span-2">
                    <h3 className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
                      <span className={`inline-block w-4 h-px bg-gradient-to-r ${cs.accent}`} />
                      Evidence
                    </h3>
                    <ImageGrid config={cs.images} />
                    <p className="mt-2.5 text-[11px] text-slate-600 text-center">
                      Click any image to expand
                    </p>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA: Audit Banner ─────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-indigo-500/20 bg-[#1A1A2E]">
            {/* Glow backdrop */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10" />
            <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-500/10 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10 sm:px-12 sm:py-12">
              <div className="text-center md:text-left max-w-lg">
                <p className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-3">
                  Free strategic session
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F0EEE9] mb-3 leading-tight">
                  Request a Growth &<br className="hidden sm:block" /> Acquisition Audit
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed">
                  I'll audit your current paid acquisition setup — tracking, account structure,
                  creative, and funnel — and return a prioritised breakdown of where revenue is
                  leaking and what to fix first.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 hover:bg-indigo-500 transition-colors whitespace-nowrap"
                >
                  Request the Audit →
                </Link>
                <p className="mt-3 text-center text-xs text-slate-600">
                  No pitch. No retainer push. Just signal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}