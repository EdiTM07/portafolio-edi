import { useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { ThemeToggle } from '../../atoms/ThemeToggle/ThemeToggle';
import { LangToggle } from '../../atoms/LangToggle/LangToggle';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* Sección de Marca: Logo, Botón Hamburguesa y Controles Móviles */}
        <div className={styles.brandSection}>
          <div className={styles.logoWrapper}>
            <a href="#inicio" className={styles.logo} onClick={closeMenu}>
              Edi
            </a>
            
            <button 
              className={styles.hamburger} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
            >
              <span className={`${styles.line} ${isOpen ? styles.lineTop : ''}`}></span>
              <span className={`${styles.line} ${isOpen ? styles.lineMiddle : ''}`}></span>
              <span className={`${styles.line} ${isOpen ? styles.lineBottom : ''}`}></span>
            </button>
          </div>
          
          {/* Estos controles solo son visibles en pantallas pequeñas */}
          <div className={styles.mobileControls}>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Enlaces de Navegación */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <a href="#inicio" className={styles.link} onClick={closeMenu}>
                {language === 'es' ? 'Inicio' : 'Home'}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#sobre-mi" className={styles.link} onClick={closeMenu}>
                {language === 'es' ? 'Sobre Mí' : 'Skills'}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#trayectoria" className={styles.link} onClick={closeMenu}>
                {language === 'es' ? 'Trayectoria' : 'Experience'}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#proyectos" className={styles.link} onClick={closeMenu}>
                {language === 'es' ? 'Proyectos' : 'My Work'}
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#contacto" className={styles.link} onClick={closeMenu}>
                {language === 'es' ? 'Contacto' : 'Contact'}
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Controles versión Escritorio (se ocultan en móvil) */}
        <div className={styles.desktopControls}>
          <LangToggle />
          <ThemeToggle />
        </div>
        
      </div>
    </header>
  );
};