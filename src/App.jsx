import { Navbar, Categories } from "./components";

// import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <React.Fragment>
        <Routes>
          <Route path="Home" element={<Home />} />
        </Routes>
      </React.Fragment> */}
      <Navbar />
      <Categories />
    </>
  );
}

export default App;
