import { useEffect } from "react";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import "./ImagePopup.css";

interface ImagePopupProps {
  image: { src?: string; publicId?: string; alt: string };
  onClose: () => void;
}

export const ImagePopup = ({ image, onClose }: ImagePopupProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="image-popup" onClick={onClose}>
      <button className="image-popup__close" onClick={onClose} aria-label="Cerrar imagen">
        ✕
      </button>
      <div 
        className="image-popup__content" 
        onClick={(e) => e.stopPropagation()}
      >
        <ImageContainer
          src={image.src}
          publicId={image.publicId}
          alt={image.alt}
          height="90vh"
          imageWidth={1600}
          className="image-popup__img-wrapper"
          priority={true}
        />
      </div>
    </div>
  );
};
