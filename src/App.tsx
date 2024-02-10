import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import QuoteEditor from './containers/QuoteEditor/QuoteEditor';
import Main from './containers/Main/Main';
import { CATEGORIES } from './constants';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/quotes' element={<Main />}>
          {CATEGORIES.map((category) => (
            <Route
              path={category.id}
              element={<span>{category.title}</span>}
              key={category.id}
            />
          ))}
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
