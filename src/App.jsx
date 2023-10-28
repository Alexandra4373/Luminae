import React from "react";
import { Routes, Route } from "react-router-dom";
import { Blog, About } from "./containers";
// import SubCategories from "./components/SubCategories";

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="" element={<Categories />} /> */}
          {/* <Route path="/women" element={<SubCategories />} /> */}
        </Routes>
      </React.Fragment>
      {/* <Home />
      <About /> */}
    </>
  );
}

export default App;
