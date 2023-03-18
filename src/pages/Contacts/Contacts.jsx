import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';
import Loader from '../../components/Loader/Loader';
import ErrorView from '../../components/ErrorView/ErrorView';
import { PhonebookForm } from '../../components/PhonebookForm/PhonebookForm';
import Filter from '../../components/Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';

const Contacts = () => {

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    document.title = 'Contacts';
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorView error={error} />}
      <PhonebookForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
