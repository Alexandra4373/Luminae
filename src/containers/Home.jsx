// import React from 'react'
import { Categories, Footer } from "../components";
import {
  header,
  shop,
  Iphone,
  barbie,
  famous,
  throwback,
  best,
  left,
  right,
} from "../assets";
// import HomeData from "../components/Data/HomeData";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}

      <Categories />

      <div className="  py-10 flex text-white">
        <div className="min-w-min">
          <img src={header} className="" />
        </div>

        <div className="flex-1 bg-primary flex flex-col justify-center items-center">
          <div className="text-center">
            <h1>KIMONOS,CAFTANS & PAREOS</h1>
            <h4>Poolside glam included From $4.99</h4>
          </div>
          <div className="p-10">
            <button type="button" className="flex gap-5 bg-second  px-4 py-2">
              <img src={shop} />
              <p>SHOP NOW</p>
            </button>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className="">
          <button className="border ">
            <h4>Summer Essentials</h4>
            <h5>20% off</h5>
            <p className="bg-black text-white">19 July-30 July</p>
          </button>
        </div>
        {/* <div className="bg-black">
          <p>19 July-30 July</p>
        </div> */}
      </div>

      <div className="flex  gap-10 flex-row items-center justify-center">
        <div className="flex">
          <div className="flex-1 border-none rounded-none bg-red flex flex-col justify-center">
            <p>
              Never-Ending
              <br />
              Summer
            </p>
            <p>
              Throwback Shirts &<br />
              all-day dressed
            </p>
            <h6>Explore all category</h6>
          </div>
          <div className="flex-1">
            <img src={throwback} />
          </div>
        </div>

        <div className="flex">
          <div className="flex-1 flex-1 border-none rounded-none bg-green flex flex-col justify-center">
            <p>
              The most
              <br />
              famous sport <br /> brands
            </p>
            <p>Get in gym essentials</p>
            <h6>Explore all category</h6>
          </div>

          <div className="flex-1">
            <img src={famous} />
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="bg-mes">
          <div className="container ">
            <div className="flex items-center justify-between">
              <img src={left} />
              <p>
                MAGSAFE <br />
                Snap on a magnetic case, wallet, or both. And get faster <br />{" "}
                wireless charging
              </p>
              <img src={Iphone} />
              <img src={right} />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-20">
        <div className="flex gap-10 flex-row justify-center">
          <div className="flex">
            <div className="flex-1 border-none rounded-none bg-pinky flex flex-col justify-center ">
              <p>
                The Pinky
                <br />
                Barbie Edition
              </p>
              <p>Lets play dress up</p>
              <h6>Explore all category</h6>
            </div>

            <div className="flex-1">
              <img src={barbie} />
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex-1 border-none rounded-none bg-blue flex flex-col justify-center">
              <p>
                Best Sellers
                <br />
                Everyone Love
              </p>
              <p>poolside glam include</p>
              <h6>Explore all category</h6>
            </div>

            <div className="flex-1">
              <img src={best} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* <div className="">
            <div className="">
              <h1 className="">Flash Sales</h1>
            </div>
          </div> */}
    </>
  );
};

export default Home;
