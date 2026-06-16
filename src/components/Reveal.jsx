import { useEffect, useRef, useState } from "react";
import style from "../styles/Reveal.module.css";

/**
 * Revela una sección cuando entra en el viewport.
 *
 * - Usa IntersectionObserver (no listeners de scroll) y solo anima
 *   opacity/transform → corre en la GPU, sin reflows.
 * - `variant`: dirección de entrada ("up" | "left" | "right" | "zoom").
 * - `triggerOnly`: el wrapper no se anima a sí mismo; solo expone el
 *   atributo data-revealed para que las cards internas escalonen su
 *   animación vía CSS (sin agregar wrappers que rompan grids/flex).
 * - Respeta prefers-reduced-motion y degrada con seguridad si no hay
 *   soporte de IntersectionObserver.
 */
function Reveal({
  children,
  variant = "up",
  delay = 0,
  triggerOnly = false,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = triggerOnly
    ? `${style.trigger} ${className}`
    : `${style.reveal} ${style[variant] || ""} ${
        visible ? style.visible : ""
      } ${className}`;

  return (
    <div
      ref={ref}
      className={cls}
      data-revealed={visible ? "true" : "false"}
      style={delay && !triggerOnly ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default Reveal;
