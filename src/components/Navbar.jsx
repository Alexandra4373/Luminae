// import React from "react";
import { Logo, Luminae, Social, Search } from "../assets";

const Navbar = () => {
  return (
    <div className="">
      <div className="container">
        <div className=" flex  items-center justify-between  py-4 ">
          <div className="flex gap-5">
            <img src={Logo} />
            <img src={Luminae} />
          </div>
          <div className="flex border rounded">
            <label>
              <input type="text" id="search" placeholder="Search products" />
            </label>
            <br />
            <label></label>
            <select id="category">
              <option value="all">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
            <img src={Search} className="w-1/6 h-1/6" />
          </div>
          <div className="">
            <ul className=" flex gap-10">
              <li>
                <a href="#About">About us</a>
              </li>
              <li>
                <a href="#Blog">Blog</a>
              </li>
              <li>
                <a href="#Contact Us">Contact Us</a>
              </li>
              <li>
                <a href="#Help & Support">Help & Support</a>
              </li>
            </ul>
          </div>
          <div className="gap-5">
            <img src={Social} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
