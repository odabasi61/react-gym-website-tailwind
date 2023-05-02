import { programsData } from "../helper/programsData";
import { AiOutlineArrowRight } from "react-icons/ai";

const Programs = () => {
  return (
    <div className="programs flex flex-col gap-8 px-2 pb-8">
      <div className="programs-header flex flex-col sm:flex-row gap-4 justify-center uppercase italic font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white">
        <span className="stroke">Explore our</span>
        <span>programs</span>
        <span className="stroke">to shape you</span>
      </div>

      <div className="program-categories flex flex-wrap xl:flex-nowrap gap-4 justify-center">
        {programsData.map((program) => (
          <div className="category flex flex-col bg-gray-600 p-4 lg:p-8 gap-4 text-white justify-between w-96">
            {program.image}
            <span className="font-bold text-2xl">{program.heading}</span>
            <span className="text-lg leading-6">{program.details}</span>
            <div className="join-now flex items-center gap-4">
              <span>Join now</span>
              <AiOutlineArrowRight className="text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
