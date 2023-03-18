import { Navigate } from 'react-router-dom';
import styles from './home.module.css';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    document.title = "PhoneBook";
  }, [])

  if (isLoggedIn) {
    return <Navigate to='/contacts' />;
  }

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>
          Your <span className={styles.bestText}>best</span> phone book.
          Cooler than us, only
        </p>
      </div>
    </>
  );
};

export default Home;
