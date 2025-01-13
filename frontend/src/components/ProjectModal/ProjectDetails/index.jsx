import PropTypes from 'prop-types';
import './style.scss';

const ProjectDetails = ({ description, skills }) => {
  return (
    <div className='project-details'>
      <p>{description}</p>
      <h4>Technologies utilisées</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

ProjectDetails.propTypes = {
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectDetails;
