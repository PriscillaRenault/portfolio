import './style.scss';
const skillsValue = [
  {
    title: 'Front-end',
    skills: {
      JavaScript: 80,
      React: 80,
      TypeScript: 60,
      HTML5: 95,
      CSS3: 95,
      'SASS/SCSS': 80,
      Bootstrap: 80,
    },
  },
  {
    title: 'Back-end',
    skills: {
      'Node.js': 80,
      Express: 80,
      MongoDB: 80,
      'RESTful API': 50,
      MySQL: 30,
      PHP: 30,
    },
  },

  {
    title: 'Outils',
    skills: { Git: 80, GitHub: 80, 'VS Code': 90, AI: 75 },
  },
  {
    title: 'Soft Skills',
    skills: {
      'Gestion de projet': 70,
      Anglais: 70,
      Jira: 80,
    },
  },
];

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <h2>Mes compétences</h2>
      <div className='border-h2'></div>
      <div className='skills__container'>
        {skillsValue.map((category, index) => (
          <div key={index} className='skills__list'>
            <h3 className='skills__list--title'>{category.title}</h3>
            <ul>
              {Object.entries(category.skills).map(([skill, value], idx) => (
                <li key={idx} className='skills__item'>
                  <div className='skills__item--label'>
                    <span>{skill}</span>
                    <span>{value}%</span>
                  </div>
                  <div className='skills__item--progress'>
                    <div
                      className='skills__item--bar'
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
