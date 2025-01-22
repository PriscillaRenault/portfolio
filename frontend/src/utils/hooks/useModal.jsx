import { useState } from 'react';
import projectsData from '../../data/projects.json';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const openModal = (id) => {
    console.log('Ouverture de la modale pour le projet ID:', id); // Debugging
    const project = projectsData.find((proj) => proj.id === id);
    if (project) {
      setSelectedProjectId(project);
      setIsOpen(true); // Modifie l'état pour ouvrir la modale
    } else {
      console.warn('Aucun projet trouvé pour cet ID:', id);
    }
  };

  const closeModal = () => {
    setSelectedProjectId(null);
    setIsOpen(false);
  };

  // Trouver l'objet projet correspondant à l'id sélectionné
  const selectedProject = selectedProjectId
    ? projectsData.find((project) => project.id === selectedProjectId)
    : null;

  console.log(selectedProject);

  return { isOpen, selectedProject, openModal, closeModal };
};
