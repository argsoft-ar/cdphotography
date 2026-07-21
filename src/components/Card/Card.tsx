import React from "react";
import "./Card.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { Button } from "../Button/Button";
import { Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title?: string;
  description?: string;
  items?: string[];
  image?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
  showButton?: boolean;
  textButton?: string;
  buttonLabel?: string;
  loading?: boolean;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "pricing";
  featured?: boolean;
}

export const Card = ({
  title,
  description,
  items,
  image,
  icon: Icon,
  children,
  className = "",
  showButton,
  textButton,
  buttonLabel,
  loading,
  href,
  onClick,
  variant = "default",
  featured = false,
}: CardProps) => {
  const variantClass = variant !== "default" ? `card--${variant}` : "";
  const featuredClass = featured ? "card--featured" : "";
  const cardClasses = `card ${variantClass} ${featuredClass} ${className}`
    .trim()
    .replace(/\s+/g, " ");

  if (loading) {
    return (
      <div className={cardClasses}>
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

  const renderItems = () => {
    if (!items || items.length === 0) return null;

    if (variant === "pricing") {
      return (
        <ul className="card__checklist">
          {items.map((item) => (
            <li key={item} className="card__checklist-item">
              <Check className="card__checklist-icon" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    return items.map((item) => (
      <p key={item} className="card__description">
        {item}
      </p>
    ));
  };

  return (
    <div className={cardClasses}>
      {image && (
        <div className="card__image">
          <ImageContainer src={image} alt={title ?? ""} height="200px" />
        </div>
      )}
      <div className="card__body">
        <div className="header__card">
          {Icon && (
            <div className="card__icon">
              <Icon size={32} />
            </div>
          )}
          {title && <h3 className="card__title">{title}</h3>}
        </div>
        {renderItems()}
        {!items && description && (
          <p className="card__description">{description}</p>
        )}
        {showButton && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              if (onClick) onClick();
              else if (href) {
                const element = document.querySelector(href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = href;
                }
              }
            }}
          >
            {textButton ?? buttonLabel ?? "Ver Más"}
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};
