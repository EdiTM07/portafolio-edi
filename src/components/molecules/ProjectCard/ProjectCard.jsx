import { useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { Button } from '../../atoms/Button/Button';
import { Modal } from '../Modal/Modal';
import toast from 'react-hot-toast'; // Importación de la librería
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const title = project.title[language];
  const description = project.description[language];
  
  const hasCaseStudy = !!project.caseStudy; 

  // Función para manejar clics en enlaces vacíos
  const handleLinkClick = (url) => {
    if (!url || url === '#' || url === '') {
      toast(
        language === 'es' 
          ? 'En construcción 🚧. Pronto estará disponible.' 
          : 'Under construction 🚧. Coming soon.',
        { icon: '✨' }
      );
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <article className={styles.card}>
        <span className={styles.type}>{project.type}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.techList}>
          {project.technologies.map((tech, index) => (
            <li key={index} className={styles.techItem}>{tech}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          {hasCaseStudy ? (
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              {language === 'es' ? 'Caso de Estudio' : 'Case Study'}
            </Button>
          ) : (
            <Button variant="primary" onClick={() => handleLinkClick(project.links?.demo)}>
              {language === 'es' ? 'Ver Proyecto' : 'Live Demo'}
            </Button>
          )}
          
          <Button variant="outline" onClick={() => handleLinkClick(project.links?.github)}>
            GitHub
          </Button>
        </div>
      </article>

      {/* Modal */}
      {hasCaseStudy && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* Caso de Estudio */}
          <div style={{ paddingRight: '1rem' }}>
            <span className={styles.type}>{project.type}</span>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              {title}
            </h2>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {language === 'es' ? 'El Reto' : 'The Challenge'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.caseStudy.challenge[language]}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {language === 'es' ? 'La Solución y Arquitectura' : 'Solution & Architecture'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.caseStudy.solution[language]}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {/* Botones dentro del modal */}
              <Button variant="primary" onClick={() => handleLinkClick(project.links?.demo)}>
                {language === 'es' ? 'Ver Proyecto en Vivo' : 'View Live Project'}
              </Button>
              
              <Button variant="outline" onClick={() => handleLinkClick(project.links?.github)}>
                {language === 'es' ? 'Ver Código Fuente' : 'View Source Code'}
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};