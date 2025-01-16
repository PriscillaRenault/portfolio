import PropTypes from 'prop-types';
import './style.scss';

const ProjectInfo = ({ title, image }) => {
  return (
    <div className='modal-content'>
      <h3 className='modal-content__title'>{title}</h3>
      {image && (
        <img
          src={image}
          alt='image de {title}'
          className='modal-content__image'
        />
      )}
    </div>
  );
};

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectInfo;
