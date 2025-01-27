import Gallery from '../../components/Gallery';
import Button from '../../components/Button';
import Logout from '../../components/logout';
import ProjectForm from '../../components/ProjectForm';

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Logout />
      <ProjectForm />
      <Gallery>
        {(projects) => (
          <div className='project__item--actions'>
            <Button
              className='btn btn-delete'
              Text='Supprimer'
              onClick={() => console.log(`Supprimer ${projects.id}`)}
            />
          </div>
        )}
      </Gallery>
    </>
  );
}
export default Dashboard;
