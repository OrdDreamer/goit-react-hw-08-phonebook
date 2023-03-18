import styles from './phonebook-form.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

export const PhonebookForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contacts.findIndex((e) => e.name.toLowerCase() === name.toLowerCase()) === -1) {
      dispatch(addContact({ name, number }));
      reset();
    } else {
      alert("A contact with that name already exists")
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <p>Name:</p>
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          className={styles.formInput}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={styles.formItem}>
        <p>Number:</p>
        <input
          value={number}
          onChange={(e) => setNumber(e.currentTarget.value)}
          className={styles.formInput}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
      </div>
      <button className={styles.addButton} type='submit'>Add contact</button>
    </form>
  );
};
