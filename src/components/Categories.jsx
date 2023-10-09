import React from "react";
import { Category, Men, Fav, Sign, Cart } from "../assets";

const Categories = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="container  text-white">
          <div className="flex items-center py-4">
            <img src={Category} />
            <h4 className="">Categories</h4>

            <div className="flex ">
              {/* <label> */}
              <select id="" className="bg-black text-white">
                <option value="all">USD</option>
                <option value="category1">Euro</option>
                <option value="category2">Cedis</option>
              </select>
              <select id="" className="bg-black text-white">
                <option value="all">English</option>
                <option value="category1">Spanish</option>
                <option value="category2">French</option>
              </select>
              {/* </label> */}

              <div className="flex">
                <img src={Men} />
                <div className="">
                  <p>Weekly Men's Toiletries Coupons</p>
                  <p>We extend exclusive discounts to our men clientele</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex">
                <img src={Sign} />
                <p>Sign in</p>
              </div>
              <div className="flex">
                <img src={Fav} />
                <p>Favorites</p>
              </div>
              <div className="flex">
                <img src={Cart} />
                <p>Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <ul className="flex items-center justify-between">
          <li>Woman</li>
          <li>Male</li>
          <li>Mother & Furniture</li>
          <li>SuperMarket</li>
          <li>Cosmetics</li>
          <li>Shoe & Bag</li>
          <li>Electronic</li>
          <li>Sport % Outdoor</li>
          <li>Best Seller</li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
