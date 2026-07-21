import "./HowItWorks.css";
import {
  MessageCircle,
  CalendarCheck,
  ClipboardList,
  Camera,
  Sparkles,
  Download,
  type LucideIcon,
} from "lucide-react";

interface Step {
  number: number;
  title: string;
  icon: LucideIcon;
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Me escribís y coordinamos una videollamada o charla.",
    icon: MessageCircle,
  },
  {
    number: 2,
    title: "Definimos la fecha y reservás.",
    icon: CalendarCheck,
  },
  {
    number: 3,
    title: "Planificamos juntos la sesión o cobertura.",
    icon: ClipboardList,
  },
  {
    number: 4,
    title: "Realizamos las fotos.",
    icon: Camera,
  },
  {
    number: 5,
    title: "Edito cuidadosamente el material.",
    icon: Sparkles,
  },
  {
    number: 6,
    title: "Recibís tu galería lista para descargar.",
    icon: Download,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="how-it-works__inner">
        <p className="how-it-works__eyebrow">El Proceso</p>
        <h2 className="how-it-works__title">¿Cómo es la experiencia?</h2>

        <div className="how-it-works__grid">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="how-it-works__step">
                <div className="how-it-works__step-header">
                  <Icon className="how-it-works__step-icon" size={24} />
                </div>
                <p className="how-it-works__step-title">{step.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
