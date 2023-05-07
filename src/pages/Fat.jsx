import HomePageButton from "../components/HomePageButton";

const Fat = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4">
        <h2 className="text-center text-white font-bold text-2xl md:text-3xl lg:text-4xl">
          <span className="text-[var(--orange)]">FitZone</span> Fat Burning
          Program
        </h2>
      </div>
    </div>
  );
};

export default Fat;
