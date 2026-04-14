import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './App.css';
import casanovaImg from './assets/images/casanova.jpeg';
import huizarImg from './assets/images/huizar.jpeg';
import daniaImg from './assets/images/dania.jpeg';
import eliasImg from './assets/images/elias.jpeg';

import LanguageSwitcher from './components/LanguageSwitcher';
import { FaCode, FaMobileAlt, FaCloudUploadAlt, FaChartLine, FaCheckCircle, FaRocket, FaEye, FaHandshake } from 'react-icons/fa';

function App() {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: "Jose Navarro",
      role: "Frontend Developer",
      image: eliasImg,
      icon: <FaCode size={40} />,
      color: "#0a192f"
    },
    {
      name: "Dania Saavedra",
      image: daniaImg,
      role: "Mobile Dev (Android)",
      icon: <FaMobileAlt size={40} />,
      color: "#0a192f"
    },
    {
      name: "Alejandro Casanova",
      image: casanovaImg,
      role: "Backend & API",
      icon: <FaCloudUploadAlt size={40} />,
      color: "#0a192f"
    },
    {
      name: "Miguel Huizar",
      image: huizarImg,
      role: "Project Manager",
      icon: <FaChartLine size={40} />,
      color: "#0a192f"
    }
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <span className="logo-icon">⌘</span>
            <span className="logo-text">Orion<span className="logo-tech">Technologies</span></span>
          </div>
          <ul className="nav-links">
            <li><a href="#nosotros">{t('nav.nosotros')}</a></li>
            <li><a href="#solucion">{t('nav.solucion')}</a></li>
            <li><a href="#equipo">{t('nav.equipo')}</a></li>
            <li><a href="#contacto" className="nav-cta">{t('nav.contacto')}</a></li>
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>
              <Trans i18nKey="hero.title">
                Somos una firma de desarrollo de software especializada en <span className="highlight">soluciones a medida para la Industria 4.0</span>
              </Trans>
            </h1>
            <p>{t('hero.description')}</p>
            <a href="#contacto" className="btn-primary">{t('hero.button')}</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+98%</span>
              <span className="stat-label">{t('stats.trazabilidad')}</span>
            </div>
            <div className="stat">
              <span className="stat-number">-35%</span>
              <span className="stat-label">{t('stats.paros')}</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">{t('stats.tiempo')}</span>
            </div>
          </div>
        </div>
      </header>

      <section id="nosotros" className="mission-vision">
        <div className="container">
          <h2>{t('mision.titulo')}</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h3>{t('mision.title')}</h3>
              <p>{t('mision.text')}</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h3>{t('vision.title')}</h3>
              <p>{t('vision.text')}</p>
            </div>
          </div>
          
          <div className="values-grid">
            <div className="value-item">
              <FaRocket className="value-icon" />
              <h4>{t('valores.innovacion')}</h4>
              <p>{t('valores.innovacion.text')}</p>
            </div>
            <div className="value-item">
              <FaCheckCircle className="value-icon" />
              <h4>{t('valores.precision')}</h4>
              <p>{t('valores.precision.text')}</p>
            </div>
            <div className="value-item">
              <FaHandshake className="value-icon" />
              <h4>{t('valores.compromiso')}</h4>
              <p>{t('valores.compromiso.text')}</p>
            </div>
            <div className="value-item">
              <FaEye className="value-icon" />
              <h4>{t('valores.transparencia')}</h4>
              <p>{t('valores.transparencia.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="problematica">
        <div className="container">
          <div className="problematica-wrapper">
            <div className="problematica-content">
              <span className="badge">{t('problema.badge')}</span>
              <h2>{t('problema.title')}</h2>
              <ul>
                <li>{t('problema.1')}</li>
                <li>{t('problema.2')}</li>
                <li>{t('problema.3')}</li>
                <li>{t('problema.4')}</li>
              </ul>
            </div>
            <div className="problematica-stat">
              <div className="stat-big">SMT Line</div>
              <p>{t('problema.stat')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solucion" className="solucion">
        <div className="container">
          <h2>{t('solucion.title')}</h2>
          <div className="solucion-grid">
            <div className="solucion-card">
              <div className="solucion-number">1</div>
              <h3>{t('solucion.web.title')}</h3>
              <p>{t('solucion.web.text')}</p>
            </div>
            <div className="solucion-card">
              <div className="solucion-number">2</div>
              <h3>{t('solucion.movil.title')}</h3>
              <p>{t('solucion.movil.text')}</p>
            </div>
            <div className="solucion-card">
              <div className="solucion-number">3</div>
              <h3>{t('solucion.api.title')}</h3>
              <p>{t('solucion.api.text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="equipo" className="team">
        <div className="container">
          <h2>{t('equipo.title')}</h2>
          <div className="team-grid">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="team-card">
                <div className="team-image-wrapper">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.alt || member.name}
                      className="team-image"
                    />
                  ) : (
                    <div className="team-initials" style={{ backgroundColor: member.color || "#0a192f" }}>
                      {member.initials || member.name.charAt(0)}
                    </div>
                  )}
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="contact">
        <div className="container contact-container">
          <h2>{t('contacto.title')}</h2>
          <p>{t('contacto.text')}</p>
          <a href="mailto:contacto@oriontechnologies.com" className="btn-primary btn-large">contacto@oriontechnologies.com</a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2025 {t('footer.text')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;