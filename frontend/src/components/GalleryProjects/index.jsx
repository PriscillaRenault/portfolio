import './style.scss';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItems';
import projectsData from '../../data/projects.json';
import ProjectModal from '../ProjectModal';
import Modal from 'react-modal';

// Configure ReactModal
Modal.setAppElement('#root');

const GalleryProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectsData);
    console.log('Projets chargés :', projectsData); // Vérifiez que les données sont chargées
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

      <ul className='projects__container'>
        {projects.map(({ id, image, title }) => (
          <GalleryItem
            key={id}
            id={id}
            image={image}
            title={title}
            onClick={() => openModal(id)}
          />
        ))}
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

export default GalleryProjects;
