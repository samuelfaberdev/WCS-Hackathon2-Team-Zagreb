import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page404 from './pages/Page404';

import './App.css';
import CaracteristiquesPage from './pages/CaracteristiquesPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/caracteristiquespage"
          element={<CaracteristiquesPage />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
