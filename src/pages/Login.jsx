import { Link } from "react-router-dom";
import HomePageButton from "../components/HomePageButton";
import { MdOutlineLogin } from "react-icons/md";

const Login = () => {
  return (
    <div className="h-[100vh]">
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="text-center pb-12">
        <span className="py-2 px-4 font-bold text-2xl rounded-3xl bg-white text-[var(--orange)]">
          Login now
        </span>
      </div>
      <div className="text-white">
        <form className="w-[95vw] sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto shadow-2xl p-4 border border-gray-500">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 text-black outline-none text-sm rounded-lg block w-full p-2.5"
              placeholder="Your email here"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium outline-none"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 text-black outline-none text-sm rounded-lg block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 rounded bg-gray-50"
                required
              />
            </div>
            <label htmlFor="remember" className="ml-2 text-sm font-medium">
              Remember me
            </label>
          </div>
          <div className="flex justify-center pt-4">
            <button className="text-[var(--orange)] rounded-lg bg-white hover:bg-[var(--orange)] hover:text-white duration-300 border border-[var(--orange)] font-bold py-2 w-full flex gap-2 items-center justify-center">
              <span>Login</span>
              <MdOutlineLogin />
            </button>
          </div>
        </form>
        <h3 className="text-xl text-center py-8">
          Not a member yet?{" "}
          <Link to={"/register"} className="text-[var(--orange)]">
            Register
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
