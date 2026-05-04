import { useState } from "react";
import "./ImageGrid.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { ImagePopup } from "../ImagePopup/ImagePopup";

interface ImageGridItem {
  src?: string;
  publicId?: string;
  alt: string;
}

interface ImageGridProps {
  images: ImageGridItem[];
  columns?: number;
  gap?: string;
  className?: string;
}

export const ImageGrid = ({
  images,
  columns = 3,
  gap = "var(--spacing-md)",
  className = "",
}: ImageGridProps) => {
  const [selectedImage, setSelectedImage] = useState<ImageGridItem | null>(
    null,
  );

  return (
    <>
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
          >
            <ImageContainer
              src={image.src}
              publicId={image.publicId}
              alt={image.alt}
              height="300px"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImagePopup
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};
