import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import QuoteEditor from './components/QuoteEditor/QuoteEditor';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/add-quote' element={<QuoteEditor />} />
      </Routes>
    </>
  );
}

export default App;
