import "./Services.css";
import { Card } from "../../../../components/Card/Card";

const SERVICES = [
  {
    title: "Eventos",
    items: ["Quinces", "Bodas", "Cumpleaños", "Baby showers", "Bautismos"],
  },
  {
    title: "Sesiones",
    items: ["Sesiones de 15", "Sesiones de pareja", "Infantil", "Maternidad"],
  },
  {
    title: "Estudio",
    items: ["Fotoproducto", "Marca personal", "Sesiones en estudio"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <p className="services__eyebrow">Lo Que Ofrecemos</p>
        <h2 className="services__title">Servicios</h2>
        <p className="services__subtitle">
          Soluciones fotográficas integrales para cada ocasión y necesidad
          creativa.
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
