import "./Footer.css";

const QUICK_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Trabajos", href: "#work" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const SERVICES_LINKS = [
  "Fotografía de Retrato",
  "Fotografía de Bodas",
  "Cobertura de Eventos",
  "Edición de Fotos",
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Pinterest", href: "#" },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__col">
            <h3 className="footer__brand">CD Photography</h3>
            <p className="footer__tagline">
              Capturando los momentos más hermosos de la vida con arte y
              precisión. Con base en Buenos Aires, disponibles en todo el mundo.
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
            <h4 className="footer__heading">Seguinos</h4>
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
          <p>&copy; {year} CD Photography. Todos los derechos reservados.</p>
          <p className="footer__credit">
            Desarrollado por{" "}
            <a
              href="https://argsoft.vercel.app/"
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
