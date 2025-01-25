import './style.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem';
import { fetchProjects } from '../../api';
import ProjectModal from '../ProjectModal';
import Modal from 'react-modal';

// Configure ReactModal
Modal.setAppElement('#root');

const Gallery = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, []);

  const openModal = (id) => {
    const project = projects.find((proj) => proj.id === id);
    if (project) {
      console.log('Projet trouvé :', project); // Debugging
      setSelectedProject(project);
      setIsOpen(true);
    } else {
      console.error('Aucun projet trouvé avec cet ID :', id);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id='projects' className='projects'>
      <h2>Mes projets</h2>
      <div className='border-h2'></div>

      {loading && <p>Chargement...</p>}
      {!loading && projects.length === 0 && <p>Aucun projet à afficher</p>}
      <ul className='projects__container'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <GalleryItem
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              onClick={() => openModal(project.id)}
            >
              {/* Vérifie si children existe et appelle la fonction en passant le projet */}
              {children && children(project)}
            </GalleryItem>
          ))
        ) : (
          <p>Aucun projet trouvé.</p>
        )}
      </ul>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel='Détails du projet'
        className='modal'
        overlayClassName='modal-overlay'
      >
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </Modal>
    </section>
  );
};

Gallery.propTypes = {
  children: PropTypes.func,
};

export default Gallery;
