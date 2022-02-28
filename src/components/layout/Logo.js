import restaurantLogo from "../../assets/restaurant-logo.png";

const Logo = () => {
  return (
    <div className="xs:w-full md:w-4/6 lg:w-2/4 pl-2">
      <img alt="Dummy Logo" src={restaurantLogo} />
    </div>
  );
};

export default Logo;
