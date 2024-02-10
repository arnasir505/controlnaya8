import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import QuoteEditor from './components/QuoteEditor/QuoteEditor';
import Home from './containers/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quotes' element={<Home />} />
        <Route path='/add-quote' element={<QuoteEditor />} />
        <Route
          path='*'
          element={<h1 className='text-center mt-5'>Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
