import { useState, useEffect } from "react";
import logo from "../../../public/logo.png";
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
      <img src={logo} alt="CD Photography Logo" className="loading__logo" />
      <div className="loading__spinner" />
    </div>
  );
};
