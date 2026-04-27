import { useState, useEffect } from "react";
import "./Loading.css";

export const Loading = () => {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setHidden(true);
      return;
    }

    const handleLoad = () => setHidden(true);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (removed) return null;

  return (
    <div
      className={`loading${hidden ? " loading--hidden" : ""}`}
      onTransitionEnd={() => setRemoved(true)}
    >
      <span className="loading__brand">CD Photography</span>
      <div className="loading__spinner" />
    </div>
  );
};
