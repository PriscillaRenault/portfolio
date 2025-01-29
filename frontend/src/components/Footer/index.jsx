import './style.scss';
function Footer() {
  return (
    <footer className='footer' id='contact'>
      <div className='footer__contact'>
        <h2 className='footer__title'>Me contacter</h2>
        <p className='footer__text'>Priscilla RENAULT</p>
        <p className='footer__text'>Tel : 07 67 43 72 53</p>
        <p className='footer__text'>
          Email :{' '}
          <a href='mailto:priscilla.renault72460@gmail.com'>
            priscilla.renault72460@gmail.com
          </a>
        </p>
      </div>

      <div className='footer__legals'>
        © 2025 Priscilla Renault. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;
