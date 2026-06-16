import { useState } from "react";
import { useStore } from "@nanostores/react";
import { languageStore } from "../../stores/language";
import "./WhyUs.css";

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconStar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const IconCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconPlus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const IconMinus = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

const faqs = {
  es: [
    { icon: <IconClock />, q: "¿Por qué contratar un equipo profesional en lugar de hacerlo yo mismo?", a: "El tiempo que inviertes en limpiar podría dedicarse a lo que realmente importa. Nuestro equipo completa en dos horas lo que normalmente toma un día entero, con resultados que difícilmente se logran sin equipo y experiencia especializados." },
    { icon: <IconShield />, q: "¿Cómo garantizan la seguridad y confiabilidad del personal?", a: "Cada miembro de nuestro equipo pasa por un proceso de verificación de antecedentes y capacitación continua. Somos un negocio licenciado y asegurado en Phoenix, AZ. Tu tranquilidad no es opcional para nosotros." },
    { icon: <IconStar />, q: "¿Es realmente más económico contratar un servicio externo?", a: "Cuando gestionas limpieza internamente, los costos reales incluyen salarios, prestaciones, productos, equipo y tiempo de supervisión. Con nosotros pagas únicamente por el servicio entregado, sin compromisos adicionales." },
    { icon: <IconLeaf />, q: "¿Qué productos y equipo utilizan en cada servicio?", a: "Trabajamos con productos profesionales de alta eficiencia, seguros para familias y mascotas. Nuestro equipo industrial se mantiene en condiciones óptimas para garantizar resultados consistentes en cada visita." },
    { icon: <IconCalendar />, q: "¿Puedo programar el servicio en el horario que mejor me convenga?", a: "Sí. Nos adaptamos completamente a tu agenda, incluyendo mañanas, tardes y fines de semana. Contáctanos y coordinamos el horario que más te convenga sin complicaciones." },
    { icon: <IconCheck />, q: "¿Qué sucede si el resultado no cumple mis expectativas?", a: "Respaldamos cada trabajo con una garantía de satisfacción del 100%. Si algo no está a tu altura, regresamos a corregirlo sin costo adicional. Ese es nuestro compromiso con cada cliente." },
  ],
  en: [
    { icon: <IconClock />, q: "Why hire a professional cleaning team instead of doing it myself?", a: "The time you spend cleaning could be devoted to what truly matters. Our team completes in two hours what normally takes a full day, with results that are difficult to achieve without specialized equipment and experience." },
    { icon: <IconShield />, q: "How do you ensure the safety and reliability of your staff?", a: "Every team member goes through a background verification process and continuous training. We are a licensed and insured business in Phoenix, AZ. Your peace of mind is not optional for us." },
    { icon: <IconStar />, q: "Is hiring an external service actually more cost-effective?", a: "When you manage cleaning internally, real costs include salaries, benefits, supplies, equipment and supervision time. With us, you only pay for the service delivered, with no additional commitments." },
    { icon: <IconLeaf />, q: "What products and equipment do you use for each service?", a: "We work with high-efficiency professional products that are safe for families and pets. Our industrial equipment is maintained in optimal condition to ensure consistent results on every visit." },
    { icon: <IconCalendar />, q: "Can I schedule the service at the time that works best for me?", a: "Yes. We fully adapt to your schedule, including mornings, afternoons and weekends. Contact us and we will coordinate the most convenient time for you without any complications." },
    { icon: <IconCheck />, q: "What happens if the result doesn't meet my expectations?", a: "We back every job with a 100% satisfaction guarantee. If something isn't up to your standard, we return to correct it at no additional cost. That is our commitment to every client." },
  ]
};

const WhyUs = () => {
  const language = useStore(languageStore);
  const es = language === "es";
  const items = es ? faqs.es : faqs.en;
  const [open, setOpen] = useState(null);

  return (
    <section className="why" id="why-us">
      <div className="why__inner">

        {/* LEFT COLUMN */}
        <div className="why__left">
          <span className="why__badge">
            {es ? "Por qué elegirnos" : "Why choose us"}
          </span>
          <h2 className="why__title">
            {es
              ? <>¿Necesitas un equipo<br />de limpieza<br /><em>de confianza?</em></>
              : <>Do you need a<br />cleaning team<br /><em>you can trust?</em></>}
          </h2>
          <p className="why__desc">
            {es
              ? "Respondemos las preguntas que más importan antes de que tomes una decisión. Sin presión, sin letra pequeña."
              : "We answer the questions that matter most before you make a decision. No pressure, no fine print."}
          </p>
          <a href="#contact" className="why__cta">
            <span>{es ? "Solicitar servicio" : "Request service"}</span>
            <IconArrow />
          </a>

          <div className="why__numbers">
            <div className="why__number-item">
              <span className="why__number">100%</span>
              <span className="why__number-label">{es ? "Satisfacción garantizada" : "Satisfaction guaranteed"}</span>
            </div>
            <div className="why__number-item">
              <span className="why__number">4.8★</span>
              <span className="why__number-label">{es ? "Calificación promedio" : "Average rating"}</span>
            </div>
            <div className="why__number-item">
              <span className="why__number">3</span>
              <span className="why__number-label">{es ? "Tipos de servicio" : "Service types"}</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — FAQ */}
        <div className="why__right">
          <div className="why__faq">
            {items.map((item, i) => (
              <div
                key={i}
                className={`why__faq-item${open === i ? " why__faq-item--open" : ""}`}
              >
                <button
                  className="why__faq-trigger"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="why__faq-icon">{item.icon}</span>
                  <span className="why__faq-q">{item.q}</span>
                  <span className="why__faq-toggle">
                    {open === i ? <IconMinus /> : <IconPlus />}
                  </span>
                </button>
                <div className="why__faq-body">
                  <p className="why__faq-a">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;