import PropTypes from 'prop-types';
import './style.scss';
const Button = ({ Text }) => {
  return <button className='button'>{Text}</button>;
};

Button.propTypes = {
  Text: PropTypes.string.isRequired,
};

export default Button;
