import React from "react";
import { Logo, Luminae } from "../assets";

const Blog = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={Logo} />
          <img src={Luminae} />
        </div>

        <div className="">
          <ul className=" flex gap-10">
            <li>
              <a href="#About">NEWS</a>
            </li>
            <li>
              <a href="#Blog">FASHION</a>
            </li>
            <li>
              <a href="#Contact Us">HEALTH</a>
            </li>
            <li>
              <a href="#Help & Support">TECH</a>
            </li>
            <li>
              <a href="#Help & Support">SCIENCE</a>
            </li>
          </ul>
        </div>

        <p>Stunning barefooted woman of 2023</p>

        <p>
          In the heart of a chic urban studio, the atmosphere buzzed with
          excitement as a trendy fur coat took center stage during a vibrant
          photoshoot.
        </p>
      </div>
    </div>
  );
};

export default Blog;
