import React, { useState, useEffect } from "react";
import { AdvancedImage, lazyload, placeholder } from "@cloudinary/react";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { cld } from "../../lib/cloudinary";
import "./ImageContainer.css";

interface ImageContainerProps {
  src?: string;
  publicId?: string;
  alt: string;
  overlay?: boolean;
  overlayColor?: string;
  height?: string;
  imageWidth?: number;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  priority?: boolean;
}

export const ImageContainer = ({
  src,
  publicId,
  alt,
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 0.5)",
  height = "400px",
  imageWidth = 600,
  className = "",
  children,
  onClick,
  priority = false,
}: ImageContainerProps) => {
  const [loaded, setLoaded] = useState(false);
  const useCloudinary = !!publicId;

  const cldImage = useCloudinary
    ? cld
        .image(publicId)
        .delivery(format("auto"))
        .delivery(quality("auto"))
        .resize(auto().gravity(autoGravity()).width(imageWidth))
    : null;

  useEffect(() => {
    if (useCloudinary || !src) return;
    setLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    return () => {
      img.onload = null;
    };
  }, [src, useCloudinary]);

  return (
    <div
      className={`image-container ${className} ${onClick ? "clickable" : ""}`.trim()}
      style={{
        height,
        cursor: onClick ? "pointer" : "auto",
        ...(!useCloudinary && src ? { backgroundImage: `url(${src})` } : {}),
      }}
      role="img"
      aria-label={alt}
      onClick={onClick}
    >
      {!loaded && <div className="image-container__skeleton" />}
      {cldImage && (
        <AdvancedImage
          cldImg={cldImage}
          alt={alt}
          className="image-container__img"
          plugins={
            priority
              ? [placeholder({ mode: "blur" })]
              : [lazyload(), placeholder({ mode: "blur" })]
          }
          onLoad={() => setLoaded(true)}
        />
      )}
      {overlay && (
        <div
          className="image-container__overlay"
          style={{ backgroundColor: overlayColor }}
        />
      )}
      {children && <div className="image-container__content">{children}</div>}
    </div>
  );
};
