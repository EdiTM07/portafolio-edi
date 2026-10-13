import { useLanguage } from '../../../hooks/useLanguage';
import { timelineData } from '../../../data/timeline';
import styles from './Timeline.module.css';

export const Timeline = () => {
  const { language } = useLanguage();

  return (
    <div className={styles.timelineContainer}>
      {timelineData.map((item) => (
        <div key={item.id} className={styles.timelineItem}>
          
          {/* El punto de conexión */}
          <div className={styles.dot}></div>
          
          {/* Contenido siempre visible */}
          <div className={styles.visibleContent}>
            <span className={styles.year}>{item.year}</span>
            <h3 className={styles.title}>{item.title[language]}</h3>
          </div>

          {/* Tarjeta con los detalles (Hover) */}
          <div className={styles.hoverCard}>
            <h4 className={styles.institution}>{item.institution[language]}</h4>
            <p className={styles.description}>{item.description[language]}</p>
          </div>

        </div>
      ))}
    </div>
  );
};