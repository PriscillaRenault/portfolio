import ProjectUpdate from '../../components/ProjectUpdate';
import Logout from '../../components/logout';
import ProjectForm from '../../components/ProjectForm';

function Dashboard() {
  return (
    <>
      <h1>Tableau de Bord</h1>
      <Logout />
      <ProjectForm />
      <ProjectUpdate />
    </>
  );
}
export default Dashboard;
