import "./Services.css";
import { Card } from "../../../../components/Card/Card";

const SERVICES = [
  {
    title: "Eventos",
    items: [
      "Fotografía de eventos pensada para registrar lo más importante: emociones, risas y esos momentos que pasan rápido pero con las fotos, te quedan para siempre.",
      "Cobertura flexible según el tipo de evento, con una selección cuidada de imágenes editadas para que tengas un recuerdo auténtico de cada celebración.",
    ],
  },
  {
    title: "Sesiones",
    items: [
      "Sesiones pensadas para disfrutar el momento y transformarlo en recuerdo: 15, parejas, familias, peques y maternidad en exteriores. Se trabaja con luz natural y un enfoque relajado, buscando imágenes espontáneas, reales y llenas de emoción.",
    ],
  },
  {
    title: "Sesiones en estudio",
    items: [
      "Un espacio cuidado donde cada detalle está pensado y controlado: iluminación, comodidad y un entorno ideal para lograr imágenes prolijas y atemporales.Incluye sesiones infantiles, maternidad y propuestas personalizadas según cada etapa",
    ],
  },
];

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <p className="services__eyebrow">Lo Que Ofrecemos</p>
        <h2 className="services__title">Servicios</h2>
        <p className="services__subtitle">
          Servicios fotográficos pensados para acompañarte en cada momento
          importante, desde celebraciones únicas hasta proyectos personales y
          profesionales.
          <br />
          Cada propuesta se adapta a lo que necesitás, manteniendo siempre una
          mirada estética y cuidada.
        </p>

        <div className="services__grid">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="services__card"
              title={service.title}
              items={service.items}
              showButton
            />
          ))}
        </div>
      </div>
    </section>
  );
};
