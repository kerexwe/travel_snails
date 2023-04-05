import './App.css';
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Test';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>hello</h1>}/>
      <Route path='/test' element={<Test />} />
    </Routes>
  );
}

export default App;
