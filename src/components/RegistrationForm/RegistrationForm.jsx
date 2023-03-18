import styles from './registration-form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegistrationForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          name='name'
          placeholder='Enter your name'
          required
        />
      </div>
      <div className={styles.formItem}>
        <p>Email:</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className={styles.formInput}
          type='email'
          name='email'
          placeholder='Enter your e-mail'
          required
        />
      </div>
      <div className={styles.formItem}>
        <p>Password:</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          className={styles.formInput}
          type='password'
          name='password'
          placeholder='Enter your password'
          required
        />
      </div>
      <button className={styles.registrationButton} type='submit'>Registration</button>
    </form>
  );
};
