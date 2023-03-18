import styles from './login-form.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <button className={styles.loginButton} type='submit'>Login</button>
    </form>
  );
};
