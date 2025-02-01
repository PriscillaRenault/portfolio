import PropTypes from 'prop-types';
import './style.scss';

const GalleryItem = ({ image, title, onClick }) => {
  return (
    <li onClick={onClick} className='project__item' data-cover={image}>
      <div
        className='project__item--cover'
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3 className='project__item--title'>{title}</h3>
    </li>
  );
};

GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GalleryItem;
