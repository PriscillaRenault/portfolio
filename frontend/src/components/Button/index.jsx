import PropTypes from 'prop-types';
import './style.scss';

const Button = ({ Text, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {Text}
    </button>
  );
};

Button.propTypes = {
  Text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
