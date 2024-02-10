import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'><Sidebar/></div>
        <div className='col-md-8'>quotes</div>
      </div>
    </div>
  );
};

export default Home;
