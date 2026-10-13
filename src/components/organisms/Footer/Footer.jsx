import { useLanguage } from '../../../hooks/useLanguage';
import styles from './Footer.module.css';

export const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {currentYear} <span className={styles.highlight}>Edison DEV</span>. 
        {language === 'es' ? ' Todos los derechos reservados.' : ' All rights reserved.'}
      </p>
    </footer>
  );
};