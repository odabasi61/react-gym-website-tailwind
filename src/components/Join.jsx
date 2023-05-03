import React from "react";

const Join = () => {
  return (
    <div className="join flex flex-col sm:flex-row m-auto gap-4 items-center px-4 pb-8">
      <div className="left w-full sm:w-1/2">
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
      <div className="right w-full sm:w-1/2">
        <form className="email-container flex gap-4 bg-gray-500 py-4 px-8 w-fit">
          <input
            className="outline-none ps-2"
            type="email"
            name="user-email"
            placeholder="Enter your email here..."
          />
          <button className="btn bg-[var(--orange)] text-white hover:bg-white hover:text-[var(--orange)]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
