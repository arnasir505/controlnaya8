import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import QuoteEditor from './containers/QuoteEditor/QuoteEditor';
import Main from './containers/Main/Main';
import QuoteList from './components/QuoteList/QuoteList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/quotes' element={<Main />}>
          <Route path=':id' element={<QuoteList />} />
        </Route>
        <Route path='/add-quote' element={<QuoteEditor />} />
        <Route path='/quotes/:id/edit' element={<QuoteEditor />} />
        <Route
          path='*'
          element={<h1 className='text-center mt-5'>Not Found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
