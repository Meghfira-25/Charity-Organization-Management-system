import { useEffect, useState } from "react";
import { ArrowRight, LogIn, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "./PublicNavbar.css";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/programs", "Programs"],
  ["/annual-plans", "Annual Plans"],
  ["/stories", "Success Stories"],
  ["/news", "Events & News"],
  ["/contact", "Contact"],
];

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <NavLink to="/" className="brand" aria-label="Ishraq home">
          <Logo />
        </NavLink>

        <div className={`nav-panel ${menuOpen ? "is-open" : ""}`}>
          <div className="nav-links">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <NavLink to="/login" className="nav-login-link">
              <LogIn size={16} />
              Login
            </NavLink>

            <NavLink to="/donate" className="nav-donate-link">
              Donate Now
              <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>

        <div className="nav-toolbar">
          <ThemeToggle />

          <button
            type="button"
            className="nav-menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      <button
        type="button"
        className={`nav-overlay ${menuOpen ? "is-open" : ""}`}
        aria-label="Close navigation"
        onClick={() => setMenuOpen(false)}
      />
    </header>
  );
}
