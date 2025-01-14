import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Créer le contexte
export const IdProjectContext = createContext();

export const IdProjectProvider = ({ children }) => {
  const [projectId, setProjectId] = useState(null);

  return (
    <IdProjectContext.Provider value={{ projectId, setProjectId }}>
      {children}
    </IdProjectContext.Provider>
  );
};

IdProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
