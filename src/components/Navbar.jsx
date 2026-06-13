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
          
          {/* Wordmark */}
          <NavLink
            to="/"
            className="font-display text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
          >
            <span className="text-indigo-400">Ali </span>
            Afnan
            <span className="text-indigo-400">.</span>
          </NavLink>

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

          {/* Mobile CTA (Optimized for Visibility & Tap Targets) */}
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
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/5 bg-[#0A0A0F]/90 backdrop-blur-lg safe-bottom">
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