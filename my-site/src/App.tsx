import AnimatedBackground from "./components/Background";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import NoDemo from "./components/NoDemo";
import WelcomeScreen from "./components/WelcomeScreen";
import "./styles/base.css";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>
      {!showWelcome && (
        <>
          <Navigation />
          <AnimatedBackground />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/no" element={<NoDemo />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
