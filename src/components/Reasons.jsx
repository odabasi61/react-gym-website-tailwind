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

      <div className="left flex gap-4 w-full">
        <div className="w-[30%]">
          <img className="h-full" src={image1} alt="bodybuilder man" />
        </div>
        <div className="w-[70%] flex flex-col gap-4 h-full">
          <div className="h-1/2">
            <img src={image2} alt="bodybuilder man" />
          </div>
          <div className="flex gap-4 h-1/2">
            <div className="w-1/2">
              <img src={image3} alt="bodybuilder man" />
            </div>
            <div className="w-1/2">
              <img src={image4} alt="bodybuilder man" />
            </div>
          </div>
        </div>
      </div>

      <div className="right font-bold uppercase w-full">
        <span className=" text-[var(--orange)]">Some reasons</span>
        <div className="text-white text-xl md:text-3xl lg:text-4xl xl:text-5xl py-4">
          <span className="stroke">Why </span>
          <span>Chose us?</span>
        </div>

        <div className="details flex flex-col gap-4 pb-4">
          <div className="flex items-center gap-4 text-white">
            <img src={tick} alt="tick logo" />
            <span>+100 EXPER COACHES</span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <img src={tick} alt="tick logo" />
            <span>RELIABLE PARTNERS</span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <img src={tick} alt="tick logo" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="flex items-center gap-4 text-white">
            <img src={tick} alt="tick logo" />
            <span>1 MONTH FREE FOR NEW MEMBERS</span>
          </div>
        </div>
        <span className="text-[var(--gray)] font-normal">OUR PARTNERS</span>
        <div className="partners flex gap-4 pt-2">
          <img src={nb} alt="nb icon" />
          <img src={adidas} alt="adidas icon" />
          <img src={nike} alt="nike icon" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
