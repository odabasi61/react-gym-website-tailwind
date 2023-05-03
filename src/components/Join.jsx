import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xwl5dfc",
        "template_267m5ra",
        form.current,
        "7VO9V-Y_isjzGPu-V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join flex flex-col sm:flex-row m-auto sm:m-0 gap-4 items-center px-4 pb-8">
      <div className="left w-full">
        <hr />
        <div className="programs-header flex flex-col text-center gap-4 justify-center uppercase italic font-bold text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-white pt-2">
          <div className="flex gap-4">
            <span className="stroke">Ready to</span>
            <span>level up</span>
          </div>
          <div className="flex gap-4">
            <span>your body</span>
            <span className="stroke">with us?</span>
          </div>
        </div>
      </div>
      <div className="right w-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="email-container flex gap-4 bg-gray-500 py-4 px-8 w-fit"
        >
          <input
            className="outline-none bg-transparent"
            type="email"
            name="user_email"
            placeholder="Enter your email here..."
          />
          <button
            type="submit"
            className="btn bg-[var(--orange)] text-white hover:bg-white hover:text-[var(--orange)]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
