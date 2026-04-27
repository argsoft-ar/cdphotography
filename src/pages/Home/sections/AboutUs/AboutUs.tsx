import "./AboutUs.css";
import { ImageContainer } from "../../../../components/ImageContainer/ImageContainer";

const STATS = [
  { value: "500+", label: "Sesiones" },
  { value: "10", label: "Años de Experiencia" },
  { value: "200+", label: "Clientes Felices" },
];

export const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__image">
          <ImageContainer
            publicId="MARCA_PERSONAL_5_rkm57e"
            alt="CD Photography — el fotógrafo en acción"
            height="100%"
          />
        </div>

        <div className="about__content">
          <p className="about__eyebrow">Quiénes Somos</p>
          <h2 className="about__title">Sobre CD Photography</h2>

          <p className="about__text">
            Con más de una década detrás del lente, CD Photography ha construido
            una reputación por crear imágenes que hablan más que las palabras.
            Nuestro enfoque está basado en la autenticidad — creemos que las
            fotografías más poderosas son las que capturan emociones genuinas y
            belleza espontánea.
          </p>
          <p className="about__text">
            Con base en Buenos Aires, trabajamos con clientes de todo el mundo —
            desde sesiones de retrato íntimas en nuestro estudio hasta bodas
            destino en costas lejanas. Cada proyecto recibe el mismo nivel de
            dedicación, oficio y visión creativa.
          </p>
          <p className="about__text">
            Nuestro trabajo ha sido destacado en numerosas publicaciones, y
            continuamos ampliando los límites de la narrativa visual con cada
            disparo del obturador.
          </p>

          <div className="about__stats">
            {STATS.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
