const API_URL = import.meta.env.VITE_API_URL;

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_URL}/api/projects`);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    return [];
  }
};
