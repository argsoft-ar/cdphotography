import { useState, useEffect } from "react";
import "./Services.css";
import { Card } from "../../../../components/Card/Card";
import {
  Camera,
  Heart,
  Aperture,
  type LucideIcon,
  ArrowRight,
} from "lucide-react";

interface Service {
  title: string;
  items: string[];
  icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    title: "Eventos",
    icon: Camera,
    items: [
      "Fotografía de eventos pensada para registrar lo más importante: emociones, risas y esos momentos que pasan rápido pero con las fotos, te quedan para siempre.",
      "Cobertura flexible según el tipo de evento, con una selección cuidada de imágenes editadas para que tengas un recuerdo auténtico de cada celebración.",
    ],
  },
  {
    title: "Sesiones",
    icon: Heart,
    items: [
      "Sesiones pensadas para disfrutar el momento y transformarlo en recuerdo: 15, parejas, familias, peques y maternidad en exteriores. Se trabaja con luz natural y un enfoque relajado, buscando imágenes espontáneas, reales y llenas de emoción.",
    ],
  },
  {
    title: "Sesiones en estudio",
    icon: Aperture,
    items: [
      "Un espacio cuidado donde cada detalle está pensado para lograr imágenes prolijas y atemporales. Ideal para sesiones personales, infantiles y de maternidad, así como fotografía de marca personal y productos para emprendedores.",
    ],
  },
];

export const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="services" className="services">
      <div className="services__inner">
        <p className="services__eyebrow">Lo Que Ofrezco</p>
        <h2 className="services__title">Servicios</h2>
        <p className="services__subtitle">
          Servicios fotográficos pensados para acompañarte en cada momento
          importante, desde celebraciones únicas hasta proyectos personales y
          profesionales.
          <br />
          Cada propuesta se adapta a lo que necesitás, manteniendo siempre una
          mirada estética y cuidada.
        </p>

        {isMobile && (
          <div className="arrow__icon">
            <p className="arrow__text">Deslizá para ver mis servicios</p>
            <ArrowRight
              size={20}
              color="var(--color-primary)"
              className="arrow__icon-svg"
            />
          </div>
        )}

        <div className="services__grid">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="services__card"
              title={service.title}
              icon={service.icon}
              items={service.items}
              showButton
              textButton="Ver paquetes"
              href="#packages"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
