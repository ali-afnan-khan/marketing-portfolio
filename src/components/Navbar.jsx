import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    [
      "relative text-sm font-medium tracking-wide transition-colors duration-200",
      "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full",
      "after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
      "hover:text-indigo-400 hover:after:scale-x-100 after:bg-indigo-400",
      isActive ? "text-indigo-400 after:scale-x-100" : "text-slate-300",
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block px-4 py-3 rounded-lg text-base font-medium tracking-wide transition-colors duration-150",
      isActive
        ? "bg-indigo-500/20 text-indigo-300"
        : "text-slate-300 hover:bg-white/5 hover:text-white",
    ].join(" ");

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 backdrop-blur-md bg-[#0A0A0F]/80 border-b border-white/5">

        {/* Wordmark — updated to Ali Afnan */}
        <NavLink
          to="/"
          className="font-display text-lg font-bold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          <span className="text-indigo-400">Ali </span>
          Afnan
          <span className="text-indigo-400">.</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="mailto:hello@aliafnan.com"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-colors"
        >
          Let's Talk
        </a>

        {/* Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span className={["block h-0.5 w-5 bg-slate-200 rounded-full transition-all duration-300", menuOpen ? "translate-y-2 rotate-45" : ""].join(" ")} />
          <span className={["block h-0.5 w-5 bg-slate-200 rounded-full transition-all duration-300", menuOpen ? "opacity-0 scale-x-0" : ""].join(" ")} />
          <span className={["block h-0.5 w-5 bg-slate-200 rounded-full transition-all duration-300", menuOpen ? "-translate-y-2 -rotate-45" : ""].join(" ")} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden absolute inset-x-0 top-16 z-40",
          "bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-white/5",
          "transition-all duration-300 ease-in-out overflow-hidden",
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} className={mobileLinkClass}>
              {label}
            </NavLink>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="mailto:hello@aliafnan.com"
              className="flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}