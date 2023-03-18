import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PropTypes from 'prop-types';

const RestrictedRoute = ({ element, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};

RestrictedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

export default RestrictedRoute;
