import './style.scss';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        {/* Desktop Navigation */}
        <nav className='desktop-menu'>
          <ul>
            <li>
              <a href='#home'>Accueil</a>
            </li>
            <li>
              <a href='#about'>A propos de moi</a>
            </li>
            <li>
              <a href='#skills'>Mes compétences</a>
            </li>
            <li>
              <a href='#skills'>Mes projets</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
        {/* Mobile Navigation */}
        <button
          className={`burger-icon ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href='#home' onClick={() => setIsOpen(false)}>
                Accueil
              </a>
            </li>
            <li>
              <a href='#about' onClick={() => setIsOpen(false)}>
                A propos de moi
              </a>
            </li>
            <li>
              <a href='#services' onClick={() => setIsOpen(false)}>
                Mes compétences
              </a>
            </li>
            <li>
              <a href='#services' onClick={() => setIsOpen(false)}>
                Mes projets
              </a>
            </li>
            <li>
              <a href='#contact' onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
