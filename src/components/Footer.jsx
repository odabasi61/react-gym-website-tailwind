import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between items-center text-white text-center border-t-2 border-white py-8">
        <div>
          <ul className="flex gap-4 p-4 justify-center">
            <Link
              to={"about"}
              className="no-underline font-bold text-white hover:text-[var(--orange)] duration-300"
            >
              About Us
            </Link>
            <Link
              to={"contact"}
              className="no-underline font-bold text-white hover:text-[var(--orange)] duration-300"
            >
              Contact Us
            </Link>
            <Link
              to={"privacy"}
              className="no-underline font-bold text-white hover:text-[var(--orange)] duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to={"support"}
              className="no-underline font-bold text-white hover:text-[var(--orange)] duration-300"
            >
              Support
            </Link>
          </ul>
        </div>
        <div className="text-white border-t lg:border-none">
          <ul className="flex gap-4 p-4 lg:p-5 justify-center">
            <Link to={"https://github.com/odabasi61"}>
              <AiOutlineGithub
                size={40}
                className="text-white hover:text-[var(--orange)] duration-300 scale-105"
              />
            </Link>
            <Link to={"https://www.linkedin.com/in/ali-odaba%C5%9F%C4%B1/"}>
              <AiOutlineLinkedin
                size={40}
                className="text-white hover:text-[var(--orange)] duration-300 scale-105"
              />
            </Link>
            <Link to={"https://www.instagram.com/aliodabas_a/"}>
              <AiOutlineInstagram
                size={40}
                className="text-white hover:text-[var(--orange)] duration-300 scale-105"
              />
            </Link>
          </ul>
        </div>
        <div>
          <div className="p-4 border-t lg:border-none">
            <p>
              copyrigths &copy; {new Date().getFullYear()},{" "}
              <Link
                to={"https://github.com/odabasi61"}
                className="no-underline font-bold text-white hover:text-[var(--orange)] duration-300"
              >
                Ali ODABAŞI
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
