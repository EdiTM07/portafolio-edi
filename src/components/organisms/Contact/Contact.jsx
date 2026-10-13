import { useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { Button } from '../../atoms/Button/Button';
import styles from './Contact.module.css';

export const Contact = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tu número de WhatsApp (Ejemplo: Ecuador 593 + número sin el 0)
  const whatsappNumber = '593985365554'; 
  const whatsappMessage = language === 'es' 
    ? 'Hola Edison, vi tu portafolio y me gustaría conversar contigo.' 
    : 'Hi Edison, I saw your portfolio and would like to chat with you.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(language === 'es' ? 'Enviando...' : 'Sending...');

    const formData = new FormData(event.target);
    // Agregamos la clave de Web3Forms desde el archivo .env
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus(language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
        event.target.reset(); // Limpia el formulario
      } else {
        setStatus(language === 'es' ? 'Hubo un error, inténtalo de nuevo.' : 'There was an error, please try again.');
      }
    } catch (error) {
      setStatus(language === 'es' ? 'Error de red.' : 'Network error.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className={styles.contactContainer}>
      
      {/* Columna Izquierda: Texto y WhatsApp */}
      <div className={styles.textSection}>
        <h3>{language === 'es' ? 'Hablemos' : 'Let\'s Talk'}</h3>
        <p>
          {language === 'es' 
            ? 'Actualmente estoy abierto a nuevas oportunidades remotas o presenciales. Si tienes un proyecto en mente o estás buscando un desarrollador para tu equipo, no dudes en escribirme.' 
            : 'I am currently open to new remote or on-site opportunities. If you have a project in mind or are looking for a developer for your team, feel free to drop me a message.'}
        </p>
        
        <Button variant="outline" onClick={() => window.open(whatsappUrl, '_blank')}>
          {language === 'es' ? 'Escríbeme por WhatsApp' : 'Message me on WhatsApp'}
        </Button>
      </div>

      {/* Columna Derecha: Formulario Web3Forms */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            {language === 'es' ? 'Nombre' : 'Name'}
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className={styles.input} 
            required 
            placeholder="John Doe"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            {language === 'es' ? 'Correo Electrónico' : 'Email'}
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={styles.input} 
            required 
            placeholder="john@example.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            {language === 'es' ? 'Mensaje' : 'Message'}
          </label>
          <textarea 
            id="message" 
            name="message" 
            className={styles.textarea} 
            required 
            placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
          ></textarea>
        </div>

        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting 
            ? (language === 'es' ? 'Enviando...' : 'Sending...') 
            : (language === 'es' ? 'Enviar Mensaje' : 'Send Message')}
        </Button>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>

    </div>
  );
};