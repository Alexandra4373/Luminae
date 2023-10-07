import { Logo, Luminae } from "../assets";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="">
        <div className="">
          <div className="">
            <img src={Logo} />
            <img src={Luminae} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
