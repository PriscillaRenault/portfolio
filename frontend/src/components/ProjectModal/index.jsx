import PropTypes from 'prop-types';
import './style.scss';

const ProjectModal = ({ project, onClose }) => {
  // Vérifie que le projet est bien défini
  if (!project) return null;

  const { title, image, description, skills, github } = project;

  return (
    <dialog className='modal' open>
      <div className='modal__content'>
        <button onClick={onClose} className='modal__content--close'>
          Fermer
        </button>
        <div className='info'>
          <h3 className='info__title'>{title}</h3>
          {image && (
            <img src={image} alt={`image de {title}`} className='info__image' />
          )}
        </div>
        <div className='details'>
          <div>
            <h4 className='details__title'>Description</h4>
            <p className='details__content'>{description}</p>
          </div>
          <div>
            <h4 className='details__title'>Technologies</h4>
            <ul className='details__content'>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <footer className='modal-footer'>
          <a href={github} target='_blank' rel='noreferrer'>
            {' '}
            Voir sur GitHub
          </a>
        </footer>
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
