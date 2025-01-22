import PropTypes from 'prop-types';
import './style.scss';

const ProjectInfo = ({ title, image }) => {
  return (
    <div className='info'>
      <h3 className='info__title'>{title}</h3>
      {image && (
        <img src={image} alt={`image de {title}`} className='info__image' />
      )}
    </div>
  );
};

ProjectInfo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectInfo;
