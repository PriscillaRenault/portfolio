import LoginForm from '../../components/LoginForm';
import './style.scss';

function Admin() {
  return (
    <div className='admin'>
      <h1 className='admin__title'>Portfolio Priscilla RENAULT</h1>
      <p className='admin__text'>Accès Réservé</p>
      <LoginForm />
    </div>
  );
}

export default Admin;
