import Join from "../components/Join";
import Plans from "../components/Plans";
import Programs from "../components/Programs";
import Reasons from "../components/Reasons";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
};

export default Home;
