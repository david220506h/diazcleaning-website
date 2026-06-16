import { useState } from "react";
import { useStore } from "@nanostores/react";
import { languageStore } from "../../stores/language";
import "./Servicios.css";

const content = {
  es: {
    title: "Nuestros Servicios",
    subtitle: "Soluciones de limpieza diseñadas para cada espacio y ritmo de vida.",
    requestBtn: "Solicitar",
    categories: [
      {
        id: "residencial",
        label: "Residencial",
        tagline: "Cuidado meticuloso para su hogar, adaptado a sus ritmos de vida.",
        services: [
          { num: "01", title: "Casas Particulares",      desc: "Mantenimiento integral profundo de cada ambiente." },
          { num: "02", title: "Departamentos",           desc: "Optimización y limpieza de espacios urbanos." },
          { num: "03", title: "Casas en Construcción",   desc: "Limpieza técnica post-obra y entrega final." },
        ],
      },
      {
        id: "comercial",
        label: "Comercial",
        tagline: "Protocolos de higiene para negocios que priorizan la salud de sus clientes.",
        services: [
          { num: "04", title: "Gimnasios y Centros Fitness", desc: "Desinfección de superficies y equipos de alto tráfico." },
          { num: "05", title: "Tiendas y Retail",            desc: "Presentación impecable que cuida la imagen de marca." },
          { num: "06", title: "Restaurantes",                desc: "Higiene de grado alimentario y áreas comunes." },
        ],
      },
      {
        id: "especializada",
        label: "Especializada",
        tagline: "Técnicas avanzadas para situaciones que exigen precisión y expertise.",
        services: [
          { num: "07", title: "Limpieza de Ventanas",   desc: "Limpieza profesional interior y exterior con equipo especializado." },
          { num: "08", title: "Limpieza Industrial",    desc: "Servicios para plantas y espacios de gran escala." },
          { num: "09", title: "Limpieza Profunda",      desc: "Tratamiento exhaustivo de zonas de difícil acceso." },
        ],
      },
    ],
  },
  en: {
    title: "Our Services",
    subtitle: "Cleaning solutions designed for every space and lifestyle.",
    requestBtn: "Request",
    categories: [
      {
        id: "residential",
        label: "Residential",
        tagline: "Meticulous care for your home, adapted to your daily rhythms.",
        services: [
          { num: "01", title: "Private Homes",         desc: "Comprehensive deep maintenance of every room." },
          { num: "02", title: "Apartments",            desc: "Optimization and cleaning of urban living spaces." },
          { num: "03", title: "Post-Construction",     desc: "Technical post-build cleaning and final handover." },
        ],
      },
      {
        id: "commercial",
        label: "Commercial",
        tagline: "Hygiene protocols for businesses that prioritize their clients' health.",
        services: [
          { num: "04", title: "Gyms & Fitness Centers", desc: "Disinfection of high-traffic surfaces and equipment." },
          { num: "05", title: "Retail & Stores",        desc: "Impeccable presentation that protects brand image." },
          { num: "06", title: "Restaurants",            desc: "Food-grade hygiene standards and common areas." },
        ],
      },
      {
        id: "specialized",
        label: "Specialized",
        tagline: "Advanced techniques for situations that demand precision and expertise.",
        services: [
          { num: "07", title: "Window Cleaning",     desc: "Professional interior and exterior cleaning with specialized equipment." },
          { num: "08", title: "Industrial Cleaning", desc: "Services for plants and large-scale facilities." },
          { num: "09", title: "Deep Cleaning",       desc: "Exhaustive treatment of hard-to-reach areas." },
        ],
      },
    ],
  },
};

const Servicios = () => {
  const language = useStore(languageStore);
  const lang = language === "en" ? "en" : "es";
  const t = content[lang];

  const [active, setActive] = useState(null);

  const toggle = (id) => setActive(prev => (prev === id ? null : id));

  return (
    <section className="sv-section" id="services">
      <div className="sv-intro">
        <p className="sv-eyebrow">
          {lang === "es" ? "Lo que hacemos" : "What we do"}
        </p>
        <h2 className="sv-title">{t.title}</h2>
        <p className="sv-subtitle">{t.subtitle}</p>
      </div>

      <div className="sv-categories">
        {t.categories.map((cat) => (
          <div key={cat.id} className={`sv-cat ${active === cat.id ? "sv-cat--open" : ""}`}>
            {/* Category header row */}
            <button
              className="sv-cat-header"
              onClick={() => toggle(cat.id)}
              aria-expanded={active === cat.id}
            >
              <span className="sv-cat-label">{cat.label}</span>
              <span className="sv-cat-tagline">{cat.tagline}</span>
              <span className="sv-cat-arrow" aria-hidden="true">
                {active === cat.id ? "−" : "+"}
              </span>
            </button>

            {/* Services list */}
            <div className="sv-services-wrap">
              <ul className="sv-services-list">
                {cat.services.map((s) => (
                  <li key={s.num} className="sv-item">
                    <span className="sv-item-num">{s.num}</span>
                    <div className="sv-item-body">
                      <strong className="sv-item-title">{s.title}</strong>
                      <span className="sv-item-desc">{s.desc}</span>
                    </div>
                    <a href="#contact" className="sv-item-btn">
                      {t.requestBtn} <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;