import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Footer from './components/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Login />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </StrictMode>,
);
