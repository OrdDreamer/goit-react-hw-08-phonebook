import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { useEffect } from 'react';
import ErrorView from '../../components/ErrorView/ErrorView';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';

const Registration = () => {

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    document.title = 'Registration';
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorView error={error} />}
      <RegistrationForm />
    </>
  );
};

export default Registration;
