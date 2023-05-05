import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePageButton = () => {
  return (
    <Link to={"/"}>
      <button className="flex gap-2 items-center p-2 border border-[var(--orange)] text-[var(--orange)] bg-white hover:bg-[var(--orange)] hover:text-white duration-300 font-bold">
        <AiOutlineArrowLeft />
        <span>Homepage</span>
      </button>
    </Link>
  );
};

export default HomePageButton;
