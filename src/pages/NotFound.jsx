import HomePageButton from "../components/HomePageButton";

const NotFound = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4 text-center text-white h-[100vh]">
        <h1 className="py-24 text-3xl lg:text-9xl font-bold">Oops!</h1>
        <p className="py-10">404 - PAGE NOT FOUND</p>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <h2 className="text-2xl font-bold py-12">Sorry!</h2>
      </div>
    </div>
  );
};

export default NotFound;
