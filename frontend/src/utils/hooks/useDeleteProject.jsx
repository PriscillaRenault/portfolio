import { useState } from 'react';

const useDeleteProject = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteProject = async (projectId) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects/${projectId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteProject, isLoading, error };
};

export default useDeleteProject;
