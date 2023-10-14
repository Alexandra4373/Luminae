// import React from 'react'
import {Navbar, Categories} from "../components";
import {header, shop} from "../assets";
// import HomeData from "../components/Data/HomeData";

const Home = () => {
	return (
		<>
			<Navbar />

			<Categories />

			<div className="container flex text-white">
				<div className="min-w-min">
					<img src={header} className="" />
				</div>

				<div className="flex-1 bg-primary flex flex-col justify-center items-center">
					<div className="text-center">
						<h1>KIMONOS,CAFTANS & PAREOS</h1>
						<h4>Poolside glam included From $4.99</h4>
					</div>
					<div className="">
						<button type="button" className="flex gap-5 bg-second px-4 py-2">
							<img src={shop} />
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
		</>
	);
};

export default Home;
