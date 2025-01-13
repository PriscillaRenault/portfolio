import '../../data/projects.json';
import './style.scss';
import PropTypes from 'prop-types';

const ProjectItem = ({ id, picture, title, onClick }) => {
  return (
    <li
      key={id}
      onClick={onClick}
      className='project__item'
      data-cover={picture}
    >
      <div
        className='project__item--cover'
        style={{ backgroundImage: `url(${picture})` }}
      ></div>
      <h3 className='project__item--title'>{title}</h3>
    </li>
  );
};

ProjectItem.propTypes = {
  id: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectItem;
