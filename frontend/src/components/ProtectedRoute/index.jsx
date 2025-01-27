// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  // Vérifie si un token existe (dans localStorage ou un contexte global)
  const token = localStorage.getItem('authToken');

  // Si pas de token, redirection vers la page de login
  if (!token) {
    return <Navigate to='/admin' replace />;
  }

  // Sinon, afficher la page demandée
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
