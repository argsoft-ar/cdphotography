import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ConnectWithMe.css";
import { Button } from "../../../../components/Button/Button";
import {
  MapPin,
  Phone,
  Users,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "¡Hola! Me gustaría hacer una consulta.",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "¡Hola! Me gustaría hacer una consulta.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setStatusMessage("¡Mensaje enviado con éxito! Te responderé pronto.");
      resetForm();

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setStatusMessage(
        "Hubo un error al enviar el mensaje. Por favor, intentá de nuevo.",
      );

      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  const isLoading = status === "loading";

  return (
    <section id="contact" className="connect">
      <div className="connect__inner">
        <div className="span__line"></div>

        <div className="connect__header">
          <p className="connect__eyebrow">Hola</p>
          <h2 className="connect__title">Conectemos</h2>
          <p className="connect__subtitle">
            Cada historia merece ser contada de una forma única. Si sentís que
            soy la fotógrafa indicada para acompañarte en ese momento
            importante, me encantaría que charlemos y conocer tu proyecto para
            crear imágenes que perduren en el tiempo.
          </p>
        </div>

        <div className="connect__body">
          <form ref={formRef} className="connect__form" onSubmit={handleSubmit}>
            {statusMessage && (
              <div className={`connect__status connect__status--${status}`}>
                {status === "success" && <CheckCircle size={20} />}
                {status === "error" && <XCircle size={20} />}
                <span>{statusMessage}</span>
              </div>
            )}

            <div className="connect__field">
              <label htmlFor="name" className="connect__label">
                Nombre
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                className="connect__input"
                placeholder="Tu nombre completo"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>

            <div className="connect__field">
              <label htmlFor="email" className="connect__label">
                Correo electrónico
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                className="connect__input"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                disabled={isLoading}
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
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                disabled={isLoading}
              />
            </div>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="connect__spinner" />
                  Enviando...
                </>
              ) : (
                "Enviar Mensaje"
              )}
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
                <Users size={20} /> Seguime en redes
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
            <div className="connect__info-block">
              <h4 className="connect__info-heading">
                {" "}
                <MapPin size={20} /> Ubicación
              </h4>
              <p className="connect__info-text">
                Lomas de Zamora, Buenos Aires, Argentina
              </p>
              <div className="iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19935.234051134375!2d-58.43733508664113!3d-34.750784255031895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd261abf8fb75%3A0xd3b4119f62723032!2sLomas%20de%20Zamora%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1784648649562!5m2!1ses-419!2sar"
                  title="Mapa de ubicación - Lomas de Zamora"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
