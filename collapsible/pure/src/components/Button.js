import React, { useState, useEffect, useRef } from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

function useHover() {
  const ref = useRef();

  // Hover state management
  const [hovered, setHovered] = useState(false);

  // Event handlers
  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  // Simple effect, just bind and unbind the event handlers
  useEffect(
    () => {
      ref.current.addEventListener("mouseenter", enter);
      ref.current.addEventListener("mouseleave", leave);
      return () => {
        ref.current.removeEventListener("mouseenter", enter);
        ref.current.removeEventListener("mouseleave", leave);
      };
    },
    [ref]
  );

  return [ref, hovered];
}
function Button() {
  const [ref, hovered] = useHover();
  const icon = <FontAwesomeIcon icon={faAngleUp} size="lg" />;

  const [clicked, setClicked] = useState(false);
  return (
    <div className="Button" ref={ref} onClick={() => setClicked(!clicked)}>
      <div className={hovered ? "Rotate" : ""}>{icon}</div>
    </div>
  );
}

export default Button;
