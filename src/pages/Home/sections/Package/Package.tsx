import { Card } from "../../../../components/Card/Card";
import "./Package.css";

const PACKAGES = [
  {
    title: "Pack Básico",
    featured: true,
    items: [
      "Cobertura fotográfica del evento",
      "Edición de fotos profesional en alta calidad",
      "Entrega digital por Google Drive",
    ],
  },
  {
    title: "Pack Estándar",
    featured: true,
    items: [
      "Cobertura fotográfica del evento",
      "Video cronológico",
      "Sesión de fotos",
      "Edición de fotos profesional en alta calidad",
      "Entrega digital por Google Drive",
      "Entrega final en pendrive",
    ],
  },
  {
    title: "Pack Completo",
    featured: true,
    items: [
      "Cobertura fotográfica + cobertura en video (con colega)",
      "Sesión de fotos + Video backstage",
      "Fotolibro o libro de firmas",
      "Fotolienzo",
      "Edición de fotos profesional en alta calidad",
      "Entrega digital por Google Drive",
      "Entrega final en pendrive",
      "Extras opcionales",
    ],
  },
];

export const Package = () => {
  return (
    <section id="packages" className="packages">
      <div className="packages__inner">
        <p className="packages__eyebrow">Packs Disponibles</p>
        <h2 className="packages__title">Elegí tu Pack</h2>
        <p className="packages__subtitle">
          Cada pack está pensado para adaptarse a lo que necesitás. Consultame y
          armamos juntos la mejor opción para vos.
        </p>

        <div className="packages__grid">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.title}
              className="packages__card"
              variant="pricing"
              title={pkg.title}
              items={pkg.items}
              featured={pkg.featured}
              showButton
              textButton="Consultame"
              href="#contact"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
