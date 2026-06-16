import { useEffect, useRef, useState } from "react";
import { useStore } from "@nanostores/react";
import { languageStore } from "../../stores/language";
import teamPhoto from "../../assets/hero2.jpeg";
import "./SobreNosotros.css";

const IconStar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconHeart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const features = [
  { icon: <IconStar />,   es: "Equipo joven con energía y dedicación",           en: "Young team with energy and dedication"   },
  { icon: <IconCheck />,  es: "Atención personalizada en cada servicio",         en: "Personalized attention on every job"     },
  { icon: <IconClock />,  es: "Puntuales y comprometidos con tu tiempo",         en: "Punctual and respectful of your time"    },
  { icon: <IconHeart />,  es: "Nos importa tu espacio como si fuera el nuestro", en: "We care for your space like it's our own"},
  { icon: <IconShield />, es: "Trabajamos con honestidad y transparencia",       en: "We work with honesty and transparency"   },
];

const stats = [
  { value: "100%", es: "Compromiso total",    en: "Total commitment"  },
  { value: "A+",   es: "Actitud de servicio", en: "Service attitude"  },
  { value: "0",    es: "Quejas registradas",  en: "Complaints filed"  },
  { value: "∞",    es: "Ganas de crecer",     en: "Drive to grow"     },
];

const t = {
  es: {
    badge: "Sobre nosotros",
    title: <>Nuevos, pero con todo<br />el <em>compromiso</em> para<br />destacar.</>,
    desc: "Diaz Cleaning LLC es una empresa nueva, y eso nos impulsa. Llegamos con energía, con hambre de demostrar lo que somos capaces de hacer y con un compromiso real hacia cada cliente. La confianza se gana con trabajo y resultados — eso es exactamente lo que ofrecemos.",
    commitment: "Nivel de compromiso",
    cta: "Solicitar servicio",
    call: "¿Preguntas? Llámanos",
  },
  en: {
    badge: "About us",
    title: <>New to the game,<br />but here to <em>make</em><br />a mark.</>,
    desc: "Diaz Cleaning LLC is a new company — and that's exactly what drives us. We show up with energy, hunger to prove ourselves, and a real commitment to every client. Trust is earned through hard work and results, and that's exactly what we deliver.",
    commitment: "Commitment level",
    cta: "Request a service",
    call: "Questions? Call us",
  }
};

const AboutUs = () => {
  const language = useStore(languageStore);
  const lang = language === "en" ? "en" : "es";
  const copy = t[lang];
  const [barAnimated, setBarAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__inner">

        {/* LEFT — imagen */}
        <div className="about__media">
          <div className="about__img-wrap">
            <img
              src={teamPhoto.src}
              alt="Diaz Cleaning team"
              className="about__img"
            />
            <div className="about__img-label">
              <span className="about__img-label-value">A+</span>
              <span className="about__img-label-text">BBB Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT — contenido */}
        <div className="about__content">
          <span className="about__badge">{copy.badge}</span>

          <h2 className="about__title">{copy.title}</h2>

          <p className="about__desc">{copy.desc}</p>

          {/* Features */}
          <ul className="about__features">
            {features.map((f, i) => (
              <li key={i} className="about__feature" style={{ animationDelay: `${i * 0.07}s` }}>
                <span className="about__feature-icon">{f.icon}</span>
                <span className="about__feature-text">{f[lang]}</span>
              </li>
            ))}
          </ul>

          {/* Bar */}
          <div className="about__bar">
            <div className="about__bar-header">
              <span>{copy.commitment}</span>
              <span className="about__bar-pct">95%</span>
            </div>
            <div className="about__bar-track">
              <div className={`about__bar-fill${barAnimated ? " about__bar-fill--on" : ""}`} />
            </div>
          </div>

          {/* Stats */}
          <div className="about__stats">
            {stats.map((s, i) => (
              <div key={i} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s[lang]}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about__actions">
            <a href="#contact" className="about__cta">
              <span>{copy.cta}</span>
              <IconArrow />
            </a>
            <div className="about__phone">
              <span className="about__phone-label">{copy.call}</span>
              <a href="tel:+14804794507" className="about__phone-number">(480) 479-4507</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;