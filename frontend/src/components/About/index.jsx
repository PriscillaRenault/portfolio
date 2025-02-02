import './style.scss';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id='aboutme' className='about'>
      <h2>{t('aboutme.title')}</h2>
      <div className='border-h2'></div>
      <div className='about__content'>
        <p
          className='about__content--text'
          dangerouslySetInnerHTML={{ __html: t('aboutme.intro') }}
        ></p>
        <p
          className='about__content--text'
          dangerouslySetInnerHTML={{ __html: t('aboutme.career') }}
        ></p>
        <p
          className='about__content--text'
          dangerouslySetInnerHTML={{ __html: t('aboutme.experience') }}
        ></p>
        <p
          className='about__content--text'
          dangerouslySetInnerHTML={{ __html: t('aboutme.what_i_like') }}
        ></p>
      </div>
    </section>
  );
};

export default About;
