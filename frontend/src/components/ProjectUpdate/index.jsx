import { fetchProjects } from '../../api';
import { useState, useEffect } from 'react';
import useDeleteProject from '../../utils/hooks/useDeleteProject';
import './style.scss';

const ProjectUpdate = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    deleteProject,
    isLoading: isDeleting,
    error: deleteError,
  } = useDeleteProject();

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        console.error(
          'Erreur lors de la récupération des projets:',
          err.message,
        );
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  const handleDelete = async (projectId) => {
    await deleteProject(projectId);
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project._id !== projectId),
    );
  };

  return (
    <div>
      <h2>Mise à jour des Projets</h2>

      {loading && <p>Chargement des projets...</p>}
      {error && <p className='error-message'>Erreur : {error}</p>}
      {deleteError && (
        <p className='error-message'>Erreur suppression : {deleteError}</p>
      )}

      {!loading && projects.length === 0 && <p>Aucun projet à afficher</p>}

      {!loading && projects.length > 0 && (
        <table className='project-table'>
          <thead className='project-table__header'>
            <tr>
              <th className='project-table__header-cell'>#</th>
              <th className='project-table__header-cell'>Nom du Projet</th>
              <th className='project-table__header-cell'>Image</th>
              <th className='project-table__header-cell'>Description</th>
              <th className='project-table__header-cell'>Compétences</th>
              <th className='project-table__header-cell'>Github</th>
              <th className='project-table__header-cell'>Actions</th>
            </tr>
          </thead>
          <tbody className='project-table__body'>
            {projects.map((project, index) => (
              <tr key={project._id} className='project-table__body-row'>
                <td className='project-table__body-row-cell'>{index + 1}</td>
                <td className='project-table__body-row-cell'>
                  {project.title}
                </td>
                <td className='project-table__body-row-cell project-table__body-row-cell--image'>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                    }}
                  />
                </td>
                <td className='project-table__body-row-cell'>
                  {project.description}
                </td>
                <td className='project-table__body-row-cell'>
                  {project.skills.join(', ')}
                </td>
                <td className='project-table__body-row-cell'>
                  {project.issues.join(', ')}
                </td>

                <td className='project-table__body-row-cell'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Lien Github
                  </a>
                </td>
                <td className='project-table__body-row-cell project-table__body-row-cell--actions'>
                  <button
                    className='project-table__button project-table__button--delete'
                    onClick={() => handleDelete(project._id)}
                    disabled={isDeleting} // Désactiver le bouton pendant la suppression
                  >
                    {isDeleting ? 'Suppression...' : 'Supprimer'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectUpdate;
