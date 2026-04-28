import "./Hero.css";
import { ImageContainer } from "../../../../components/ImageContainer/ImageContainer";
import { Button } from "../../../../components/Button/Button";

export const Hero = () => {
  return (
    <section id="home" className="hero">
      <ImageContainer
        publicId="FONDO_xwyqo5"
        alt="Fondo principal"
        overlay
        overlayColor="rgba(255, 255, 255, 0.70)"
        height="100vh"
        imageWidth={1920}
      >
        <div className="hero__content">
          <p className="hero__eyebrow">CD Photography</p>
          <h1 className="hero__title">
            Capturando momentos
            <br />
            que duran para siempre
          </h1>
          <p className="hero__subtitle">
            Fotos que te hacen volver a ese instante, una y otra vez.
            <br />
            Fotografía de eventos y sesiones con una mirada natural y cuidada.
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
