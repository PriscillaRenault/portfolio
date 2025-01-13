import PropTypes from 'prop-types';
import './style.scss';

const FooterModal = ({ github }) => {
  return (
    <footer className='footer'>
      <a href={github} target='_blank' rel='noreferrer'>
        {' '}
        Voir sur GitHub
      </a>
    </footer>
  );
};

FooterModal.propTypes = {
  github: PropTypes.string.isRequired,
};

export default FooterModal;
