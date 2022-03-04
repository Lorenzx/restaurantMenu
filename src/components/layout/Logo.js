import { useDispatch, useSelector } from "react-redux";

import restaurantLogo from "../../assets/restaurant-logo.png";
import { addSelectedIngredient } from "../search/searchSlice";

const Logo = () => {
  const selectedIngredient = useSelector((state) =>
    state.search.selectedIngredient.map((item) => item.strIngredient)
  );
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    selectedIngredient && dispatch(addSelectedIngredient([]));
  };

  return (
    <div
      onClick={handleLogoClick}
      className="xs:w-full mt-6 ml-2 md:w-9/12 lg:w-2/4 pl-2"
    >
      <img alt="Dummy Logo" src={restaurantLogo} />
    </div>
  );
};

export default Logo;
