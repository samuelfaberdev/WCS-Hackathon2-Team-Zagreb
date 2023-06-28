import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";

import "./App.css";
import UsersMetierPage from "./pages/UsersMetierPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-metier" element={<UsersMetierPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
