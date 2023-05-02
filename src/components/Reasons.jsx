import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons px-8 flex gap-4 flex-col-reverse sm:flex-row">
      <div className="left">
        <img src={image1} alt="bodybuilder man" />
        <img src={image2} alt="bodybuilder man" />
        <img src={image3} alt="bodybuilder man" />
        <img src={image4} alt="bodybuilder man" />
      </div>
      <div className="right">
        <span>Some reasons</span>
        <div>
          <span className="stroke">Why</span>
          <span>Chose us?</span>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
