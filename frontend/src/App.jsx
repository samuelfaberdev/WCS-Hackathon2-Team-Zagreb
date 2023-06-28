import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import PageConnexion from "./pages/PageConnexion"

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/connexion" element={<PageConnexion />} />
      </Routes>
    </>
  );
}

export default App;
