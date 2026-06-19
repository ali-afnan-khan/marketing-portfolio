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
    id: "tour-operator",
    index: "01",
    category: "Tour Package Sales · Google & Meta Ads",
    title: "Direct Acquisition Engine for Tour Operator",
    subtitle: "Recovered $60K/yr in middleman commissions by driving direct bookings",
    accent: "from-clay to-gold",
    accentSolid: "bg-clay",
    metrics: [
      { value: "3.66×", label: "True ROAS (Google)" },
      { value: "~ $40K", label: "Total Blended Revenue (6 months)" },
      { value: "30–50%", label: "Annual Revenue via Direct Bookings" },
    ],
    brief: {
      context:
        "A $240K tour operator losing $60,000 every year to OTA commissions (Viator). Their existing Meta and Google ad setups were losing money - 0 Conversions and No Strategy.",
      obstacles: [
        "Broken conversion tracking pipelines with almost zero data visibility",
        "Disorganized ad accounts draining budget",
        "Broad keywords catching low-intent traffic and wasting spend",
      ],
    },
    framework:
      "Rebuilt the entire eco-system from scratch and killed broad keywords. Launched a sharp Google Ads search blueprint catching high-intent travelers looking for specific local tours. Used Meta Ads to inject instant cash flow early on, then shut them down once Google hit peak efficiency to focus 100% of the budget on the highest-converting funnel. Creating a blended revenue of $38K in just a span of 6 months",
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
    id: "ecom-apparel",
    index: "02",
    category: "E-Commerce · Meta Ads",
    title: "Private Label Apparel Brand",
    subtitle: "From breaking even to 7.5× ROAS in 60 days",
    accent: "from-sage to-sage-deep",
    accentSolid: "bg-sage",
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
    id: "concert-tickets",
    index: "03",
    category: "Event Marketing · Meta Ads",
    title: "Orchestra Concert Ticket Sales",
    subtitle: "15.7× ROAS — cleared all inventory at 70% under planned budget",
    accent: "from-gold to-clay",
    accentSolid: "bg-gold",
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
        { src: concertVideo, alt: "Campaign walkthrough video",                  label: "Result Show-Case Video", isVideo: true }
      ],
    },
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricPill({ value, label, accent }) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-5 py-4 rounded-xl bg-paper border border-line">
      <span className={`font-display text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-br ${accent}`}>
        {value}
      </span>
      <span className="text-xs text-taupe tracking-wide text-center">{label}</span>
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
                className="group relative rounded-lg overflow-hidden border border-line hover:border-clay/50 transition-colors cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <span className={`absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white ${img.tag === "Before" ? "bg-brick" : "bg-sage"}`}>
                  {img.tag}
                </span>
                <span className="absolute bottom-2 left-2 text-xs text-white font-medium">{img.label}</span>
              </button>
            ))}
          </div>
          {/* Remaining images */}
          <div className={`grid gap-2 ${rest.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
            {rest.map((img) => (
              <button
                key={img.label}
                onClick={() => setLightbox(img)}
                className="group relative rounded-lg overflow-hidden border border-line hover:border-clay/50 transition-colors cursor-zoom-in"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-36 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs text-white font-medium">{img.label}</span>
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
            className="group relative rounded-lg overflow-hidden border border-line hover:border-clay/50 transition-colors bg-ink h-40 w-full text-left cursor-zoom-in"
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent pointer-events-none" />
            <span className="absolute bottom-2 left-2 text-xs text-white font-medium pointer-events-none">
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
        <p className="mt-3 text-center text-sm text-paper/80 w-full">{img.label}</p>
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border border-line text-ink hover:text-clay flex items-center justify-center text-lg leading-none z-[110]"
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
    <li className="flex items-start gap-2.5 text-sm text-taupe leading-relaxed">
      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-brick" />
      {text}
    </li>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Projects() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-paper">

      {/* ── Page Header ───────────────────────────────── */}
      <section className="relative px-6 pt-28 pb-16 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-clay/5 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto">
          <p className="text-xs font-medium tracking-[0.2em] text-clay uppercase mb-3">
            Verified results
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-ink tracking-tight mb-4">
            Case Studies
          </h1>
          <p className="text-ink-soft text-lg max-w-xl leading-relaxed">
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
              className="group relative rounded-2xl bg-card border border-line hover:border-line-strong hover:shadow-[0_18px_50px_-20px_rgba(33,28,22,0.25)] transition-all duration-500 overflow-hidden"
            >
              {/* Top accent line */}
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${cs.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-7 sm:p-9">

                {/* ── Card header ── */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`font-display text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${cs.accent}`}>
                        {cs.index}
                      </span>
                      <span className="text-xs text-taupe tracking-[0.12em] uppercase">{cs.category}</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight tracking-tight">
                      {cs.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-ink-soft">{cs.subtitle}</p>
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
                      <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-taupe uppercase mb-4">
                        <span className={`inline-block w-4 h-px bg-gradient-to-r ${cs.accent}`} />
                        The Brief & Obstacle
                      </h3>
                      <p className="text-sm text-ink-soft leading-relaxed mb-4">{cs.brief.context}</p>
                      <ul className="space-y-2">
                        {cs.brief.obstacles.map((o) => <ObstacleItem key={o} text={o} />)}
                      </ul>
                    </div>

                    {/* Block 2: The Framework Strategy */}
                    <div>
                      <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-taupe uppercase mb-4">
                        <span className={`inline-block w-4 h-px bg-gradient-to-r ${cs.accent}`} />
                        The Framework Strategy
                      </h3>
                      <p className="text-sm text-ink-soft leading-relaxed">{cs.framework}</p>
                    </div>
                  </div>
                  {/* Right: Image evidence panel */}
                  <div className="lg:col-span-2">
                    <h3 className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-taupe uppercase mb-4">
                      <span className={`inline-block w-4 h-px bg-gradient-to-r ${cs.accent}`} />
                      Evidence
                    </h3>
                    <ImageGrid config={cs.images} />
                    <p className="mt-2.5 text-[11px] text-taupe text-center">
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
          <div className="relative rounded-2xl border border-ink bg-ink p-6 md:p-10 pb-10 md:pb-12 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              {/* 1. Header & Description Typography Stack */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-display text-paper tracking-tight">
                  Request an Acquisition & Attribution Audit
                </h2>
                <p className="text-paper/70 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                  Let's stress-test your tracking configurations, uncover ad-spend leaks, and structure a repeatable growth framework.
                </p>
              </div>
              {/* 2. Centered Audit Button (Moved Above the Bullets) */}
              <div className="flex justify-center items-center pt-2">
                <button
                  onClick={() => setIsAuditModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-clay hover:bg-clay-deep text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-clay/20 tracking-wide hover:-translate-y-0.5 text-sm mx-auto"
                >
                  Secure Your Audit Slot
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </div>
              {/* 3. Framework Highlights Grid (Moved Below the Button) */}
              <div className="pt-2 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left border-y border-paper/15 py-4">
                  <div className="flex items-center gap-2 text-xs text-paper/90 font-medium">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Full funnel teardown
                  </div>
                  <div className="flex items-center gap-2 text-xs text-paper/90 font-medium">
                    <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Zero sales pitch
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#9DB089] font-medium">
                    <svg className="w-4 h-4 text-[#9DB089] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Actionable items
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

    {/* ============================================================= */}
    {/* AUDIT DIALOG POPUP MODAL                                       */}
    {/* ============================================================= */}
    {isAuditModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm animate-fadeIn">
        <div className="relative w-full max-w-md p-6 rounded-xl border border-line bg-card text-center shadow-2xl space-y-4">

          {/* Close Button */}
          <button
            onClick={() => setIsAuditModalOpen(false)}
            className="absolute top-4 right-4 text-taupe hover:text-ink transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          {/* Modal Header */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-ink font-display">Choose Your Preferred Channel</h3>
            <p className="text-ink-soft text-sm font-normal">How would you like to submit your audit request?</p>
          </div>

          {/* Channel Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">

            {/* Email Channel */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aliafnankhanyousafzai01@gmail.com&su=Audit%20Request%20-%20Performance%20Marketing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsAuditModalOpen(false);
                if (window.fbq) {
                  window.fbq('track', 'Contact', {
                    content_name: 'Email Audit Request Channel',
                    content_category: 'Lead Generation'
                  });
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-line bg-paper text-ink font-semibold hover:bg-paper-2 transition-colors text-sm"
            >
              <svg className="w-4 h-4 text-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Via Email
            </a>

            {/* WhatsApp Channel */}
            <a
              href="https://wa.me/923339667163?text=Hi!%20I'm%20interested%20in%20securing%20an%20Acquisition%20%26%20Attribution%20Audit%20slot."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                setIsAuditModalOpen(false);
                if (window.fbq) {
                  window.fbq('track', 'Contact', {
                    content_name: 'WhatsApp Audit Request Channel',
                    content_category: 'Lead Generation'
                  });
                }
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-sage hover:bg-sage-deep text-white font-semibold transition-colors text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.989 0c3.183.001 6.177 1.239 8.43 3.494 2.254 2.255 3.49 5.251 3.488 8.436-.005 6.581-5.356 11.932-11.934 11.932-2.004-.001-3.973-.505-5.717-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.794 1.453 5.373 0 9.743-4.373 9.746-9.748.002-2.602-1.01-5.05-2.85-6.892C16.436 2.125 13.99 1.113 11.1 1.111c-5.376 0-9.748 4.372-9.751 9.75-.001 1.765.467 3.491 1.357 5.021l-.995 3.637 3.72-.975zm13.102-7.5c-.174-.088-1.03-.508-1.19-.566-.16-.058-.276-.088-.393.088-.117.176-.45.566-.552.684-.102.118-.204.133-.378.045-.174-.088-.736-.271-1.402-.865-.518-.462-.868-1.033-.97-1.21-.102-.176-.011-.272.077-.359.08-.078.174-.204.262-.306.088-.102.117-.176.175-.293.058-.118.029-.22-.014-.309-.043-.088-.393-.949-.539-1.301-.143-.347-.29-.299-.393-.304l-.335-.006c-.117 0-.306.044-.466.218-.16.176-.611.597-.611 1.454 0 .858.624 1.688.712 1.805.088.117 1.228 1.877 2.976 2.631.416.18.741.287.994.367.419.133.801.114 1.102.069.336-.05 1.03-.42 1.176-.826.146-.405.146-.753.102-.826-.044-.073-.16-.117-.334-.205z"/>
              </svg>
              Via WhatsApp
            </a>

          </div>
        </div>
      </div>
    )}

    </>
  );
}