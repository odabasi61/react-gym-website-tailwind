import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero flex justify-between">
      <div className="left p-4">
        <Header />
      </div>
      <div className="right">right</div>
    </div>
  );
};

export default Hero;
