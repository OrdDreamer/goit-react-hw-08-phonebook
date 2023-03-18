import styles from './error-view.module.css';
import PropTypes from 'prop-types';

const ErrorView = ({ error }) => {

  return (
    <div className={styles.container}>
      <p className={styles.error}>
        <span className={styles.title}>Error</span>
        {error}
      </p>
    </div>
  )
}

export default ErrorView;

ErrorView.propTypes = {
  error: PropTypes.string.isRequired,
}
