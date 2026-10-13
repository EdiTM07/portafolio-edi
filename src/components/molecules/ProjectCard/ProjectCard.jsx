import { useState } from 'react';
import { useLanguage } from '../../../hooks/useLanguage';
import { Button } from '../../atoms/Button/Button';
import { Modal } from '../Modal/Modal';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const title = project.title[language];
  const description = project.description[language];
  // Validamos que el proyecto tenga caso de estudio
  const hasCaseStudy = !!project.caseStudy; 

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
            // Fallback si el proyecto no tiene caso de estudio aún, mostramos el demo
            project.links.demo && (
              <Button variant="primary" onClick={() => window.open(project.links.demo, '_blank')}>
                {language === 'es' ? 'Ver Proyecto' : 'Live Demo'}
              </Button>
            )
          )}
          
          {project.links.github && (
            <Button variant="outline" onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}>
              GitHub
            </Button>
          )}
        </div>
      </article>

      {/* El Modal que se abre al hacer clic */}
      {hasCaseStudy && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* Contenido del Caso de Estudio */}
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
              {project.links.demo && (
                <Button variant="primary" onClick={() => window.open(project.links.demo, '_blank', 'noopener,noreferrer')}>
                  {language === 'es' ? 'Ver Proyecto en Vivo' : 'View Live Project'}
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" onClick={() => window.open(project.links.github, '_blank', 'noopener,noreferrer')}>
                  {language === 'es' ? 'Ver Código Fuente' : 'View Source Code'}
                </Button>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};