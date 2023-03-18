import PropTypes from 'prop-types';
import styles from './contact-item.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const ContactItem = ({ id, name, number }) => {

  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <p className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{number}</span>
      </p>
      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
