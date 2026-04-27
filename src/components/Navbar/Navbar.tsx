import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Trabajos", href: "#work" },
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          CD Photography
        </a>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
