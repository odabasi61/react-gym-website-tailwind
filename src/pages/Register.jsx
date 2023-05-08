import { Link } from "react-router-dom";
import HomePageButton from "../components/HomePageButton";
import { GiArchiveRegister } from "react-icons/gi";

const Register = () => {
  return (
    <div className="h-[100vh]">
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="text-center pb-12">
        <span className="py-2 px-4 font-bold text-2xl rounded-3xl bg-white text-[var(--orange)]">
          Register now
        </span>
      </div>
      <div className="text-white">
        <form className="w-[95vw] sm:w-2/3 xl:w-2/5 m-auto shadow-2xl p-4 border border-gray-500">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--orange)] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--orange)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--orange)] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--orange)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--orange)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--orange)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--orange)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--orange)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--orange)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--orange)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_company"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--orange)] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[var(--orange)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
            </div>
          </div>
          <div className="flex justify-center pt-4">
            <button className="text-[var(--orange)] rounded-lg bg-white hover:bg-[var(--orange)] hover:text-white duration-300 border border-[var(--orange)] font-bold py-2 w-full flex gap-2 items-center justify-center">
              <span>Register</span>
              <GiArchiveRegister />
            </button>
          </div>
        </form>
        <h3 className="text-xl text-center py-8">
          Already a member?{" "}
          <Link to={"/login"} className="text-[var(--orange)]">
            Login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Register;
