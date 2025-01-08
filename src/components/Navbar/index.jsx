import './style.scss';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <a
                href='#about'
                className={activeSection === 'about' ? 'active' : ''}
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href='#skills'
                className={activeSection === 'skills' ? 'active' : ''}
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className={activeSection === 'contact' ? 'active' : ''}
              >
                Contact
              </a>
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
              <a
                href='#about'
                onClick={() => setIsOpen(false)}
                className={activeSection === 'about' ? 'active' : ''}
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href='#skills'
                onClick={() => setIsOpen(false)}
                className={activeSection === 'skills' ? 'active' : ''}
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href='#projects'
                onClick={() => setIsOpen(false)}
                className={activeSection === 'projects' ? 'active' : ''}
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href='#contact'
                onClick={() => setIsOpen(false)}
                className={activeSection === 'contact' ? 'active' : ''}
              >
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
