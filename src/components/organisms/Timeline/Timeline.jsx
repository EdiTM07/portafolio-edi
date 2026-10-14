import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { timelineData } from '../../../data/timeline';
import { AiFillCode } from "react-icons/ai";
import styles from './Timeline.module.css';

export const Timeline = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowCenter = window.innerHeight / 2;
      
      const scrolled = windowCenter - rect.top;
      let currentProgress = (scrolled / rect.height) * 100;
      
      if (currentProgress < 0) currentProgress = 0;
      if (currentProgress > 100) currentProgress = 100;
      
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.timelineContainer} ref={containerRef}>
      {timelineData.map((item, index) => {
        const isLeft = index % 2 === 0;
        const isLast = index === timelineData.length - 1;
        
        const cardThreshold = timelineData.length > 1 ? (index / timelineData.length) * 100 : 0;
        const isVisible = scrollProgress >= cardThreshold - 5;

        const nextThreshold = timelineData.length > 1 ? ((index + 1) / timelineData.length) * 100 : 100;
        let lineProgress = 0;
        
        if (scrollProgress > cardThreshold) {
          lineProgress = ((scrollProgress - cardThreshold) / (nextThreshold - cardThreshold)) * 100;
          if (lineProgress > 100) lineProgress = 100;
        }

        return (
          <div key={item.id} className={`${styles.timelineRow} ${isLeft ? styles.rowLeft : styles.rowRight}`}>
            
            {/* LÍNEA SVG (Trazado orgánico a mano) */}
            {!isLast && (
              <div className={styles.connector}>
                <svg preserveAspectRatio="none" viewBox="0 0 100 100" className={styles.svgCurve}>
                  <path
                    d={isLeft 
                      ? "M 0,0 C 80,-15 115,35 45,50 C -25,65 20,115 100,100" 
                      : "M 100,0 C 20,-15 -15,35 55,50 C 125,65 80,115 0,100"
                    }
                    pathLength="1"
                    strokeDasharray="1"
                    strokeDashoffset={1 - (lineProgress / 100)}
                    className={styles.svgPath}
                  />
                </svg>
              </div>
            )}

            <div className={`${styles.cardWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
              <div className={styles.centerDivider}>
                <AiFillCode className={`${styles.pinIcon} ${isVisible ? styles.pinActive : ''}`} />
              </div>
              
              <div className={styles.card}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.title}>{item.title[language]}</h3>
                <h4 className={styles.institution}>{item.institution[language]}</h4>
                <p className={styles.description}>{item.description[language]}</p>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};