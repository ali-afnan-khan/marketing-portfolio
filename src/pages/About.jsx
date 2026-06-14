import React from 'react';

export default function About() {
  // Direct public string reference to bypass ES module import errors during Vite builds
  const profileImage = "/assets/personal.png";
  const [isAuditModalOpen, setIsAuditModalOpen] = React.useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#0D0D18] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden relative">
        
        {/* Decorative Background Ambient Glows */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Isolated top padding from pb elements to clear the fixed top navigation bar layout safely */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-12 lg:pt-36 lg:pb-16 relative z-10">
          
          {/* ================================================================= */}
          {/* 1. HERO ARCHITECTURE & PERSONAL VISUAL                           */}
          {/* ================================================================= */}
          {/* Change mb-16 lg:mb-24 down to mb-6 lg:mb-8 */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-6 lg:mb-8">
          
          {/* Asymmetric Image Frame Area (5 Columns) + Secondary CRO Button */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col items-center lg:items-start gap-4">
            
            {/* The Image Wrapper Card */}
            <div className="relative group max-w-sm lg:max-w-none w-full aspect-[4/5]">
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 via-slate-500/10 to-emerald-500/20 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative w-full h-full bg-[#131322] border border-slate-800 rounded-xl overflow-hidden p-3 flex items-center justify-center">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-500" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-700" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-700" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-500" />
                
                <img 
                  src={profileImage} 
                  alt="Performance Marketing Specialist Headshot" 
                  className="w-full h-full object-cover rounded-lg filter grayscale contrast-125 group-hover:grayscale-0 transition duration-700 ease-out"
                />
              </div>
            </div>

            {/* High-Attention Animated & Pulsating Secondary CTA Button */}
              <button
                onClick={() => setIsAuditModalOpen(true)}
                className="w-full max-w-sm lg:max-w-none flex items-center justify-between px-5 py-4 bg-transparent hover:bg-indigo-500/10 text-slate-200 hover:text-white border border-indigo-500/30 hover:border-indigo-400 rounded-xl transition-all duration-300 group/btn font-semibold text-sm tracking-wide shadow-[0_0_0_0_rgba(99,102,241,0.4)] animate-[pulse_3s_infinite] hover:animate-none hover:scale-[1.02]"
              >
                <span className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    {/* Double-layer radar pulse effect on the green dot */}
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  Request Live System Audit
                </span>
                <svg 
                  className="w-5 h-5 text-indigo-400 group-hover/btn:text-indigo-300 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>

          </div>

          {/* Typography Stack (7 Columns) - Tightened space-y-4 */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Paid Media Specialist
            </div>
            {/* Slightly reduced heading text size from text-4xl/6xl to text-3xl/5xl */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] font-['Syne',sans-serif]">
              I Don’t Just Buy Clicks.<br />
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                I Engineer Profitable Acquisition Engines.
              </span>
            </h1>
            {/* Increased font size to text-xl, boosted weight to font-normal, and enriched color contrast */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
              Hey, I'm Ali Afnan. I'm a technical marketer with a deep strategic approach. I bridge the gap between heavy infrastructure engineering and high-leverage growth psychology to scale brand revenue cleanly.
            </p>
          </div>
          </section>

        {/* ================================================================= */}
        {/* 2. CORE PHILOSOPHY & NARRATIVE (The "Why")                       */}
        {/* ================================================================= */}
        {/* Shortened bottom margin and tightened top padding */}
        <section className="mb-16 lg:mb-20 border-t border-slate-800/60 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            <div className="lg:col-span-4">
              {/* Sticky header is preserved but styled neatly */}
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold sticky top-8">
                Core Philosophy
              </h2>
            </div>
            {/* Swapped text-slate-400/font-light to text-slate-300/font-normal for increased readability */}
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-slate-300 font-normal max-w-3xl leading-relaxed">
              <p>
                I don’t look at advertising as a creative playground; I treat it as a 
                <strong className="text-white font-semibold"> capital deployment engine</strong>. I approach marketing as a holistic ecosystem strategist, engineering tailored, high-intent paid campaigns and optimized funnels that consistently maximize customer acquisition and conversion rates.
              </p>
              <p>
                My work sits squarely at the intersection of revenue-driven growth strategy and collaborative team leadership. Whether I'm architecting scalable marketing systems, optimizing backend funnels to boost closing margins, or resolving advanced data tracking leaks, my objective is always a predictable, <strong className="text-emerald-400 font-semibold">highly-profitable acquisition model</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* ================================================================= */}
        {/* 3. THE INFRASTRUCTURE AUDIT METHODOLOGY                          */}
        {/* ================================================================= */}
        <section className="mb-16 lg:mb-24">
          <div className="mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-2">
              Operational Framework
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Syne',sans-serif] text-white">
              The Performance Engine Infrastructure
            </h3>
          </div>

          {/* 3-Column Grid with updated headings and emphatic copy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Card 1 */}
            <div className="bg-[#131322]/40 border border-slate-800 hover:border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-indigo-400 font-bold mb-4 flex items-center gap-2">
                  <span>01 / 📊 Tracking & Data Infrastructure</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                  Eliminating attribution gaps via <strong className="text-white font-semibold">GTM</strong>, <strong className="text-white font-semibold">GA4</strong>, <strong className="text-white font-semibold">Meta Pixel</strong>, and <strong className="text-white font-semibold">Conversions API (CAPI)</strong> to back every dollar with precise data.
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 mt-6 group-hover:via-indigo-500/50 transition-all duration-500" />
            </div>

            {/* Card 2 */}
            <div className="bg-[#131322]/40 border border-slate-800 hover:border-indigo-500/20 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-indigo-400 font-bold mb-4 flex items-center gap-2">
                  <span>02 / 🚀 Multi-Channel High Converting Campaigns</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                  Engineering aggressive market acquisition by deploying synchronized paid search <strong className="text-white font-semibold">Google Ads</strong> and hyper-targeted audience funnels <strong className="text-white font-semibold">Meta Ads</strong> designed for raw revenue generation.
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 mt-6 group-hover:via-indigo-500/50 transition-all duration-500" />
            </div>
  
            {/* Card 3 */}
            <div className="bg-[#131322]/40 border border-slate-800 hover:border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-emerald-400 font-bold mb-4 flex items-center gap-2">
                  <span>03 / 🛡️ Friction-less Ecosystem</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
                  Providing elite <strong className="text-white font-semibold">Conversion Rate Optimization (CRO)</strong> and landing page guidance to dismantle funnel leaks, maximize user intent, and squeeze peak profits out of your incoming traffic.
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 mt-6 group-hover:via-emerald-500/50 transition-all duration-500" />
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* ================================================================= */}
        {/* 4. CALL TO ACTION: THE LIVE SYSTEM AUDIT                         */}
        {/* ================================================================= */}
        <section className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-[#131322] to-[#0D0D18] p-6 md:p-10 pb-10 md:pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            {/* 1. Header & Description Typography Stack */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Syne',sans-serif] text-white tracking-tight">
                Request an Acquisition & Attribution Audit
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                Let's stress-test your tracking configurations, uncover ad-spend leaks, and structure a repeatable growth framework.
              </p>
            </div>

            {/* 2. Centered Audit Button (Moved Above the Bullets) */}
            <div className="flex justify-center items-center pt-2">
              <button 
                onClick={() => setIsAuditModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white hover:bg-slate-200 text-[#0D0D18] font-bold rounded-lg transition-all duration-300 shadow-lg shadow-white/5 tracking-wide hover:-translate-y-0.5 text-sm mx-auto"
              >
                Secure Your Audit Slot
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>

            {/* 3. Framework Highlights Grid (Moved Below the Button) */}
            <div className="pt-2 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left border-y border-slate-800/80 py-4">
                <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Full funnel teardown
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Zero sales pitch
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Actionable items
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* AUDIT DIALOG POPUP MODAL */}
        {isAuditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="relative w-full max-w-md p-6 rounded-xl border border-slate-800 bg-[#0D0D18] text-center shadow-2xl space-y-4">
              
              <button 
                onClick={() => setIsAuditModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white font-['Syne',sans-serif]">Choose Your Preferred Channel</h3>
                <p className="text-slate-300 text-sm font-normal">How would you like to submit your audit request?</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aliafnankhanyousafzai01@gmail.com&su=Audit%20Request%20-%20Performance%20Marketing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsAuditModalOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/40 text-white font-semibold hover:bg-slate-800 transition-colors text-sm"
                >
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Via Email
                </a>

                <a 
                  href="https://wa.me/923339667163?text=Hi!%20I'm%20interested%20in%20securing%20an%20Acquisition%20%26%20Attribution%20Audit%20slot." 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsAuditModalOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors text-sm"
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

      </div>
    </div>
  </>
);
}