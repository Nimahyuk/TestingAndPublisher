
import './App.css';
import { Route, Routes } from 'react-router';
import Presupuesto from './pages/presupuesto';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Presupuesto/>} />
    </Routes>
  );
}

export default App;
