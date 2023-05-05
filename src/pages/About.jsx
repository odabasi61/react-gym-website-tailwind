import salon from "../assets/salon.jpg";
import HomePageButton from "../components/HomePageButton";

const About = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="w-[90vw] sm:w-[80vw] h-[30vh] sm:h-[50vh] m-auto mb-10">
        <img
          src={salon}
          alt="gym center"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:px-8 lg:px-10 xl:px-16 text-white">
        <p className="pb-2">
          Welcome to{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span>! We
          are a state-of-the-art fitness facility dedicated to helping
          individuals of all fitness levels achieve their health and wellness
          goals.
        </p>
        <p className="pb-2">
          At <span className="font-bold text-[var(--orange)]">FitZone</span>, we
          believe that fitness is not just a hobby, but a way of life. Our team
          of experienced and certified fitness professionals are passionate
          about helping you achieve your fitness goals, whether you're looking
          to lose weight, build muscle, improve your endurance, or simply lead a
          healthier lifestyle.
        </p>
        <p className="pb-2">
          Our facility is equipped with the latest fitness equipment and
          amenities to make your workout experience enjoyable and effective. We
          offer a wide range of group fitness classes, including yoga, Pilates,
          cycling, and strength training, to keep your workouts fun and
          engaging.
        </p>
        <p className="pb-2">
          At <span className="font-bold text-[var(--orange)]">FitZone</span>, we
          understand that everyone's fitness journey is unique. That's why we
          offer personalized training and nutrition programs tailored to your
          individual needs and goals. Whether you're a beginner or a seasoned
          athlete, our team will work with you to develop a customized plan to
          help you reach your full potential.
        </p>
        <p className="pb-2">
          But fitness is not just about working out - it's about building a
          community. At{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span>, we
          foster a welcoming and supportive environment where members can
          connect with like-minded individuals and motivate each other to
          achieve their goals. We believe that together, we can achieve more.
        </p>
        <p className="pb-2">
          Thank you for considering{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span> as
          your fitness partner. We look forward to helping you achieve your best
          self.
        </p>
      </div>
    </div>
  );
};

export default About;
