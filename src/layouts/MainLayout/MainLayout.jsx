import { Navbar } from '../../components/organisms/Navbar/Navbar';
import { Footer } from '../../components/organisms/Footer/Footer';
import styles from './MainLayout.module.css';

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      
      <main className={styles.mainContent}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};