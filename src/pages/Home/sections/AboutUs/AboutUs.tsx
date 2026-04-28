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
          <p className="about__eyebrow">Sobre mí</p>
          <h2 className="about__title">Sobre Dai Cabello Photography</h2>

          <p className="about__text">
            Soy Dai Cabello, fotógrafa en Lomas de Zamora, especializada en
            capturar momentos reales con una mirada cálida y natural.
          </p>
          <p className="about__text">
            Trabajo principalmente en eventos y sesiones dentro de Gran Buenos
            Aires, acompañando a cada persona en etapas y momentos importantes
            de su vida.
          </p>
          <p className="about__text">
            Para mí, cada evento y cada sesión tienen el mismo valor: todos los
            recuerdos merecen ser registrados con dedicación, sensibilidad,
            empatía y una mirada atenta a los detalles.
          </p>
          <p className="about__text">
            A lo largo de mi camino, tuve la oportunidad de realizar coberturas
            y colaboraciones en espacios como Luzu TV, sumando experiencias que
            enriquecen mi forma de contar cada historia.
          </p>
          <p className="about__text">
            Sigo trabajando en cada proyecto con el mismo compromiso: crear
            imágenes que te hagan volver a ese momento, una y otra vez.
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
