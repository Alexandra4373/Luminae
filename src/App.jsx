import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
// import { About, Blog, Contact } from "./containers";

function App() {
  return (
    <>
      <React.Fragment>
        <Routes>
          <Route path="Home" element={<Home />} />
        </Routes>
      </React.Fragment>
    </>
  );
}

export default App;
