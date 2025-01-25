import Gallery from '../../components/Gallery';
import Button from '../../components/Button';

function Dashboard() {
  return (
    <>
      <Button className='btn btn-add'>Ajouter un projet</Button>
      <Gallery>
        {(projects) => (
          <div className='project__item--actions'>
            <Button
              className='btn btn-edit'
              onClick={() => console.log(`Modifier ${projects.id}`)}
            >
              Modifier
            </Button>
            <Button
              className='btn btn-delete'
              onClick={() => console.log(`Supprimer ${projects.id}`)}
            >
              Supprimer
            </Button>
          </div>
        )}
      </Gallery>
    </>
  );
}
export default Dashboard;
