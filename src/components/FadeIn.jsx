import React from "react";
import { Motion, spring } from "react-motion";

const FadeIn = ({ children }) => {
  return (
    <Motion
      defaultStyle={{ opacity: 0, translateY: 50 }}
      style={{
        opacity: spring(1, { stiffness: 60, damping: 12 }),
        translateY: spring(0, { stiffness: 60, damping: 12 }),
      }}
    >
      {(style) => (
        <div
          style={{
            opacity: style.opacity,
            transform: `translateY(${style.translateY}px)`,
          }}
        >
          {children}
        </div>
      )}
    </Motion>
  );
};

export default FadeIn;
