import PropTypes from 'prop-types';
import './style.scss';

const ProjectInfo = ({ title, picture }) => {
  return (
    <div className='modal-content'>
      <h3 className='modal-content__title'>{title}</h3>
      {picture && (
        <img
          src={picture}
          alt='image de {title}'
          className='modal-content__image'
        />
      )}
    </div>
  );
};

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default ProjectInfo;
