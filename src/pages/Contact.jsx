import { BsFillSendFill } from "react-icons/bs";
import HomePageButton from "../components/HomePageButton";

const Contact = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-6 md:p-12 text-white">
        <p className="text-center pb-3">
          Welcome to the Contact Page of{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span>{" "}
          Fitness Center!
        </p>
        <p className="text-center pb-6">
          We value your feedback and are committed to providing you with the
          best possible customer service. Please fill and send the form below to
          contact us.
        </p>
        <h2 className="text-center pb-6 font-bold text-xl md:text-2xl lg:text-3xl">
          Contact Us
        </h2>
        <div>
          <form className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 m-auto">
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name">First name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="outline-none py-1 ps-2"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                id="lastname"
                placeholder="Your last name"
                className="outline-none py-1 ps-2"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                placeholder="Your phone number"
                className="outline-none py-1 ps-2"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="outline-none py-1 ps-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                className="resize-none outline-none py-1 ps-2"
                id="message"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex justify-center pt-4">
              <button className="text-[var(--orange)] bg-white hover:bg-[var(--orange)] hover:text-white duration-300 border border-[var(--orange)] font-bold py-2 w-full mb-16 flex gap-2 items-center justify-center">
                <span>Send</span>
                <BsFillSendFill />
              </button>
            </div>
          </form>
        </div>
        <p className="text-center pb-6">
          Please feel free to reach out to us with any questions, comments, or
          concerns you may have. We look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default Contact;
