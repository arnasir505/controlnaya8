import QuoteList from '../../components/QuoteList/QuoteList';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Outlet, useParams } from 'react-router-dom';

const Main = () => {
  const params = useParams();
  return (
    <div className='container'>
      <div className='row py-5'>
        <div className='col-md-4'>
          <Sidebar />
        </div>
        <div className='col-md-8'>{params.id ? <Outlet /> : <QuoteList />}</div>
      </div>
    </div>
  );
};

export default Main;
