import React, { useEffect, useRef, useState } from "react";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { cld } from "../../lib/cloudinary";
import "./Lightbox.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: { src?: string; publicId?: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  const current = images[currentIndex];
  const useCloudinary = !!current?.publicId;

  const cldImage = useCloudinary
    ? cld
        .image(current.publicId!)
        .delivery(format("auto"))
        .delivery(quality("auto"))
        .resize(fill().gravity(autoGravity()).width(1400))
    : null;

  useEffect(() => {
    setLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();

      if (e.key === "Tab") {
        const focusableSelectors =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableElements = Array.from(
          backdropRef.current?.querySelectorAll<HTMLElement>(
            focusableSelectors,
          ) ?? [],
        );
        if (focusableElements.length === 0) return;
        const first = focusableElements[0];
        const last = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current?.alt ?? "Image lightbox"}
    >
      <div
        className="lightbox__backdrop"
        ref={backdropRef}
        onClick={handleBackdropClick}
      >
        <button
          className="lightbox__close"
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="lightbox__content">
          {!loaded && (
            <div className="lightbox__spinner" aria-label="Loading image" />
          )}
          {cldImage ? (
            <AdvancedImage
              cldImg={cldImage}
              alt={current.alt}
              className="lightbox__img"
              plugins={[lazyload()]}
              style={{ opacity: loaded ? 1 : 0 }}
              onLoad={() => setLoaded(true)}
            />
          ) : (
            current?.src && (
              <img
                src={current.src}
                alt={current.alt}
                className="lightbox__img"
                style={{ opacity: loaded ? 1 : 0 }}
                onLoad={() => setLoaded(true)}
              />
            )
          )}
        </div>

        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        <div className="lightbox__counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
