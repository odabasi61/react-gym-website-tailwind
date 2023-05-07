import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Support from "../pages/Support";
import NotFound from "../pages/NotFound";
import Strength from "../pages/Strength";
import Cardio from "../pages/Cardio";
import Fat from "../pages/Fat";
import Fitness from "../pages/Fitness";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
          <Route path="strength" element={<Strength />} />
          <Route path="cardio" element={<Cardio />} />
          <Route path="fat" element={<Fat />} />
          <Route path="fitness" element={<Fitness />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
