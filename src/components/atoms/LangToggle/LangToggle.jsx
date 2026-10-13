import { useLanguage } from '../../../hooks/useLanguage';
import styles from './LangToggle.module.css';

export const LangToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className={styles.langBtn} 
      onClick={toggleLanguage}
      aria-label="Cambiar idioma"
      title="Cambiar idioma"
    >
      {language.toUpperCase()}
    </button>
  );
};