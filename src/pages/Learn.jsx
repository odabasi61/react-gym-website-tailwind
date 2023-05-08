import HomePageButton from "../components/HomePageButton";

const Learn = () => {
  return (
    <div>
      <div className="px-4 py-8">
        <HomePageButton />
      </div>
      <div className="p-4 md:px-8 text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-semibold pb-3">
          Welcome to{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span>!
        </h2>
        <p className="py-2">
          Welcome to{" "}
          <span className="font-bold text-[var(--orange)]">FitZone</span>, your
          go-to fitness center for achieving your health and fitness goals. Our
          state-of-the-art facility offers a wide range of equipment and fitness
          classes that cater to all fitness levels, from beginners to advanced
          athletes.
        </p>
        <p className="py-2">
          At <span className="font-bold text-[var(--orange)]">FitZone</span>,
          we're committed to providing our members with the best possible
          fitness experience. That's why we offer a range of benefits, such as
          discounts on personal training sessions, priority booking for group
          fitness classes, and access to exclusive events and promotions.
        </p>
      </div>
    </div>
  );
};

export default Learn;
