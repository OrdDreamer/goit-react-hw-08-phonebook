import { Link, NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {

  const { isLoggedIn, isRefreshing } = useAuth();

  return (
    <div className={styles.navContainer}>
      <Link className={styles.logo} to="/">PhoneBook</Link>
      {
        isRefreshing
          ? null
          : isLoggedIn
            ? <UserMenu />
            : <>
              <NavLink className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                       to='/login'>
                Login
              </NavLink>
              <NavLink className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                       to='/register'>
                Registration
              </NavLink>
            </>
      }
    </div>
  );
};

export default Navigation;
