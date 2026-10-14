import { useEffect } from 'react';
import { createPortal } from 'react-dom'; // 1. Importamos createPortal
import styles from './Modal.module.css';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // 2. Envolvemos el JSX que ya tenías dentro de createPortal()
  return createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">
          &times;
        </button>
        
        <div className={styles.innerContent}>
          {children}
        </div>
      </div>
    </div>,
    document.body // 3. Le indicamos que lo inyecte directamente en el body del HTML
  );
};