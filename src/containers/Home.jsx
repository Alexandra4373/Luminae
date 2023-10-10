// import React from 'react'
import { Navbar, Categories } from "../components";
import { header, shop } from "../assets";
import homeData from "../components/Data/HomeData.jsx";

const Home = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <Navbar />
          <Categories />

          <div className="container flex py-10 text-white">
            <div className="flex-1 m-0">
              <img src={header} />
            </div>

            <div className="flex-1 m-0 bg-primary  justify-center text-center ">
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
              <h1 className="">Flash Sales</h1>
            </div>
            <div className="">
              {homeData.map((product) => (
                <div className="" key={product.id}>
                  {/* Product Image */}
                  <div className="">
                    <img src={product.image} alt={product.name} />
                  </div>

                  {/* Product Information */}
                  <div className="">
                    {/* Product Name */}
                    <p className="">{product.name}</p>

                    {/* Product Details */}
                    <p className="">{product.details}</p>

                    {/* Price Section */}
                    <div className="">
                      {/* Selling Price */}
                      <p className="">{product.sellingprice}</p>

                      {/* Initial Price (with strikethrough) */}
                      <p className="">
                        <span className="strikethrough">
                          {product.initialprice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
