import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import AdminDashboard from './AdminDashboard';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage setToken={saveToken} />} />
        <Route
          path='/admin'
          element={
            <PrivateRoute token={token}>
              <AdminDashboard token={token} />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
