import PropTypes from 'prop-types';
import './style.scss';

const ProjectDetails = ({ description, skills }) => {
  return (
    <div className='details'>
      <div>
        <h4 className='details__title'>Description</h4>
        <p className='details__content'>{description}</p>
      </div>
      <div>
        <h4 className='details__title'>Technologies</h4>
        <ul className='details__content'>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectDetails;
