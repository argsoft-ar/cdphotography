import "./Footer.css";
import Logo from "../../../public/logo.png";

const QUICK_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Trabajos", href: "#work" },
  { label: "Servicios", href: "#services" },
  { label: "Sobre mí", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const SERVICES_LINKS = [
  "Fotografía de Retrato",
  "Fotografía de Bodas",
  "Cobertura de Eventos",
  "Fotografía de Producto",
  "Sesiones de fotos en estudio",
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/daicabellophotography",
    icon: (
      <svg
        className="footer__social-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@phdaicabello?_t=8laBG78NzVd&_r=1",
    icon: (
      <svg
        className="footer__social-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.19 8.19 0 0 0 4.79 1.52V7.07a4.85 4.85 0 0 1-1.02-.38z" />
      </svg>
    ),
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <img
              src={Logo}
              alt="CD Photography Logo"
              className="footer__logo"
            />
            <p className="footer__tagline">
              Capturando momentos que duran para siempre.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Enlaces Rápidos</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Servicios</h4>
            <ul className="footer__list">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="footer__link">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Seguime</h4>
            <ul className="footer__list">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} Dai Cabello Photography. Todos los derechos
            reservados.
          </p>
          <p className="footer__credit">
            Desarrollado por{" "}
            <a
              href="https://www.argsoft.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__credit-link"
            >
              Argsoft.ar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
