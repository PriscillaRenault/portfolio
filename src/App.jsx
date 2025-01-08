import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Header from './components/Header/index';
import About from './components/About/index';
import Footer from './components/Footer/index';
import Skills from './components/Skills/index';
import Projects from './components/Projects/index';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <About />
      <Skills />
      <Projects />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </StrictMode>,
);
