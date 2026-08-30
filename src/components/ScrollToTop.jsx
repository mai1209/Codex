import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de ruta, vuelve el scroll al inicio de la página.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" evita que el scroll suave global (scroll-behavior: smooth) lo cancele
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
