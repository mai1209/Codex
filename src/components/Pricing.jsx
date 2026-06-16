import { useState } from "react";
import style from "../styles/Pricing.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Pricing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("web");
  const [infoKey, setInfoKey] = useState(null);
  const { t } = useTranslation();

  const webPlans = [
    {
      id: 1,
      title: t("pricing.web.title1"),
      price: t("pricing.web.price1"),
      description: t("pricing.web.desc1"),
      features: t("pricing.web.features1", { returnObjects: true }),
      descriptionTwo: t("pricing.web.descT1"),
      infoKey: "landing",
    },
    {
      id: 2,
      price: t("pricing.web.price2"),
      description: t("pricing.web.desc2"),
      features: t("pricing.web.features2", { returnObjects: true }),
      descriptionTwo: t("pricing.web.descT2"),
      infoKey: "corporate",
    },
    {
      id: 3,
      price: t("pricing.web.price3"),
      description: t("pricing.web.desc3"),
      features: t("pricing.web.features3", { returnObjects: true }),
      descriptionTwo: t("pricing.web.descT3"),
      infoKey: "ecommerce",
    },
    {
      id: 4,
      price: t("pricing.web.price4"),
      description: t("pricing.web.desc4"),
      features: t("pricing.web.features4", { returnObjects: true }),
      descriptionTwo: t("pricing.web.descT4"),
      infoKey: "custom",
    },
  ];

  const mobilePlans = [
    {
      id: 1,
      price: t("pricing.mobile.price1"),
      description: t("pricing.mobile.desc1"),
      features: t("pricing.mobile.features1", { returnObjects: true }),
      descriptionTwo: t("pricing.web.descT4"),
      infoKey: "app",
    },
  ];

  const plans = activeTab === "web" ? webPlans : mobilePlans;

  // Datos del plan cuya info está abierta en el modal
  const info = infoKey
    ? {
        title: t(`pricing.info.${infoKey}.title`),
        question: t(`pricing.info.${infoKey}.question`),
        paragraphs: t(`pricing.info.${infoKey}.paragraphs`, { returnObjects: true }),
        ideal: t(`pricing.info.${infoKey}.ideal`, { returnObjects: true }),
        financingIntro: t(`pricing.info.${infoKey}.financingIntro`),
        installments: t(`pricing.info.${infoKey}.installments`, { returnObjects: true }),
        closing: t(`pricing.info.${infoKey}.closing`),
      }
    : null;

  return (
    <div className={style.container}>
      <div className={style.btnHome}>
        <button onClick={() => navigate("/")}>{t("pricing.back")}</button>
      </div>

      <div>
        <h1 className={style.title}>{t("pricing.title")}</h1>
        <p className={style.subtitle}>{t("pricing.subtitle")}</p>
      </div>

      <div className={style.containerBtn}>
        <div className={style.btns}>
          <div
            className={style["switch-bg"]}
            style={{
              transform:
                activeTab === "web" ? "translateX(0%)" : "translateX(100%)",
            }}
          ></div>

          <button
            onClick={() => setActiveTab("web")}
            className={`${style.btn} ${activeTab === "web" ? style.active : ""}`}
          >
            {t("pricing.websites")}
          </button>

          <button
            onClick={() => setActiveTab("mobile")}
            className={`${style.btn} ${activeTab === "mobile" ? style.active : ""}`}
          >
            {t("pricing.mobileApp")}
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className={style.cards}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${style.card} ${plan.title ? style.featured : ""}`}
          >
            {plan.title && <h2 className={style.titleCard}>{plan.title}</h2>}
            <p className={style.price}>{plan.price}</p>
            <p className={style.description}>{plan.description}</p>
            <p className={style.include}>{t("pricing.includes")}</p>
            <div>
              {plan.features.map((f, i) => (
                <div key={i} className={style.containerInclude}>
                  <img
                    src={plan.title ? "/logoblancocompleto.png" : "/logo.webp"}
                    alt="feature"
                  />
                  <p>{f}</p>
                </div>
              ))}
            </div>
            <a
              className={style.a}
              href="https://wa.me/5493425543308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`${style.button} ${plan.title ? style.buttonF : ""}`}
              >
                <p>{t("pricing.button")}</p>
                <img src="/WhatsAppBlanco.webp" alt="wp" />
              </button>
            </a>

            {plan.infoKey && (
              <button
                type="button"
                className={`${style.moreInfo} ${plan.title ? style.moreInfoF : ""}`}
                onClick={() => setInfoKey(plan.infoKey)}
              >
                {t("pricing.moreInfo")}
              </button>
            )}

            <p className={style.descriptionTwo}>{plan.descriptionTwo}</p>
          </div>
        ))}
      </div>

      {/* Modal de información */}
      {info && (
        <div className={style.infoOverlay} onClick={() => setInfoKey(null)}>
          <div
            className={style.infoModal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className={style.infoClose}
              onClick={() => setInfoKey(null)}
              aria-label="Cerrar"
            >
              ×
            </button>

            <div className={style.infoContent}>
              <p className={style.infoTitle}>{info.title}</p>
              <h3 className={style.infoQuestion}>{info.question}</h3>

              {info.paragraphs.map((p, i) => (
                <p key={i} className={style.infoText}>
                  {p}
                </p>
              ))}

              <h4 className={style.infoSubtitle}>{t("pricing.infoIdealTitle")}</h4>
              <ul className={style.infoList}>
                {info.ideal.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h4 className={style.infoSubtitle}>
                {t("pricing.infoFinancingTitle")}
              </h4>
              <p className={style.infoText}>{info.financingIntro}</p>
              <ul className={style.infoInstallments}>
                {info.installments.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <p className={style.infoClosing}>{info.closing}</p>

              <h4 className={style.infoContactTitle}>
                {t("pricing.infoContactTitle")}
              </h4>
              <a
                className={style.a}
                href="https://wa.me/5493425543308"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className={style.infoContactButton}>
                  {t("pricing.infoContactButton")}
                </button>
              </a>

              <p className={style.infoTag}>{t("pricing.infoTag")}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pricing;
