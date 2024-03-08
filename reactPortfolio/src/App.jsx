import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioCard from "./components/ProjectCard.jsx";
import NavigationBar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Jumbotron from "./components/Jumbotron.jsx";

function App() {
  return (
    <Router>
      <NavigationBar />
      {/* <Wrapper> */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </Wrapper> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
