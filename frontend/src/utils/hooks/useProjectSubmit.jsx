import { useState } from 'react';

const useProjectSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleProjectSubmit = async (data) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append(
      'project',
      JSON.stringify({
        title: data.title,
        description: data.description,
        github: data.github,
        skills: data.skills,
        issues: data.issues,
      }),
    );
    formData.append('image', data.image[0]);
    const API_URL = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${API_URL}/api/projects`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du projet");
      }

      alert('Projet enregistré avec succès !');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleProjectSubmit, isLoading, error };
};

export default useProjectSubmit;
