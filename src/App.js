import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes , Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/me/" element={<Home />} />
        <Route path="/project/" element={<Project />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
        <Route path="*" element={<Navigate to="/me/"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
