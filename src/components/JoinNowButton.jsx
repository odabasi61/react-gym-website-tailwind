import { MdOutlineJoinFull } from "react-icons/md";

const JoinNowButton = () => {
  return (
    <div>
      <button className="flex gap-2 items-center justify-center py-1 px-2 font-bold border-2 border-white bg-white text-[var(--orange)] hover:bg-[var(--orange)] hover:text-white duration-300 w-full">
        <span>Join Now</span>
        <MdOutlineJoinFull />
      </button>
    </div>
  );
};

export default JoinNowButton;
