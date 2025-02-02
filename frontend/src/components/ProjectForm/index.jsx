import { useForm } from 'react-hook-form';
import { useState } from 'react';
import useProjectSubmit from '../../utils/hooks/useProjectSubmit';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import './style.scss';

const ProjectForm = () => {
  const { t } = useTranslation(); // Importation de la fonction de traduction
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
    // Vérifier si une image a été sélectionnée
    if (!data.image || data.image.length === 0) {
      console.error('Erreur : Aucune image sélectionnée.');
      return; // Si aucune image n'est sélectionnée, on arrête
    }

    // Créer un objet FormData pour envoyer les données
    const formData = new FormData();

    // Ajouter les autres informations dans FormData
    formData.append(
      'project',
      JSON.stringify({
        title: {
          fr: data.titleFr,
          en: data.titleEn,
        },
        description: {
          fr: data.descriptionFr,
          en: data.descriptionEn,
        },
        github: data.github,
        skills: skills, // Compétences sous forme de tableau
      }),
    );

    // Ajouter l'image à FormData (data.image[0] est le fichier)
    formData.append('image', data.image[0]);

    // Debugging - Voir les données envoyées
    console.log('Données envoyées au backend :', formData);

    // Appeler la fonction pour envoyer les données
    handleProjectSubmit(formData);

    // Réinitialiser le formulaire et les compétences
    reset();
    setSkills([]);
  };

  return (
    <form className='project-form' onSubmit={handleSubmit(onFormSubmit)}>
      <h2 className='project-form__title'>Nouveau projet</h2>

      <div className='project-form__group'>
        <label htmlFor='title.fr'>Titre</label>
        <input
          id='title.fr'
          name='title.fr'
          {...register('title.fr', { required: true })}
          placeholder='Titre du projet'
          className='project-form__input'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='title.en'>Titre en Anglais</label>
        <input
          id='title.en'
          name='title.en'
          {...register('title.en', { required: true })}
          placeholder='title of the project'
          className='project-form__input'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='image'>Image</label>
        <input
          id='image'
          name='image'
          type='file'
          accept='image/*'
          {...register('image', { required: true })}
          className='project-form__input'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='description.fr'>Description en français</label>
        <textarea
          id='description.fr'
          name='description.fr'
          {...register('description.fr', { required: true })}
          placeholder='description en français'
          className='project-form__textarea'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='description.en'>Description en anglais</label>
        <textarea
          id='description.en'
          name='description.en'
          {...register('description.en', { required: true })}
          placeholder='description in english'
          className='project-form__textarea'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='github'>{t('githubLink')}</label>
        <input
          id='github'
          name='github'
          {...register('github', { required: true })}
          placeholder='lien vers github'
        />
      </div>

      <div className='project-form__group'>
        <label htmlFor='skills'>{t('addSkills')}</label>
        <div className='project-form__skills'>
          <input
            id='skills'
            name='skills'
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder='Entrez une compétence'
            className='project-form__input'
          />
          <button
            type='button'
            onClick={handleAddSkill}
            className='project-form__add-button'
          >
            ajouter
          </button>
        </div>
      </div>

      <ul className='project-form__skills-list'>
        {skills.map((skill, index) => (
          <li key={index} className='project-form__skill-item'>
            {skill}
            <Button Text='supprimer' onClick={() => handleRemoveSkill(index)} />
          </li>
        ))}
      </ul>

      <Button
        Text={isLoading ? t('sending') : t('submit')}
        type='submit'
        className='project-form__submit-button'
        disabled={isLoading}
      />

      {error && <p className='project-form__error'>{error}</p>}
    </form>
  );
};

export default ProjectForm;
