import { useState } from "react";
import style from "../styles/Pricing.module.css";
import { useNavigate } from 'react-router-dom';

const webPlans = [
    {
        id: 1,
        title: "Mas popular",
        price: "$680 - $1.2K USD",
        description: "Basic website (static)",
        features: ["Templates", "Responsive", "Basic SEO", "Some animations"],
    },
    {
        id: 2,
        price: "$1000 - $2200",
        description: "Corporate website",
        features: ["Semi-custom desing", "Forms", "Blog", "Advanced SEO"],
    },
    {
        id: 3,
        price: "$2800 - $5000",
        description: "E-commerce website",
        features: ["Shop system", "Payments", "SEO Pro", "Animations"],
    },
    {
        id: 4,
        price: "$2720 - $13600",
        description: "Custom website",
        features: ["Full customization", "Security", "Integrations", "Animations", "Multilingual", "SEO Pro"],
    },
];

const mobilePlans = [
    {
        id: 1,
        price: "$7000 - $20000 +",
        description: "Custom mobile app (Android & iOS)",
        features: ["Tailored desing", "Advanced integrations", "Scalability", "Some animations", "Security", "SEO Pro", "And more..."],
    },
];

function Pricing() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("web");

    const plans = activeTab === "web" ? webPlans : mobilePlans;

    return (
        <div className={style.container} >
            <div className={style.btnHome}>
                <button onClick={() => navigate('/')}>Volver</button>
            </div>
            <div>
                <h1 className={style.title}>Pricing</h1>
                <p className={style.subtitle}>
                    Conoce nuestros precios y comienza a construir la mejora que impulsará tu negocio/proyecto a la era digital
                </p>
            </div>

            {/* Tabs */}
            <div className={style.containerBtn}>
                <div className={style.btns}>
                    <button
                        onClick={() => setActiveTab("web")}
                        className={`${style.btn} ${activeTab === "web" ? style.active : ""}`}
                    >
                        Websites
                    </button>
                    <button
                        onClick={() => setActiveTab("mobile")}
                        className={`${style.btn} ${activeTab === "mobile" ? style.active : ""}`}
                    >
                        Mobile App
                    </button>
                </div>
            </div>

            {/* Cards dinámicas */}
            <div className={style.cards}>
                {plans.map((plan) => (
                    <div key={plan.id} className={`${style.card} ${plan.title ? style.featured : ""}`}>
                        {plan.title && <h2 className={style.titleCard}>{plan.title}</h2>}
                        <p className={style.price}>{plan.price}</p>
                        <p className={style.description}>{plan.description}</p>
                        <p className={style.include}>Includes</p>
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
                                <p>Let's build IT</p>
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
