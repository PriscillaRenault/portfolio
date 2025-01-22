import PropTypes from 'prop-types';
import ProjectInfo from './ProjectInfo';
import ProjectDetails from './ProjectDetails';
import Footer from './FooterModal';
import './style.scss';

const ProjectModal = ({ project, onClose }) => {
  // Vérifie que le projet est bien défini
  if (!project) return null;

  const { title, image, description, skills, github } = project;

  return (
    <dialog className='modal'>
      <div className='modal__content'>
        <button onClick={onClose} className='modal__content--close'>
          Fermer
        </button>
        <ProjectInfo title={title} image={image} />
        <ProjectDetails description={description} skills={skills} />
        <Footer github={github} />
      </div>
    </dialog>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
