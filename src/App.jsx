import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Blog, About } from "./containers";
// import SubCategories from "./components/SubCategories";

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<About />} />
          <Route path="/" element={<Blog />} />
          {/* <Route path="" element={<Categories />} /> */}
          {/* <Route path="/women" element={<SubCategories />} /> */}
        </Routes>
      </React.Fragment>
      <Home />
    </>
  );
}

export default App;
