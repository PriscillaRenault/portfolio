import './style.scss';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryProjectsItems';
import projectsData from '../../data/projects.json';
import ProjectModal from '../ProjectModal';
import Modal from 'react-modal';
import { useModal } from '../../utils/hooks/useModal';

Modal.setAppElement('#root');

const GalleryProjects = () => {
  const [projects, setProjects] = useState([]);
  const { isOpen, selectedProject, openModal, closeModal } = useModal();

  useEffect(() => {
    setProjects(projectsData);
  }, []);

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
            onClick={() => openModal(id)} /* Passer les données du projet */
          />
        ))}
      </ul>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal} /* Appel de closeModal */
        contentLabel='Détails du projet'
        className='modal'
        overlayClassName='modal-overlay'
      >
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={isOpen}
            onClose={closeModal}
          /> /* Passer les données à ProjectModal */
        )}
      </Modal>
    </section>
  );
};

export default GalleryProjects;
