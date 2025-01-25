import PropTypes from 'prop-types';
import './style.scss';

const GalleryItem = ({ id, image, title, onClick, isDashboard }) => {
  console.log(`GalleryItem rendu avec ID: ${id}, isDashboard: ${isDashboard}`);

  return (
    <li onClick={onClick} className='project__item' data-cover={image}>
      <div
        className='project__item--cover'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className='project__item--title'>{title}</h3>

      {isDashboard && (
        <div className='project__item--actions'>
          <button
            className='btn btn-edit'
            onClick={() => console.log(`Modifier ${id}`)}
          >
            Modifier
          </button>
          <button
            className='btn btn-delete'
            onClick={() => console.log(`Supprimer ${id}`)}
          >
            Supprimer
          </button>
        </div>
      )}
    </li>
  );
};

GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDashboard: PropTypes.bool,
};

GalleryItem.defaultProps = {
  isDashboard: false,
};

export default GalleryItem;
