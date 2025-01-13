import Modal from 'react-modal';
import PropTypes from 'prop-types';
import ProjectInfo from './ProjectInfo';
import ProjectDetails from './ProjectDetails';
import Footer from './FooterModal';

const ProjectModal = ({ isOpen, project, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className='modal'
      overlayClassName='modal-overlay'
    >
      <div className='modal-content'>
        {project && (
          <>
            <ProjectInfo />
            <ProjectDetails />
            <Footer />
          </>
        )}
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
