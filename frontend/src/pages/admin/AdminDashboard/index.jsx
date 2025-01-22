import React, { useEffect, useState } from 'react';

const AdminDashboard = ({ token }) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  // Charger les projets
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/admin/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, [token]);

  // Supprimer un projet
  const deleteProject = async (id) => {
    try {
      const response = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Failed to delete project');
      }

      setProjects(projects.filter((project) => project._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.name}
            <button onClick={() => deleteProject(project._id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

<form
  onSubmit={async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newProject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error('Failed to add project');
      }

      const addedProject = await response.json();
      setProjects([...projects, addedProject]);
    } catch (err) {
      setError(err.message);
    }
  }}
>
  <input name='name' placeholder='Nom du projet' required />
  <button type='submit'>Ajouter</button>
</form>;
