import styles from './Button.module.css';

export const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  ariaLabel,
  disabled = false 
}) => {
  // Combinamos la clase base con la variante (primary o outline)
  const className = `${styles.btn} ${styles[variant]}`;

  return (
    <button 
      className={className} 
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};