import Button from '../Button';

const disconnect = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};

const Logout = () => {
  return (
    <Button
      Text='DECONNEXION'
      onClick={disconnect}
      className='btn btn-delete'
    ></Button>
  );
};

export default Logout;
