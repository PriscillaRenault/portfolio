import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Button from '../Button';

const ProjectForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const onFormSubmit = (data) => {
    const projectData = { ...data, skills };
    onSubmit(projectData);
    reset();
    setSkills([]);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        {...register('userId', { required: true })}
        placeholder='User ID'
      />
      <input {...register('title', { required: true })} placeholder='Title' />
      <input
        {...register('image', { required: true })}
        placeholder='Image URL'
      />
      <textarea
        {...register('description', { required: true })}
        placeholder='Description'
      />
      <input
        {...register('github', { required: true })}
        placeholder='GitHub URL'
      />

      <div>
        <input
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          placeholder='Add a skill'
        />
        <button type='button' onClick={handleAddSkill}>
          Add
        </button>
      </div>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <Button onClick={() => handleRemoveSkill(index)}>Remove</Button>
          </li>
        ))}
      </ul>

      <Button type='submit'>Submit</Button>
    </form>
  );
};

ProjectForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProjectForm;
