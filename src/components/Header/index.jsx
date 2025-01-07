import '../../scss/base/base.scss';
import './style.scss';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import photoDeMoi from '../../assets/images/moi.jpg';
const Header = () => {
  return (
    <header className='header' id='home'>
      <Navbar />
      <section className='header__content'>
        <div className='header__photo-container'>
          <img
            className='header__photo-container--photo'
            src={photoDeMoi}
            alt='Ma photo'
          />
        </div>
        <div>
          <h1 className='header__title'>Priscilla RENAULT</h1>
          <p className='header__job'>Développeuse Web Fullstack</p>

          <div className='header__details'>
            <span>
              <FontAwesomeIcon
                icon={faLocationDot}
                className='header__icon--Location'
              />
              <span className='header__details--text'>France, Le Mans</span>
            </span>
            <p className='header__details--text'>
              A la recherche de nouvelles collaborations
            </p>
          </div>
          <div className='header__socials'>
            <a href='https://www.linkedin.com/in/priscillarenault/'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className='header__socials--icons'
              />
            </a>

            <a href='https://github.com/PriscillaRenault'>
              <FontAwesomeIcon
                icon={faGithub}
                className='header__socials--icons'
              />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
