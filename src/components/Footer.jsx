// import react from "react";
import { pay, social } from "../assets";

const Footer = () => {
  return (
    <div>
      <div className="py-20">
        <div className="flex flex-col items-center justify-center ">
          <button>
            <p>Luminae Store</p>
            <p>
              Read your email not to miss the last minutes off + Free delivery
            </p>
            <label>
              <input type="text" placeholder="Enter you email"></input>
            </label>
          </button>
        </div>

        <div className="bg-gray">
          <div className=" container py-20 p-20">
            <div className="flex sm:flex-wrap gap-10">
              <div className="flex-1 ">
                <p className="lato text-[14px] font-bold mb-5">Company</p>
                <ul className="lato text-[14px] font-normal ">
                  <li className="">About Us</li>
                  <li className="">Our Store</li>
                  <li className="">Contact us</li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="lato text-[14px] font-bold mb-5">
                  Career Opportunities
                </p>
                <ul className="lato text-[14px] font-normal">
                  <li>Selling Programs</li>
                  <li>Advertise</li>
                  <li>Cooperation</li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="lato text-[14px] font-bold mb-5">How to buy</p>
                <ul className="lato text-[14px] font-normal">
                  <li>Making Payments</li>
                  <li>Delivering</li>
                  <li>Buyer Protection</li>
                  <li>New User Guide</li>
                </ul>
              </div>
              <div className="flex-1">
                <p className="lato text-[14px] font-bold mb-5">Help</p>
                <ul className="lato text-[14px] font-normal">
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-10">
          <div className="flex  justify-between sm:flex-wrap">
            <div className="">
              <img src={pay} />
            </div>
            <div className="">
              <select id="" className="text-black">
                <option value="all">English</option>
                <option value="category1"></option>
                <option value="category2"></option>
              </select>
            </div>
            <hr className="mb-24 bg-black" />
          </div>
        </div>
        <div className="container flex justify-between p-10">
          <div className=" sm:flex-wrap gap-5">
            <div className="">
              <p>165-179 Forster Road City of Monash, Melbourne, Australia</p>
            </div>
          </div>
          <div className="">
            <p>©2023 Copyright in reserved for lumine shop</p>
          </div>
          <div className="">
            <img src={social} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
