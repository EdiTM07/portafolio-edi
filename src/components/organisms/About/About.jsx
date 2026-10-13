import { useLanguage } from '../../../hooks/useLanguage';
import { translations } from '../../../data/translations';
import { skillsData } from '../../../data/skills';
import styles from './About.module.css';

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <div className={styles.aboutContainer}>
      {/* Columna Izquierda: Texto */}
      <div className={styles.textContent}>
        <p>{t.description}</p>
      </div>

      {/* Columna Derecha: Habilidades */}
      <div className={styles.skillsSection}>
        <h3>{t.skillsTitle}</h3>
        <div className={styles.skillsGrid}>
          {skillsData.map((skillGroup, index) => (
            <div key={index} className={styles.skillCategory}>
              <h4 className={styles.categoryTitle}>{skillGroup.category}</h4>
              <ul className={styles.skillList}>
                {skillGroup.items.map((item, i) => (
                  <li key={i} className={styles.skillItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};