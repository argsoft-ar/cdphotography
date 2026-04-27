import "./ImageGrid.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";

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
        >
          <ImageContainer
            src={image.src}
            publicId={image.publicId}
            alt={image.alt}
            height="300px"
          />
        </div>
      ))}
    </div>
  );
};
