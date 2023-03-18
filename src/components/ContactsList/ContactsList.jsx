import styles from './contacts-list.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

const ContactsList = () => {

  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {
        !!contacts.length
          ? (<ul className={styles.contactsList}>
            {contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                id={String(id)}
                name={name}
                number={number}
              />
            ))}
          </ul>)
          : (<p className={styles.emptyText}>No contacts in list, yet</p>)
      }
    </>
  );
};

export default ContactsList;
