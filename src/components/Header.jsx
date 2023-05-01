import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <img src={Logo} alt="logo" className="w-40 h-12" />
      <nav>
        <ul className="header-menu flex gap-4 text-white list-none">
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
