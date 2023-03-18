import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import styles from './user-menu.module.css';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {

  const dispatch = useDispatch();

  const { email } = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <p className={styles.email}>{email}</p>
      <button className={styles.logoutButton} onClick={() => {
        dispatch(logOut());
      }}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
