import './style.scss';

const about = () => {
  return (
    <section id='about' className='about'>
      <h2>À propos de moi</h2>
      <div className='border-h2'></div>
      <div className='about__content'>
        <p className='about__content--text'>
          <span className='highlight'>
            👋 Hello, moi c&apos;est Priscilla !
          </span>{' '}
          <p />
          <p className='about__content--text'>
            Développeuse informatique Passionnée, j&apos;ai commencé en
            autodidacte avant de valider un{' '}
            <span className='highlight'>Bac+2 Développeur Web</span> chez
            OpenClassrooms. j&apos;y ai acquis des compétences en{' '}
            <span className='highlight'>front-end</span>,
            <span className='highlight'> back-end</span> et{' '}
            <span className='highlight'>bases de données </span>
            que j&apos;affine aujourd&apos;hui en explorant{' '}
            <span className='highlight'>Java</span> et
            <span className='highlight'> Python</span> à travers des projets
            personnels comme des mini-jeux.
          </p>
          <p className='about__content--text'>
            Forte de{' '}
            <span className='highlight'>
              15 ans d&apos;expérience dans le commerce
            </span>{' '}
            dont{' '}
            <span className='highlight'>
              8 comme responsable technico-commerciale{' '}
            </span>
            , j&apos;apporte aussi des compétences solides en{' '}
            <span className='highlight'>
              communication, organisation et gestion de projet.{' '}
            </span>
          </p>
          <p className='about__content--text'>
            {' '}
            <span className='highlight'>
              🎯 Je recherche actuellement une alternance à partir de septembre
              2025
            </span>{' '}
            dans le cadre d&apos;un{' '}
            <span className='highlight'>
              Bac+3 Concepteur Développeur d&apos;Applications{' '}
            </span>
            avec l&apos;envie de me spécialiser en{' '}
            <span className='highlight'>
              informatique de gestion, traitement des données
            </span>{' '}
            et{' '}
            <span className='highlight'>
              conception d&apos;applications métier.
            </span>
          </p>
        </p>
        <p className='about__content--text'>
          🚀 <span className='highlight'>Ce que j&apos;aime ? </span>
          Apprendre, relever des défis techniques et évoluer dans un domaine en
          constante mutation.
        </p>
      </div>
    </section>
  );
};
export default about;
