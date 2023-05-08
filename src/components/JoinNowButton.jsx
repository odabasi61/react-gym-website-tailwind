import { MdOutlineJoinFull } from "react-icons/md";
import { Link } from "react-router-dom";

const JoinNowButton = () => {
  return (
    <Link to={"login"}>
      <button className="flex gap-2 items-center justify-center py-1 px-2 font-bold border-2 border-white bg-white text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white duration-300 w-full">
        <span>Join Now</span>
        <MdOutlineJoinFull />
      </button>
    </Link>
  );
};

export default JoinNowButton;
