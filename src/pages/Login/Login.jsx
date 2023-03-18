import { LoginForm } from '../../components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/auth/selectors';
import ErrorView from '../../components/ErrorView/ErrorView';
import Loader from '../../components/Loader/Loader';

const Login = () => {

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorView error={error}/>}
      <LoginForm />
      </>
  );
};

export default Login;
