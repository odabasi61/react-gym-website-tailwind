import { Link } from "react-router-dom";
import { programsData } from "../helper/programsData";
import { AiOutlineArrowRight } from "react-icons/ai";

const Programs = () => {
  return (
    <div
      name="programs"
      className="programs flex flex-col gap-8 px-2 pb-16 lg:pb-24"
    >
      <div className="programs-header flex flex-col text-center sm:flex-row gap-4 justify-center uppercase italic font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white">
        <span className="stroke">Explore</span>
        <span>our</span>
        <span className="stroke">programs</span>
        <span>to shape</span>
        <span className="stroke">you</span>
      </div>

      <div className="program-categories flex flex-wrap xl:flex-nowrap gap-4 justify-center">
        {programsData.map((program, i) => (
          <Link
            to={program.goTo}
            key={i}
            className="category flex flex-col bg-gray-600 p-4 lg:p-8 gap-4 text-white justify-between w-96 cursor-pointer"
          >
            {program.image}
            <span className="font-bold text-2xl">{program.heading}</span>
            <span className="text-lg leading-6">{program.details}</span>
            <div className="join-now flex items-center gap-4">
              <span>Join now</span>
              <AiOutlineArrowRight className="text-2xl" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programs;
