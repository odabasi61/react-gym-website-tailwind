import HomePageButton from "../components/HomePageButton";

const Support = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4 md:px-8 text-white">
        <h2 className="text-2xl font-semibold">
          Welcome to the Support Page of{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span>{" "}
          Fitness Center!
        </h2>
        <p className="pb-10">
          We are committed to providing you with the best possible support and
          assistance in your fitness journey. Please find below the most
          commonly asked questions and concerns that our clients have and how to
          address them.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--orange)]">FAQs:</h2>

        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 rounded-t-xl hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                How do I become a member of{" "}
                <span className="font-bold text-[var(--orange)]">FitZone</span>{" "}
                Fitness Center?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div className="p-5 border border-b-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                To become a member of{" "}
                <span className="font-bold text-[var(--orange)]">FitZone</span>{" "}
                Fitness Center, please visit our website and select the
                membership plan that suits your needs. You can also visit our
                facility and speak with our staff to sign up in person.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-2"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span>What are the membership rates and plans available?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-2"
          >
            <div className="p-5 border border-b-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                We offer a range of membership plans to suit your needs and
                budget. Please visit our website or speak with our staff for
                more information on our rates and plans.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-3"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span>How can I update my membership information?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-3"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                You can update your membership information by logging in to your
                account on our website or by visiting our facility and speaking
                with our staff.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-4"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-4"
            >
              <span>
                What are the operating hours of{" "}
                <span className="font-bold text-[var(--orange)]">FitZone</span>{" "}
                Fitness Center?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-4"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                Our facility is open from 5am to 11pm, seven days a week. Please
                note that these hours are subject to change during holidays and
                special events.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-5">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-5"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-5"
            >
              <span>
                What amenities and equipment are available at{" "}
                <span className="font-bold text-[var(--orange)]">FitZone</span>{" "}
                Fitness Center?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-5"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-5"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                We offer a range of amenities and equipment, including cardio
                machines, strength training equipment, free weights, group
                fitness classes, personal training sessions, and more. Please
                visit our website or speak with our staff for a full list of our
                offerings.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-6">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-6"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-6"
            >
              <span>How can I cancel my membership?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-6"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-6"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                To cancel your membership, please visit our website and follow
                the instructions provided, or speak with our staff in person.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-7">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-1 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-7"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-7"
            >
              <span>What is the refund policy?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-7"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-7"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                We offer a 30-day money-back guarantee for new members who are
                not satisfied with our services. After the 30-day period,
                refunds are not available.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold pt-10 text-[var(--orange)]">
            Tutorials:
          </h2>

          <h2 id="accordion-collapse-heading-8">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 rounded-t-xl border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-8"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-8"
            >
              <span>How to schedule personal training sessions?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-8"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-8"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                To schedule a personal training session, please visit our
                website or speak with our staff in person to make an
                appointment.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-9">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-9"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-9"
            >
              <span>
                How to use the cardio equipment (treadmill, elliptical,
                stationary bike)?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-9"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-9"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                Please refer to the instructional guides posted near each piece
                of cardio equipment, or ask our staff for assistance.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-10">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-10"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-10"
            >
              <span>
                How to use the strength equipment (weight machines, free
                weights)?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-10"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-10"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                Please refer to the instructional guides posted near each piece
                of strength equipment, or ask our staff for assistance.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-11">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-1 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-11"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-11"
            >
              <span>How to access and use the online fitness classes?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-11"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-11"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                To access our online fitness classes, please visit our website
                and log in to your account. From there, you can browse our class
                schedule and select the classes you want to attend.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold pt-10 text-[var(--orange)]">
            Troubleshooting:
          </h2>

          <h2 id="accordion-collapse-heading-12">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 rounded-t-xl border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-12"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-12"
            >
              <span>
                How to troubleshoot common issues with cardio and strength
                equipment?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-12"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-12"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                If you experience any issues with our equipment, please let our
                staff know immediately. They can provide assistance and, if
                necessary, contact our maintenance team to resolve the issue.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-13">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-13"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-13"
            >
              <span>
                How to resolve login issues with the online fitness classes?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-13"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-13"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                If you are experiencing login issues with our online fitness
                classes, please ensure that you are using the correct username
                and password. If you continue to experience issues, please
                contact our technical support team for assistance.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-14">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-0 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-14"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-14"
            >
              <span>How to report equipment malfunction or damage?</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-14"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-14"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                If you notice any equipment malfunction or damage, please let
                our staff know immediately. They can provide assistance and, if
                necessary, contact our maintenance team to resolve the issue.
              </p>
            </div>
          </div>

          <h2 id="accordion-collapse-heading-15">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium text-left text-white border border-b-1 border-gray-200 hover:bg-gray-700 focus:bg-gray-700"
              data-accordion-target="#accordion-collapse-body-15"
              aria-expanded="false"
              aria-controls="accordion-collapse-body-15"
            >
              <span>
                How to address billing discrepancies or payment issues?
              </span>
              <svg
                data-accordion-icon
                className="w-6 h-6 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-15"
            className="hidden"
            aria-labelledby="accordion-collapse-heading-15"
          >
            <div className="p-5 border border-t-0 border-gray-200">
              <p className="mb-2 text-gray-400">
                If you notice any billing discrepancies or payment issues,
                please contact our billing department or speak with our staff in
                person to address the issue. We are committed to resolving any
                issues in a timely and fair manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
