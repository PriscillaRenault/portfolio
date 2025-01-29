import './style.scss';
import { fetchProjects } from '../../api';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import GalleryItem from '../GalleryItem';
import ProjectModal from '../ProjectModal';

// Configure ReactModal
Modal.setAppElement('#root');

const Gallery = () => {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Ajout de l'état pour l'erreur

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const data = await fetchProjects();
      console.log('Données récupérées :', data); // Debugging
      setProjects(data);
      setLoading(false);
    };
    getProjects();
  }, []);

  const openModal = async (_id) => {
    console.log('ID du projet:', _id); // Vérifie ici si l'ID est bien l'ObjectId
    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects/${_id}`,
      );
      if (!response.ok) {
        throw new Error('Aucun projet trouvé avec cet ID');
      }
      const data = await response.json();
      setSelectedProject(data);
      setIsOpen(true);
    } catch (err) {
      console.error('Erreur:', err.message);
      setError(err.message); // Mise à jour de l'état de l'erreur
    } finally {
      setLoading(false);
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
      {error && <p className='error-message'>{error}</p>}{' '}
      {/* Affiche l'erreur s'il y en a */}
      <ul className='projects__container'>
        {projects.length > 0 ? (
          projects
            .slice()
            .reverse()
            .map(({ _id, image, title }) => (
              <GalleryItem
                key={_id}
                id={_id}
                image={image}
                title={title}
                onClick={() => openModal(_id)}
              />
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
        {selectedProject ? (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        ) : (
          <p>Chargement du projet...</p>
        )}
      </Modal>
    </section>
  );
};

Gallery.propTypes = {
  children: PropTypes.func,
};

export default Gallery;
