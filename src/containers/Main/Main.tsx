import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {

  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-md-4'>
          <Sidebar />
        </div>
        <div className='col-md-8'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
