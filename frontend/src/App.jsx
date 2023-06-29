import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

// import des layouts
import LayoutMain from './layouts/LayoutMain';
import LayoutConnect from './layouts/LayoutConnect';
// import des pages
import PageConnexion from './pages/PageConnexion';
import UsersMetierPage from './pages/UsersMetierPage';
import PageMotDePasseOublier from './pages/PageMotDePasseOublier';
import CaracteristiquesPage from './pages/CaracteristiquesPage';
import PageNouveauMotDePasse from './pages/PageNouveauMotDePasse';
import Model from './pages/Model';
import Systeme from './pages/Systeme';
import FAQPage from './pages/FAQPage';
// import des composants
import SmartPhone from './components/SmartPhone';
// import de la 404
import Page404 from './pages/Page404';

// import du CSS
import './App.css';
import Popup from './components/Popup';

function App() {
  const location = useLocation();
  const isLogged = location.pathname.startsWith('/app');
  const [buttonPopup, setButtonPopup] = useState(true);

  return isLogged ? (
    // Routes principales une fois loggé
    <LayoutMain>
      <Routes>
        <Route path="/app/" element={<UsersMetierPage />} />
        <Route path="/app/modele" element={<Model />} />
        <Route path="/app/systeme" element={<Systeme />} />
        <Route
          path="/app/popup"
          element={<Popup trigger={buttonPopup} setTrigger={setButtonPopup} />}
        />
        <Route
          path="/app/caracteristiques"
          element={<CaracteristiquesPage />}
        />
        <Route path="/app/faq" element={<FAQPage />} />
        <Route path="/app/testphone" element={<SmartPhone />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutMain>
  ) : (
    // Routes de connexion et oublie mot de passe
    <LayoutConnect>
      <Routes>
        <Route path="/nouveau-motdepasse" element={<PageNouveauMotDePasse />} />
        <Route path="/renitialiser" element={<PageMotDePasseOublier />} />
        <Route path="/" element={<PageConnexion />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutConnect>
  );
}

export default App;
