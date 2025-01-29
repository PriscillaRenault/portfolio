import './style.scss';

const about = () => {
  return (
    <section id='about' className='about'>
      <h2>À propos de moi</h2>
      <div className='border-h2'></div>
      <div className='about__content'>
        <p className='about__content--text'>
          Salut, moi c&apos;est <span className='highlight'>Priscilla</span> !
          Passionnée par le développement informatique, j&apos;ai commencé en
          autodidacte il y a quelques années, réalisant mes premiers projets et
          apprenant par moi-même. Cela m&apos;a permis d&apos;acquérir des
          compétences en{' '}
          <span className='highlight'>
            front, back, bases de données, et gestion de projet.
          </span>{' '}
          Curieuse, je m&apos;intéresse aussi à{' '}
          <span className='highlight'>
            la data et à l&apos;informatique de gestion{' '}
          </span>
          .{' '}
        </p>
        <p className='about__content--text'>
          En 2024, j&apos;ai choisi de renforcer mon apprentissage en intégrant
          une formation pour structurer et approfondir mes connaissances. Cette{' '}
          <span className='highlight'>reconversion </span>est
          l&apos;aboutissement d&apos;une passion que j&apos;ai décidé de
          transformer en carrière.{' '}
        </p>
        <p className='about__content--text'>
          Avant cela, j&apos;ai passé 15 ans dans le commerce, dont{' '}
          <span className='highlight'>
            8 comme responsable technico-commerciale{' '}
          </span>
          , où j&apos;ai développé des compétences en communication,
          organisation,et gestion de projet.{' '}
        </p>
        <p className='about__content--text'>
          Ce que j&apos;aime ?{' '}
          <span className='highlight'>
            Apprendre, relever des défis techniques, et évoluer dans un domaine
            en constante mutation.
          </span>
        </p>
      </div>
    </section>
  );
};
export default about;
