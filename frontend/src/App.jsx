import { Routes, Route, useLocation } from "react-router-dom";

import LayoutMain from "./layouts/LayoutMain";
import LayoutConnect from "./layouts/LayoutConnect";
import Connexion from "./pages/Connexion";
import UsersMetierPage from "./pages/UsersMetierPage";
import Page404 from "./pages/Page404";
import "./App.css";

function App() {
  const location = useLocation();
  const isLogged = location.pathname.startsWith("/app");

  return isLogged ? (
    <>
      <LayoutMain>
        <Routes>
          <Route path="/app/" element={<UsersMetierPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LayoutMain>
    </>
  ) : (
    <LayoutConnect>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LayoutConnect>
  );
}

export default App;
