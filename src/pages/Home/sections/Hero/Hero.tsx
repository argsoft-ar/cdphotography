import "./Hero.css";
import { ImageContainer } from "../../../../components/ImageContainer/ImageContainer";
import { Button } from "../../../../components/Button/Button";

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <ImageContainer
        publicId="hero_ffukxb"
        alt="Fondo principal — fotografía de paisaje dramática"
        overlay
        overlayColor="rgba(255, 255, 255, 0.70)"
        height="100vh"
        imageWidth={1920}
      >
        <div className="hero__content">
          <p className="hero__eyebrow">CD Photography</p>
          <h1 className="hero__title">
            Capturando Momentos
            <br />
            Que Duran Para Siempre
          </h1>
          <p className="hero__subtitle">
            Transformamos instantes fugaces en obras de arte atemporales.
            <br />
            Fotografía de retrato, bodas y eventos creada con intención.
          </p>
          <div className="hero__actions">
            <Button variant="primary" size="lg">
              <a href="#work">Ver Mis Trabajos</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="#contact">Contactanos</a>
            </Button>
          </div>
        </div>
      </ImageContainer>
    </section>
  );
};
