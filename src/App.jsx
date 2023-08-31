import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Navbar } from "./importExports";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404, Page don't found.</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
