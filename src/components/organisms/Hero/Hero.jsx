import { useLanguage } from '../../../hooks/useLanguage';
import { Button } from '../../atoms/Button/Button';
import { translations } from '../../../data/translations';
import { siteConfig } from '../../../data/config';
import { scrollToElement } from '../../../utils/scroll';
import styles from './Hero.module.css';

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = siteConfig.cvPath; 
    link.download = 'Edison_Tituana_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => scrollToElement('contacto');

  return (
    <section 
      id="inicio" 
      className={styles.hero} 
      aria-labelledby="hero-heading"
    >
      {/* Columna Izquierda: Texto */}
      <div className={styles.textContent}>
        <h1 id="hero-heading" className={styles.name}>
          <span aria-hidden="true" className={styles.emoji}>👋</span> {t.greeting} {siteConfig.authorName}
        </h1>
        
        <p className={styles.description}>
          {t.description}
        </p>
        
        <div className={styles.actions}>
          <Button variant="primary" onClick={handleContactClick}>
            {t.ctaPrimary}
          </Button>
          <Button variant="outline" onClick={handleDownloadCV}>
            {t.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className={styles.imageContent}>
        <div className={styles.imageWrapper}>
          <img 
            src={siteConfig.profilePhoto} 
            alt={t.photoAlt} 
            className={styles.profilePic} 
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};