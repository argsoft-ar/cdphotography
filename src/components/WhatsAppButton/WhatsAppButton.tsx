import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

interface WhatsAppButtonProps {
  /** WhatsApp phone number in international format (e.g. "5491112345678") */
  phoneNumber?: string;
  /** Additional CSS class */
  className?: string;
}

export const WhatsAppButton = ({
  phoneNumber = "5491123987786",
  className = "",
}: WhatsAppButtonProps) => {
  const href = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`.trim()}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="whatsapp-button__icon" />
    </a>
  );
};
