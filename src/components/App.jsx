import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks/useAuth';
import Home from '../pages/Home/Home';
import RestrictedRoute from './RestrictedRoute';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import PrivateRoute from './PrivateRoute';
import Contacts from '../pages/Contacts/Contacts';
import Navigation from './Navigation/Navigation';

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Navigation />
      {isRefreshing
        ? (<p className={styles.refreshingText}>Refreshing user...</p>)
        : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={
              <RestrictedRoute redirectTo='/contacts' element={<Login />} />
            } />
            <Route path='/register' element={
              <RestrictedRoute redirectTo='/contacts' element={<Registration />} />
            } />
            <Route path='/contacts' element={
              <PrivateRoute redirectTo='/login' element={<Contacts />} />
            } />
          </Routes>
        )}
    </Layout>
  );
};
