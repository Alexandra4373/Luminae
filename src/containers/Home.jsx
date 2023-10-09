// import React from 'react'
import { Navbar, Categories } from "../components";
import { header, shop } from "../assets";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Navbar />
          <Categories />

          <div className="container flex">
            <div className="flex-1">
              <img src={header} />
            </div>

            <div className="flex-1 bg-primary items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
