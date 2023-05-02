import { GiWeightLiftingUp } from "react-icons/gi";
import { MdDirectionsRun } from "react-icons/md";
import { GoFlame } from "react-icons/go";
import { BsFillHeartPulseFill } from "react-icons/bs";

export const programsData = [
  {
    image: <GiWeightLiftingUp className="w-8 h-8" />,
    heading: "Strength Training",
    details:
      "In this program, you are trained to improve your strength through many exercises.",
  },
  {
    image: <MdDirectionsRun className="w-8 h-8" />,
    heading: "Cardio Training",
    details:
      "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    image: <GoFlame className="w-8 h-8" />,
    heading: "Fat Burning",
    details:
      "This program is suitable for you who wants to get rid of your fat and lose their weight.",
  },
  {
    image: <BsFillHeartPulseFill className="w-8 h-8" />,
    heading: "Health Fitness",
    details:
      "This programs is designed for those who exercises only for their body fitness not body building.",
  },
];
