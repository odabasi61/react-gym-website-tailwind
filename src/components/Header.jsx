import Logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleOpen = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="header p-4 flex justify-between items-center relative">
      <img src={Logo} alt="logo" className="w-40 h-12" />
      <nav className="flex items-center">
        {nav ? (
          <ul className="header-menu text-center px-[20%] pt-8 flex flex-col lg:hidden gap-8 bg-white list-none z-40 absolute top-0 left-0 w-full h-[100vh]">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
        ) : (
          <ul className="header-menu hidden lg:flex gap-4 bg-transparent text-white list-none">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
        )}

        {nav ? (
          <button onClick={handleClose} className="z-50">
            <HiXMark className="text-2xl lg:hidden" />
          </button>
        ) : (
          <button onClick={handleOpen} className="z-50">
            <AiOutlineMenu className="text-white text-2xl lg:hidden" />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
