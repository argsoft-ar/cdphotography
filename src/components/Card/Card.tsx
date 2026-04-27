import React from "react";
import "./Card.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { Button } from "../Button/Button";

interface CardProps {
  title?: string;
  description?: string;
  items?: string[];
  image?: string;
  children?: React.ReactNode;
  className?: string;
  showButton?: boolean;
  buttonLabel?: string;
  loading?: boolean;
}

export const Card = ({
  title,
  description,
  items,
  image,
  children,
  className = "",
  showButton,
  buttonLabel,
  loading,
}: CardProps) => {
  if (loading) {
    return (
      <div className={`card ${className}`.trim()}>
        {image && <div className="card__skeleton-image" />}
        <div className="card__body card__skeleton">
          <div className="card__skeleton-title" />
          <div className="card__skeleton-text" style={{ width: "80%" }} />
          <div className="card__skeleton-text" style={{ width: "70%" }} />
          <div className="card__skeleton-text" style={{ width: "75%" }} />
          <div className="card__skeleton-text" style={{ width: "60%" }} />
          <div className="card__skeleton-button" />
        </div>
      </div>
    );
  }

  return (
    <div className={`card ${className}`.trim()}>
      {image && (
        <div className="card__image">
          <ImageContainer src={image} alt={title ?? ""} height="200px" />
        </div>
      )}
      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {items
          ? items.map((item) => (
              <p key={item} className="card__description">
                {item}
              </p>
            ))
          : description && <p className="card__description">{description}</p>}
        {showButton && (
          <Button variant="outline" size="sm">
            {buttonLabel ?? "Ver Más"}
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};
