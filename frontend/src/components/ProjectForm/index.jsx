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
  const [issues, setIssues] = useState([]); // État pour gérer les issues
  const [issueInput, setIssueInput] = useState(''); // Champ d'entrée pour issue

  // Ajout d'une compétence
  const handleAddSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  // Suppression d'une compétence
  const handleRemoveSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Ajout d'un issue
  const handleAddIssue = () => {
    if (issueInput.trim() && !issues.includes(issueInput.trim())) {
      setIssues([...issues, issueInput.trim()]);
      setIssueInput('');
    }
  };

  // Suppression d'un issue
  const handleRemoveIssue = (index) => {
    setIssues(issues.filter((_, i) => i !== index));
  };

  // Soumission du formulaire
  const onFormSubmit = (data) => {
    const formData = { ...data, skills, issues };
    handleProjectSubmit(formData);
    reset();
    setSkills([]);
    setIssues([]);
  };

  return (
    <form className='project-form' onSubmit={handleSubmit(onFormSubmit)}>
      <h2 className='project-form__title'>Nouveau projet</h2>

      {/* Champ Titre */}
      <div className='project-form__group'>
        <label htmlFor='title'>Titre du projet</label>
        <input
          id='title'
          {...register('title', { required: true })}
          placeholder='Ex: Mon nouveau projet'
          className='project-form__input'
        />
      </div>

      {/* Champ Image */}
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

      {/* Champ Description */}
      <div className='project-form__group'>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          {...register('description', { required: true })}
          placeholder='Décrivez votre projet ici...'
          className='project-form__textarea'
        />
      </div>

      {/* Champ Skills */}
      <div className='project-form__group'>
        <label htmlFor='skills'>Compétences</label>
        <div className='project-form__skills-issues'>
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

      {/* Liste des compétences */}
      <ul className='project-form__skills-issues--list'>
        {skills.map((skill, index) => (
          <li key={index} className='project-form__skills-issues--item'>
            {skill}
            <Button Text='Suppr' onClick={() => handleRemoveSkill(index)} />
          </li>
        ))}
      </ul>

      {/* Champ Issues */}
      <div className='project-form__group'>
        <label htmlFor='issues'>Problématiques</label>
        <div className='project-form__skills-issues'>
          <textarea
            id='issues'
            value={issueInput}
            onChange={(e) => setIssueInput(e.target.value)}
            placeholder='Ajoutez une problématique'
            className='project-form__input'
          />
          <button
            type='button'
            onClick={handleAddIssue}
            className='project-form__add-button'
          >
            Ajouter
          </button>
        </div>
      </div>

      {/* Liste des issues */}
      <ul className='project-form__skills-issues--list'>
        {issues.map((issue, index) => (
          <li key={index} className='project-form__skills-issues--item'>
            {issue}
            <Button Text='Suppr' onClick={() => handleRemoveIssue(index)} />
          </li>
        ))}
      </ul>

      {/* Champ Github */}
      <div className='project-form__group'>
        <label htmlFor='github'>Lien Github</label>
        <input
          id='github'
          {...register('github', { required: true })}
          placeholder='lien github'
        />
      </div>

      {/* Bouton Submit */}
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
