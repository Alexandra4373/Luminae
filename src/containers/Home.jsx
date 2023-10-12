// import React from 'react'
import { Navbar, Categories } from "../components";
import { header, shop } from "../assets";
// import HomeData from "../components/Data/HomeData";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Navbar />
          <Categories />

          <div className="container flex py-10 text-white p-0">
            <div className="flex-1 m-0">
              <img src={header} />
            </div>

            <div className="flex-1 m-0 bg-primary  justify-center text-center p-0 ">
              <h1>KIMONOS,CAFTANS & PAREOS</h1>
              <h4>Poolside glam included From $4.99</h4>
              <div className="flex">
                <img src={shop} />
                <button type="button">
                  <p>SHOP NOW</p>
                </button>
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <h4>Summer Essentials</h4>
              <h5>20% off</h5>
            </div>
            <div className="bg-[#fff]">
              <p>19 July-30 July</p>
            </div>
          </div>
          {/* <div className="">
            <div className="">
              <h1 className="">Flash Sales</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
