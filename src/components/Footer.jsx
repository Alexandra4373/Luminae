import pay from "../assets";
const Footer = () => {
  return (
    <div>
      <div className=" container py-20 p-20">
        <div className="flex gap-10">
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
      <div className="">
        <div className="">
          <img src={pay} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
