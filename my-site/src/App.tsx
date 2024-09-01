import Home from "./components/Home";
import Navigation from "./components/Navigation";
import "./styles/base.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
