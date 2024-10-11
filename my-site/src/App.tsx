import Home from "./components/Home";
import Navigation from "./components/Navigation";
import NoDemo from "./components/NoDemo";
import "./styles/base.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/no" element={<NoDemo />} />
      </Routes>
    </>
  );
}

export default App;
