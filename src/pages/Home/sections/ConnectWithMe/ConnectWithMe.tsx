import { useState } from "react";
import "./ConnectWithMe.css";
import { Button } from "../../../../components/Button/Button";
import { BreadCrumb } from "../../../../components/BreadCrumb/BreadCrumb";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Pinterest", href: "#" },
];

export const ConnectWithMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="connect">
      <div className="connect__inner">
        <BreadCrumb
          items={[{ label: "Inicio", href: "#home" }, { label: "Contacto" }]}
          className="connect__breadcrumb"
        />

        <div className="connect__header">
          <p className="connect__eyebrow">Hola</p>
          <h2 className="connect__title">Conectemos</h2>
          <p className="connect__subtitle">
            ¿Tenés un proyecto en mente o simplemente querés charlar? Escribinos
            y te responderemos lo antes posible.
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
                placeholder="you@example.com"
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
              <h4 className="connect__info-heading">Correo electrónico</h4>
              <p className="connect__info-text">hello@cdphotography.com</p>
            </div>
            <div className="connect__info-block">
              <h4 className="connect__info-heading">Ubicación</h4>
              <p className="connect__info-text">Buenos Aires, Argentina</p>
            </div>
            <div className="connect__info-block">
              <h4 className="connect__info-heading">Seguinos</h4>
              <div className="connect__socials">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="connect__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
