import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
