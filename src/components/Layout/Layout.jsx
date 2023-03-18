import PropTypes from 'prop-types';
import styles from './layout.module.css';

const Layout = ({ children }) => {

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
};
