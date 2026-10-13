import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Hero } from './components/organisms/Hero/Hero';
import { ProjectCard } from './components/molecules/ProjectCard/ProjectCard';
import { SocialSidebar } from './components/molecules/SocialSidebar/SocialSidebar';
import { FadeIn } from './components/atoms/FadeIn/FadeIn';
import { Contact } from './components/organisms/Contact/Contact';
import { About } from './components/organisms/About/About';
import { Timeline } from './components/organisms/Timeline/Timeline';
import { projectsData } from './data/projects';
import { useLanguage } from './hooks/useLanguage';
import styles from './App.module.css';

function App() {
  const { language } = useLanguage();

  return (
    <MainLayout>
      <SocialSidebar />
      <div className={styles.container}>
        {/* Sección 1: Presentación */}
        <Hero />

        {/* Sección 2: Sobre Mí */}
        <section id="sobre-mi" className={styles.section}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>01.</span>
            {language === 'es' ? 'Sobre Mí' : 'About Me'}
          </h2>
          <About />
          </FadeIn>
        </section>

        {/* Sección 3: Trayectoria y Educación */}
        <section id="trayectoria" className={styles.section}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>02.</span>
            {language === 'es' ? 'Trayectoria y Educación' : 'Experience & Education'}
          </h2>
          <Timeline />
          </FadeIn>
        </section>

        {/* Sección 3: Proyectos */}
        <section id="proyectos" className={styles.section}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>03.</span>
            {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
          <div className={styles.projectsGrid}>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          </FadeIn>
        </section>

        {/* Sección 4: Contacto */}
        <section id="contacto" className={styles.section}>
          <FadeIn>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionNumber}>04.</span>
            {language === 'es' ? 'Contacto' : 'Contact'}
          </h2>
          <Contact />
          </FadeIn>
        </section>
      </div>
    </MainLayout>
  )
}

export default App;