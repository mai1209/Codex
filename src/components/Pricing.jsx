import { useState } from "react";
import style from "../styles/Pricing.module.css";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function Pricing() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("web");
  const { t } = useTranslation();

  const webPlans = [
    {
      id: 1,
      title: t("pricing.web.title1"),
      price: t("pricing.web.price1"),
      description: t("pricing.web.desc1"),
      features: t("pricing.web.features1", { returnObjects: true }),
    },
    {
      id: 2,
      price: t("pricing.web.price2"),
      description: t("pricing.web.desc2"),
      features: t("pricing.web.features2", { returnObjects: true }),
    },
    {
      id: 3,
      price: t("pricing.web.price3"),
      description: t("pricing.web.desc3"),
      features: t("pricing.web.features3", { returnObjects: true }),
    },
    {
      id: 4,
      price: t("pricing.web.price4"),
      description: t("pricing.web.desc4"),
      features: t("pricing.web.features4", { returnObjects: true }),
    },
  ];

  const mobilePlans = [
    {
      id: 1,
      price: t("pricing.mobile.price1"),
      description: t("pricing.mobile.desc1"),
      features: t("pricing.mobile.features1", { returnObjects: true }),
    },
  ];

  const plans = activeTab === "web" ? webPlans : mobilePlans;

  return (
    <div className={style.container}>
      <div className={style.btnHome}>
        <button onClick={() => navigate('/')}>{t("pricing.back")}</button>
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
        transform: activeTab === "web" ? "translateX(0%)" : "translateX(100%)",
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
          <div key={plan.id} className={`${style.card} ${plan.title ? style.featured : ""}`}>
            {plan.title && <h2 className={style.titleCard}>{plan.title}</h2>}
            <p className={style.price}>{plan.price}</p>
            <p className={style.description}>{plan.description}</p>
            <p className={style.include}>{t("pricing.includes")}</p>
            <div>
              {plan.features.map((f, i) => (
                <div key={i} className={style.containerInclude}>
                  <img src={plan.title ? "/logoblancocompleto.png" : "/logo.webp"} alt="feature" />
                  <p>{f}</p>
                </div>
              ))}
            </div>
            <a className={style.a} href="https://wa.me/5493425543308">
              <button className={`${style.button} ${plan.title ? style.buttonF : ""}`}>
                <p>{t("pricing.button")}</p>
                <img src="/WhatsAppBlanco.webp" alt="wp" />
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
