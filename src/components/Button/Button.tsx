import React from "react";
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
};
