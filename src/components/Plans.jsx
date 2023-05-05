import { plansData } from "../helper/plansData";
import tick from "../assets/whiteTick.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import JoinNowButton from "./JoinNowButton";

const Plans = () => {
  return (
    <div name="plan" className="plans-container pb-16 lg:pb-24">
      <div className="blur sm:w-[100vw] sm:h-[50vh]"></div>
      <div className="programs-header flex flex-col text-center sm:flex-row gap-4 pb-8 justify-center uppercase italic font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white">
        <span className="stroke">Ready to start</span>
        <span>your journey</span>
        <span className="stroke">with us</span>
      </div>

      <div className="plans flex flex-col sm:flex-row items-center justify-center gap-6 px-4">
        {plansData.map((plans, i) => (
          <div
            key={i}
            className="plan flex flex-col bg-[var(--caloryCard)] p-4 text-white gap-4 w-60"
          >
            {plans.icon}
            <span>{plans.name}</span>
            <span>
              $ {plans.price}
              <span className="text-sm">/ month</span>
            </span>
            <div className="features flex flex-col gap-2">
              {plans.features.map((feature, index) => (
                <div key={index} className="feature flex gap-2 items-center">
                  <img className="w-4" src={tick} alt="tick icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span>See more benefits </span>
              <AiOutlineArrowRight className="text-2xl" />
            </div>
            <JoinNowButton />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
