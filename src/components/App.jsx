import styles from './app.module.css';
import Section from './Section/Section';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import ErrorView from './ErrorView/ErrorView';

export const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        color: '#010101',
        padding: '50px',
        backgroundColor: 'rgb(231, 236, 242)',
        boxSizing: 'border-box',
      }}
    >
      <div className={styles.phonebook}>
        {isLoading && <Loader />}
        {error && <ErrorView />}
        <Section title={'Phonebook'}>
          <PhonebookForm />
        </Section>
        <Filter />
        <Section title={'Contacts List'}>
          <ContactsList />
        </Section>
      </div>
    </div>
  );
};
