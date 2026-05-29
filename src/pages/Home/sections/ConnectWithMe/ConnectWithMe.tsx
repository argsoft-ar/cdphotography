import { useState } from "react";
import "./ConnectWithMe.css";
import { Button } from "../../../../components/Button/Button";
import { MapPin, Phone, Users } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/daicabellophotography",
    icon: (
      <svg
        className="connect__social-icon"
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
        className="connect__social-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9a8.19 8.19 0 0 0 4.79 1.52V7.07a4.85 4.85 0 0 1-1.02-.38z" />
      </svg>
    ),
  },
];

export const ConnectWithMe = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "¡Hola! Me gustaría hacer una consulta.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5491123987786";
    const text = `Hola, mi nombre es ${form.name}. Mi correo es ${form.email}.\n\n${form.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="connect">
      <div className="connect__inner">
        <div className="span__line"></div>

        <div className="connect__header">
          <p className="connect__eyebrow">Hola</p>
          <h2 className="connect__title">Conectemos</h2>
          <p className="connect__subtitle">
            ¿Tenés un proyecto en mente o simplemente querés charlar? Escribime
            y te responderé lo antes posible.
          </p>
        </div>

        <div className="connect__body">
          <form className="connect__form" onSubmit={handleSubmit}>
            <div className="connect__field">
              <label htmlFor="name" className="connect__label">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="connect__input"
                placeholder="Tu nombre completo"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="connect__field">
              <label htmlFor="email" className="connect__label">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="connect__input"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="connect__field">
              <label htmlFor="message" className="connect__label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="connect__input connect__textarea"
                placeholder="Contanos sobre tu proyecto..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button variant="primary" size="lg" type="submit">
              Enviar Mensaje
            </Button>
          </form>

          <div className="connect__info">
            <div className="connect__info-block">
              <h4 className="connect__info-heading">
                {" "}
                <Phone size={20} /> WhatsApp
              </h4>
              <p className="connect__info-text">+54 9 11 2398-7786</p>
            </div>
            <div className="connect__info-block">
              <h4 className="connect__info-heading">
                {" "}
                <MapPin size={20} /> Ubicación
              </h4>
              <p className="connect__info-text">Buenos Aires, Argentina</p>
            </div>
            <div className="connect__info-block">
              <h4 className="connect__info-heading">
                {" "}
                <Users size={20} /> Seguinos
              </h4>
              <div className="connect__socials">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="connect__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
