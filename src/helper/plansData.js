import { FaCrown } from 'react-icons/fa';
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiHeartWings } from 'react-icons/gi';

export const plansData = [
  {
    icon: (
      <GiHeartWings className='text-xl text-[var(--orange)]' />
    ),
    name: "BASIC PLAN",
    price: "25",
    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: (
     <FaCrown className='text-xl' />
    ),
    name: "PREMIUM PLAN",
    price: "30",
    features: [
      "5 hours of excercises",
      "Free consultaion of Coaches",
      "Access to minibar and snacks",
    ],
  },
  {
    icon: (
      <GiWeightLiftingUp className='text-xl text-[var(--orange)]' />
    ),
    name: "PRO PLAN",
    price: "45",
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
