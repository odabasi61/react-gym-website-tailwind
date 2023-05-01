import Header from "./Header";
import heroImg from "../assets/hero_image.png";
import heroImgBack from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero flex justify-between">
      <div className="left w-[75%] p-4 flex gap-8 flex-col">
        <Header />

        <div className="mt-16 rounded-[4rem] text-white uppercase bg-[#363d42] w-fit py-5 px-3 flex items-center justify-start z-10 relative">
          <div className="absolute bg-[var(--orange)] w-20 h-[80%] left-2 rounded-[3rem] z-20"></div>
          <span className="z-30">
            Transform your body, transform your life!
          </span>
        </div>

        <div className="hero-text flex flex-col gap-4 uppercase text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold">
          <div>
            <span className="stroke">Strong </span>
            <span>Body</span>
          </div>
          <div>
            <span>Strong Mind</span>
          </div>
          <div>
            <p>
              We believe that fitness is not just about looking good, it's about
              feeling good. Our state-of-the-art facility is designed to help
              you achieve your fitness goals and improve your overall
              well-being.
            </p>
          </div>
        </div>

        <div className="figures flex gap-8">
          <div className="flex flex-col">
            <span className="text-white text-2xl lg:text-3xl xl:text-4xl">
              +100
            </span>
            <span className="uppercase text-[var(--gray)]">Expert Coaches</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl lg:text-3xl xl:text-4xl">
              +1000
            </span>
            <span className="uppercase text-[var(--gray)]">Members Joined</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl lg:text-3xl xl:text-4xl">
              +50
            </span>
            <span className="uppercase text-[var(--gray)]">
              Fitness Programs
            </span>
          </div>
        </div>

        <div className="hero-buttons flex gap-4">
          <button className="btn text-white bg-[var(--orange)] w-32">
            Get Started
          </button>
          <button className="btn text-white bg-transparent w-32 border-2 border-[var(--orange)]">
            Learn More
          </button>
        </div>
      </div>

      <div className="right w-[25%] p-4 bg-[var(--orange)] relative">
        <button className="btn absolute right-12 top-8 bg-white">
          Join Now
        </button>

        <div className="heart-rate flex flex-col gap-4 bg-[var(--darkGrey)] w-fit p-4 items-center rounded-lg absolute right-16 top-28">
          <img src={heart} alt="heart" className="w-8" />
          <span className="text-[var(--gray)]">Heart Rate</span>
          <span className="text-white text-xl">112 bpm</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
