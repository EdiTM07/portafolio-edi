import { useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { Button } from '../../atoms/Button/Button';
import styles from './Contact.module.css';

export const Contact = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. NUEVO: Estado para controlar los valores de los inputs en tiempo real
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const whatsappNumber = '593985365554'; 
  const whatsappMessage = language === 'es' 
    ? 'Hola Edison, vi tu portafolio y me gustaría conversar contigo.' 
    : 'Hi Edison, I saw your portfolio and would like to chat with you.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // 2. NUEVO: Función para actualizar el estado cada vez que el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  // 3. NUEVO: Validación en tiempo real (verifica que ningún campo esté vacío)
  const isFormValid = 
    formValues.name.trim() !== '' && 
    formValues.email.trim() !== '' && 
    formValues.message.trim() !== '';

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
        // NUEVO: Limpiamos los estados controlados para vaciar los inputs
        setFormValues({ name: '', email: '', message: '' }); 
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

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            {language === 'es' ? 'Nombre' : 'Name'}
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formValues.name}       /* Asignamos el valor del estado */
            onChange={handleChange}       /* Escuchamos los cambios */
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
            value={formValues.email}      /* Asignamos el valor del estado */
            onChange={handleChange}       /* Escuchamos los cambios */
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
            value={formValues.message}    /* Asignamos el valor del estado */
            onChange={handleChange}       /* Escuchamos los cambios */
            className={styles.textarea} 
            required 
            placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}
          ></textarea>
        </div>

        {/* 4. MODIFICADO: Se deshabilita si está enviando O si el formulario no es válido */}
        <Button type="submit" variant="primary" disabled={isSubmitting || !isFormValid}>
          {isSubmitting 
            ? (language === 'es' ? 'Enviando...' : 'Sending...') 
            : (language === 'es' ? 'Enviar Mensaje' : 'Send Message')}
        </Button>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </form>

    </div>
  );
};