import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // Example: Create your Home component
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <div
      className="bg-[#0c0f11] px-0 md:px-24 lg:px-48 xl:px-60 2xl:px-96"
      style={{
        margin: "auto",
        maxWidth: "47.5rem",
        padding: "1.5rem 1.45rem",
        fontSize: "1.1rem",
        lineHeight: "34px",
        letterSpacing: "0.9px",
      }}
    >
      <Router>
        {/* Apply padding on both left and right */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
