import Header from "./Header";
import heroImg from "../assets/hero_image.png";
import heroImgBack from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import JoinNowButton from "./JoinNowButton";

const Hero = () => {
  return (
    <div className="hero flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between pb-16 lg:pb-24">
      <div className="blur h-[30rem] w-[22rem] lg:w-[30rem]"></div>
      <div className="left w-full lg:w-[75%] flex gap-8 flex-col">
        <Header />

        <div className="px-4">
          <div className="mt-16 rounded-[4rem] text-white uppercase bg-[#363d42] w-fit py-5 px-3 flex items-center justify-start z-10 relative">
            <div className="absolute bg-[var(--orange)] w-20 h-[80%] left-2 rounded-[3rem] z-20"></div>
            <span className="z-30 text-[12px] sm:text-lg">
              Transform your body, transform your life!
            </span>
          </div>
        </div>

        <div className="hero-text flex flex-col gap-4 px-4 uppercase text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold">
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

        <div className="figures flex flex-wrap items-center gap-8 px-4">
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
          <div className="calories flex gap-8 rounded-lg bg-[var(--caloryCard)] w-max p-3">
            <img src={calories} alt="calories" className="w-12" />
            <div className="flex flex-col justify-between">
              <span className="text-[var(--gray)]">Calories burned</span>
              <span className="text-white text-2xl">395 kcal</span>
            </div>
          </div>
        </div>

        <div className="hero-buttons flex gap-4 px-4">
          <button className="btn text-white bg-[var(--orange)] w-32 border-2 border-[var(--orange)] hover:bg-white hover:text-[var(--orange)]">
            Get Started
          </button>
          <button className="btn text-white bg-transparent w-32 border-2 border-[var(--orange)] hover:bg-white hover:text-[var(--orange)]">
            Learn More
          </button>
        </div>
      </div>

      <div className="right w-full lg:w-[25%] p-4 bg-[var(--orange)] relative">
        <div className="absolute right-2 sm:right-16 top-6">
          <JoinNowButton />
        </div>

        <div className="heart-rate flex flex-col gap-4 bg-[var(--darkGrey)] w-fit p-4 items-center rounded-lg absolute right-2 sm:right-16 top-28">
          <img src={heart} alt="heart" className="w-8" />
          <span className="text-[var(--gray)]">Heart Rate</span>
          <span className="text-white text-xl">112 bpm</span>
        </div>

        <img
          src={heroImg}
          alt="man with muscle"
          className="lg:absolute lg:top-40 lg:right-32 w-60 lg:w-80"
        />
        <img
          src={heroImgBack}
          alt="animation behind the pic"
          className="hidden lg:block absolute top-16 right-96 -z-10 w-60"
        />

        {/* <div className="calories flex gap-8 rounded-lg bg-[var(--caloryCard)] w-max p-4 absolute top-[32rem] right-[28rem]">
          <img src={calories} alt="calories" className="w-12" />
          <div className="flex flex-col justify-between">
            <span className="text-[var(--gray)]">Calories burned</span>
            <span className="text-white text-2xl">395 kcal</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
