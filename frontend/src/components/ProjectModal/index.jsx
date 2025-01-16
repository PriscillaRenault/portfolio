import Modal from 'react-modal';
import PropTypes from 'prop-types';

import ProjectInfo from './ProjectInfo';
import ProjectDetails from './ProjectDetails';
import Footer from './FooterModal';

const ProjectModal = ({ isOpen, project, onClose }) => {
  if (!project) {
    return null; // Si aucun projet n'est sélectionné, ne rien afficher
  }

  const { title, image, description, skills, github } = project;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='modal'
      overlayClassName='modal-overlay'
    >
      <div className='modal-content'>
        <ProjectInfo title={title} image={image} />
        <ProjectDetails description={description} skills={skills} />
        <Footer github={github} />
        <button onClick={onClose}>Fermer</button>
      </div>
    </Modal>
  );
};

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  project: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
