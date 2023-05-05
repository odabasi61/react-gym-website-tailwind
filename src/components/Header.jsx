import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineArrowUp } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-scroll";

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
            <Link
              to="programs"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              <li>Programs</li>
            </Link>
            <Link to="why" smooth={true} duration={500} onClick={handleClose}>
              <li>Why us</li>
            </Link>
            <Link to="plan" smooth={true} duration={500} onClick={handleClose}>
              <li>Plans</li>
            </Link>
            <Link
              to="testimonial"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              <li>Testimonials</li>
            </Link>
          </ul>
        ) : (
          <ul className="header-menu hidden lg:flex gap-4 bg-transparent text-white list-none">
            <li>Home</li>
            <Link to="programs" smooth={true} duration={500}>
              <li>Programs</li>
            </Link>
            <Link to="why" smooth={true} duration={500}>
              <li>Why us</li>
            </Link>
            <Link to="plan" smooth={true} duration={500}>
              <li>Plans</li>
            </Link>
            <Link to="testimonial" smooth={true} duration={500}>
              <li>Testimonials</li>
            </Link>
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
      <a
        href="#"
        className="fixed p-1 rounded-full bottom-20 right-10 z-10 border-2 border-white bg-white text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white duration-300"
      >
        <AiOutlineArrowUp size={40} />
      </a>
    </div>
  );
};

export default Header;
