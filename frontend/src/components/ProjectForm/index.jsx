import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useProjectSubmit from '../../utils/hooks/useProjectSubmit';
import Button from '../Button';
import './style.scss';

const ProjectForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { handleProjectSubmit, isLoading, error } = useProjectSubmit();

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
    const formData = { ...data, skills };
    handleProjectSubmit(formData);
    reset();
    setSkills([]);
  };

  return (
    <form className='project-form' onSubmit={handleSubmit(onFormSubmit)}>
      <h2 className='project-form__title'>Nouveau projet</h2>
      <div className='project-form__group'>
        <label htmlFor='title'>Titre du projet</label>
        <input
          id='title'
          {...register('title', { required: true })}
          placeholder='Ex: Mon nouveau projet'
          className='project-form__input'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='image'>URL image</label>
        <input
          id='image'
          type='file'
          accept='image/*'
          {...register('image', { required: true })}
          className='project-form__input'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          {...register('description', { required: true })}
          placeholder='Décrivez votre projet ici...'
          className='project-form__textarea'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='github'>Lien Github</label>
        <input
          id='github'
          {...register('github', { required: true })}
          placeholder='lien github'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='skills'>Ajoutez des compétences</label>
        <div className='project-form__skills'>
          <input
            id='skills'
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder='Ajoutez une compétence'
            className='project-form__input'
          />
          <button
            type='button'
            onClick={handleAddSkill}
            className='project-form__add-button'
          >
            Ajouter
          </button>
        </div>
      </div>

      <ul className='project-form__skills-list'>
        {skills.map((skill, index) => (
          <li key={index} className='project-form__skill-item'>
            {skill}
            <Button Text='Suppr' onClick={() => handleRemoveSkill(index)} />
          </li>
        ))}
      </ul>

      <Button
        Text={isLoading ? 'Envoi en cours...' : 'Envoyer'}
        type='submit'
        className='project-form__submit-button'
        disabled={isLoading}
      />

      {error && <p className='project-form__error'>{error}</p>}
    </form>
  );
};

export default ProjectForm;
