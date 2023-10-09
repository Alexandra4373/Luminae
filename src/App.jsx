import { Navbar, Categories, SubCategories } from "./components";
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import SubCategories from "./components/SubCategories";

function App() {
  return (
    <>
      {/* <React.Fragment>
        <Routes>
          <Route path="" element={<Navbar />} />
          <Route path="" element={<Categories />} />
          <Route path="/women" element={<SubCategories />} />
        </Routes>
      </React.Fragment> */}
      <Navbar />
      <Categories />
    </>
  );
}

export default App;
