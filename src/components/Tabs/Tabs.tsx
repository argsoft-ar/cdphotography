import { useState, useEffect, useCallback, useRef } from "react";
import "./Tabs.css";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  autoRotate?: boolean;
  interval?: number;
  className?: string;
}

export const Tabs = ({
  tabs,
  autoRotate = false,
  interval = 5000,
  className = "",
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, interval);
  }, [tabs.length, interval, clearTimer]);

  useEffect(() => {
    if (autoRotate && !isPaused) {
      startTimer();
    }
    return clearTimer;
  }, [autoRotate, isPaused, startTimer, clearTimer]);

  const handleMouseEnter = () => {
    if (autoRotate) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (autoRotate) setIsPaused(false);
  };

  return (
    <div
      className={`tabs ${className}`.trim()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tabs__header" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === activeIndex}
            className={`tabs__trigger ${index === activeIndex ? "tabs__trigger--active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__content" role="tabpanel">
        <div className="tabs__panel" key={activeIndex}>
          {tabs[activeIndex].content}
        </div>
      </div>
    </div>
  );
};
