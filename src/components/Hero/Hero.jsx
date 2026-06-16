import "./Hero.css";
import { useStore } from "@nanostores/react";
import { languageStore } from "../../stores/language";
import hero2 from "../../assets/hero2.jpeg";

const Hero = () => {
  const language = useStore(languageStore);
  const es = language === "es";

  return (
    <div className="Hero" id="hero">
      <div className="Hero-superior">

        {/* IZQUIERDA — Texto */}
        <div className="Text-hero">
          <div className="Hero-badge">
            <span className="badge-dot" />
            {es ? "Disponible hoy en Phoenix, AZ" : "Available today in Phoenix, AZ"}
          </div>

          <h1 className="Texto-principal">
            {es ? (
              <>
                <span style={{ fontWeight: 300 }}>Servicios profesionales </span>
                <span style={{ fontWeight: 900 }}>de limpieza.</span>
              </>
            ) : (
              <>
                <span style={{ fontWeight: 300 }}>Professional </span>
                <span style={{ fontWeight: 900 }}>Cleaning Services.</span>
              </>
            )}
          </h1>

          <p className="Informacion-principal">
            {es
              ? "Limpieza residencial, comercial e industrial en Phoenix, Arizona. Resultados garantizados."
              : "Residential, commercial and industrial cleaning in Phoenix, Arizona. Guaranteed results."}
          </p>

          <div className="Hero-btns">
            <a href="tel:+14804794507" className="btn-phone">
              📞 (480) 479-4507
            </a>
            <a href="#contact" className="btn-primary">
              {es ? "Solicitar servicio" : "Request a service"}
            </a>
          </div>

          <div className="Hero-services">
            <span>🏠 {es ? "Residencial" : "Residential"}</span>
            <span className="svc-dot">•</span>
            <span>🏢 {es ? "Comercial" : "Commercial"}</span>
            <span className="svc-dot">•</span>
            <span>🏭 {es ? "Industrial" : "Industrial"}</span>
          </div>
        </div>

        {/* DERECHA — Imagen + Stats */}
        <div className="Hero-right">
          <div className="Hero-image">
            <img src={hero2.src} alt="Diaz Cleaning – Limpieza profesional Phoenix AZ" />
            <div className="Hero-image-badge">
              <span className="badge-avatar">MD</span>
              <div className="badge-info">
                <span className="badge-name">Mildred Diaz</span>
                <span className="badge-role">{es ? "Fundadora & Propietaria" : "Owner & Founder"}</span>
              </div>
            </div>
          </div>

          <div className="Hero-stats">
            <div className="stat-card">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">{es ? "Calificación" : "Rating"}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">{es ? "Garantizado" : "Guaranteed"}</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3</span>
              <span className="stat-label">{es ? "Tipos de servicio" : "Service types"}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;