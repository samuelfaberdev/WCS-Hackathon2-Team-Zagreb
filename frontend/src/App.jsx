import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

import "./App.css";
import Model from "./components/Model";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Modele" element={<Model />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
