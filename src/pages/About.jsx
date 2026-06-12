import React from 'react';

export default function About() {
  // Direct public string reference to bypass ES module import errors during Vite builds
  const profileImage = "/assets/personal.png";

  return (
    <div className="min-h-screen bg-[#0D0D18] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden relative">
      
      {/* Decorative Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10">
        
        {/* ================================================================= */}
        {/* 1. HERO ARCHITECTURE & PERSONAL VISUAL                           */}
        {/* ================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-28 lg:mb-40">
          
          {/* Asymmetric Image Frame Area (5 Columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative group max-w-sm lg:max-w-none w-full aspect-[4/5]">
              {/* Corner Brackets / Neon Border Glow Container */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/20 via-slate-500/10 to-emerald-500/20 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative w-full h-full bg-[#131322] border border-slate-800 rounded-xl overflow-hidden p-3 flex items-center justify-center">
                {/* Tech Corner Accent Accents */}
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
          </div>

          {/* Typography Stack (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Operational Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-['Syne',sans-serif]">
              Engineering High-Yield Customer Acquisition Systems.
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
              A blend of consumer psychology, rigorous technical audits, and clinical media buying.
            </p>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. CORE PHILOSOPHY & NARRATIVE (The "Why")                       */}
        {/* ================================================================= */}
        <section className="mb-28 lg:mb-40 border-t border-slate-800/60 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold sticky top-8">
                Core Philosophy
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8 text-base sm:text-lg text-slate-400 font-light max-w-3xl leading-relaxed">
              <p>
                I don’t look at advertising as a creative playground; I treat it as a 
                <strong className="text-white font-medium"> capital deployment engine</strong>. Every dollar 
                allocated into an account must be mapped to a clean data point, an exact search intent signature, 
                or an optimized behavioral trigger.
              </p>
              <p>
                My work sits squarely at the intersection of infrastructure configuration and growth psychology. 
                Whether it's hunting down 25% margin leaks from over-reliance on third-party OTAs, or writing 
                proprietary creative-layer frameworks that scale apparel brands without performance decay, my objective 
                is always <strong className="text-emerald-400 font-medium">bottom-line ROI</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. THE INFRASTRUCTURE AUDIT METHODOLOGY                          */}
        {/* ================================================================= */}
        <section className="mb-28 lg:mb-40">
          <div className="mb-12">
            <h2 className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-4">
              Operational Framework
            </h2>
            <h3 className="text-3xl font-bold font-['Syne',sans-serif] text-white">
              The Infrastructure Audit Methodology
            </h3>
          </div>

          {/* 3-Column Glassmorphic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1 */}
            <div className="bg-[#131322]/40 border border-slate-800 hover:border-indigo-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-indigo-400 font-bold mb-6 block">
                  01 / Data Pipeline Cleansing
                </div>
                <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                  Auditing tracking setups, fixing server-side attribution leaks, eliminating duplicate event triggers, and establishing clean data feedback loops.
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 mt-8 group-hover:via-indigo-500/50 transition-all duration-500" />
            </div>

            {/* Card 2 */}
            <div className="bg-[#131322]/40 border border-slate-800 hover:border-indigo-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-indigo-400 font-bold mb-6 block">
                  02 / Intent & Asset Engineering
                </div>
                <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                  Deconstructing audience demographics via deep-dive profiling, mapping exact high-converting keyword intent stacks, and directing audience-centered ad variations based on behavioral psychology.
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 mt-8 group-hover:via-indigo-500/50 transition-all duration-500" />
            </div>

            {/* Card 3 */}
            <div className="bg-[#131322]/40 border border-slate-800 hover:border-indigo-500/20 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="text-sm font-mono text-emerald-400 font-bold mb-6 block">
                  03 / Controlled Scaling & Reallocation
                </div>
                <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                  Deploying advanced bidding structures, isolating profitable variables via rigid testing mechanics, and aggressively scaling winners without triggering fatigue or efficiency drops.
                </p>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 mt-8 group-hover:via-emerald-500/50 transition-all duration-500" />
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. CALL TO ACTION: THE LIVE SYSTEM AUDIT                         */}
        {/* ================================================================= */}
        <section className="relative rounded-2xl border border-slate-800 bg-gradient-to-b from-[#131322] to-[#0D0D18] p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Subtle grid pattern background accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Syne',sans-serif] text-white tracking-tight">
              Request an Acquisition & Attribution Audit
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Let's stress-test your tracking configurations, uncover ad-spend leaks, and structure a repeatable growth framework.
            </p>

            {/* Brief Onboarding Zone Specs */}
            <div className="py-6 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left border-y border-slate-800/80 py-4 my-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Full funnel teardown
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Zero sales pitch
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Actionable items
                </div>
              </div>
            </div>

            {/* Direct High-Contrast Action Button */}
            <div className="pt-2">
              <a 
                href="mailto:your.email@domain.com?subject=Audit%20Request%20-%20Performance%20Marketing" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-slate-200 text-[#0D0D18] font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-white/5 tracking-wide hover:-translate-y-0.5"
              >
                Secure Your Audit Slot
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}