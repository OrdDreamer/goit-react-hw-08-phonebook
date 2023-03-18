import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';
import styles from './error-view.module.css';

const ErrorView = () => {
  const error = useSelector(selectError);

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
