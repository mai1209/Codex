import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../styles/Diagrama.module.css";

function Diagrama() {
  const { t } = useTranslation();
  const rawTestimonials = t("diagrama.testimonials", { returnObjects: true });
  const rawServices = t("diagrama.services", { returnObjects: true });
  const testimonials =
    Array.isArray(rawTestimonials) && rawTestimonials.length
      ? rawTestimonials
      : Array.isArray(rawServices)
        ? rawServices.map((service) => ({
            label: service?.title,
            name: service?.title,
            role: "",
            quote: service?.description,
          }))
        : [];
  const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0);
  const titleText = t("diagramaM.title");
  const repeatedText = Array(6).fill(titleText);

  const fallbackQuote = t("diagramaM.description");
  const fallbackName = t("diagramaM.author");
  const fallbackRole = t("diagramaM.role");
  const selectedTestimonial =
    testimonials[selectedTestimonialIndex] ?? testimonials[0] ?? null;
  const quoteToDisplay = selectedTestimonial?.quote ?? fallbackQuote;
  const nameToDisplay = selectedTestimonial?.name ?? fallbackName;
  const roleToDisplay = selectedTestimonial?.role ?? fallbackRole;
  const imageToDisplay = selectedTestimonial?.image ?? "/imgMaiOficial.webp";
  const imageAltToDisplay =
    selectedTestimonial?.imageAlt ?? selectedTestimonial?.name ?? "testimonial";

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.marquee}>
          {repeatedText.map((text, i) => (
            <span key={i} className={style.title}>
              {text}
            </span>
          ))}
        </div>
        <div className={style.marquee}>
          {repeatedText.map((text, i) => (
            <span key={`second-${i}`} className={style.title}>
              {text}
            </span>
          ))}
        </div>
      </div>

      <div className={style.content}>
        <div className={style.cardCompu}>
          <img className={style.imgCompu} src="./compu.png" alt="imgcompu" />
        </div>

        <div className={style.containerAllInfo}>
          <div className={style.containerInfoText}>
            <img
              className={style.comillas}
              src="./comillas.png"
              alt="comillas"
            />
            <p className={style.testimonialQuote}>{quoteToDisplay}</p>
            <div className={style.line}></div>
            <div className={style.infoTestimonio}>
              <img
                className={style.avatar}
                src={imageToDisplay}
                alt={imageAltToDisplay}
              />
              <div>
                <p className={style.testimonialAuthor}>{nameToDisplay}</p>
                <p className={style.testimonialRole}>{roleToDisplay}</p>
              </div>
              <img className={style.logo} src="./Total GRIS.png" alt="logo" />
            </div>
          </div>

          <div className={style.containerCard}>
            {testimonials.map((testimonial, index) => {
              const isActive = selectedTestimonialIndex === index;
              const label =
                testimonial?.label ??
                testimonial?.name ??
                testimonial?.title ??
                t("diagrama.title");
              return (
                <div
                  key={label ?? index}
                  className={`${style.card} ${
                    isActive ? style.cardActive : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onClick={() => setSelectedTestimonialIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedTestimonialIndex(index);
                    }
                  }}
                >
                  <p className={style.cardNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className={style.cardName}>{label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagrama;
