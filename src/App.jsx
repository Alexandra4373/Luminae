import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Blog } from "./containers";

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
