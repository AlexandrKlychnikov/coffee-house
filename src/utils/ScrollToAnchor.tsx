import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = (): null => {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [key, hash]);

  return null;
};

export default ScrollToAnchor;
