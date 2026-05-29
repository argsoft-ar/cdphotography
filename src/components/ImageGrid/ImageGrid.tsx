import React, { useState } from "react";
import "./ImageGrid.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { Lightbox } from "../Lightbox/Lightbox";

interface ImageGridItem {
  src?: string;
  publicId?: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageGridItem[];
  columns?: number;
  gap?: string;
  imageHeight?: number;
  className?: string;
}

export const ImageGrid = ({
  images,
  columns = 3,
  gap = "var(--spacing-md)",
  imageHeight = 500,
  className = "",
}: ImageGridProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  const handleNext = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div
      className={`image-grid ${className}`.trim()}
      style={
        {
          "--grid-columns": columns,
          "--grid-gap": gap,
        } as React.CSSProperties
      }
    >
      {images.map((image, index) => (
        <div
          className="image-grid__item"
          key={index}
          style={{ "--item-index": index } as React.CSSProperties}
          role="button"
          tabIndex={0}
          onClick={() => handleOpen(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpen(index);
            }
          }}
        >
          <ImageContainer
            src={image.src}
            publicId={image.publicId}
            alt={image.alt}
            height="300px"
            imageHeight={imageHeight}
          />
        </div>
      ))}
      {selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};
