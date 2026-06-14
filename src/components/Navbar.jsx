import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const desktopLinkClass = ({ isActive }) =>
    [
      "relative text-sm font-medium tracking-wide transition-colors duration-200",
      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full",
      "after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
      "hover:text-indigo-400 hover:after:scale-x-100 after:bg-indigo-400",
      isActive ? "text-indigo-400 after:scale-x-100" : "text-slate-300",
    ].join(" ");

  const mobileTabLinkClass = ({ isActive }) =>
    [
      "flex-1 text-center py-3 text-sm font-medium tracking-wide transition-all duration-200",
      isActive 
        ? "text-indigo-400 font-semibold scale-105" 
        : "text-slate-400 hover:text-slate-200",
    ].join(" ");

  return (
    <>
      {/* --- STICKY TOP HEADER --- */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-white/5">
          
          {/* Brand Identity Wrapper */}
          <div className="flex items-center gap-3">
            {/* Inline LinkedIn Icon leading directly to your link */}
            <a
              href="https://linkedin.com/in/ali-afnan-khan" // Replace with your handle URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#0A66C2] transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Wordmark */}
            <NavLink
              to="/"
              className="font-display text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
            >
              <span className="text-indigo-400">Ali </span>
              Afnan
              <span className="text-indigo-400">.</span>
            </NavLink>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === "/"} className={desktopLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA (Gmail web view) */}
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=aliafnankhanyousafzai01@gmail.com&su=Inquiry%20-%20Performance%20Marketing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors duration-300"
          >
            Let's Talk 📬
          </a>

          {/* Mobile CTA (WhatsApp fallback target link layout layout) */}
          <a 
            href="https://wa.me/923339667163?text=Hi%20Ali!%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20chat%20about%20a%20project." 
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md active:scale-95 hover:bg-emerald-500 transition-all duration-200"
          >
            Let's Talk 💬
          </a>

        </div>
      </header>

      {/* --- MOBILE FIXED BOTTOM TAB BAR --- */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/20 bg-[#0A0A0F]/98 backdrop-blur-2xl shadow-[0_-8px_30px_rgb(0,0,0,0.8)] pb-[calc(env(safe-area-inset-bottom)+4px)]">
        <nav className="flex justify-around items-center h-14 max-w-md mx-auto px-4">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} className={mobileTabLinkClass}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}