import { IconButton } from "@fluentui/react/lib/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import IngredientSearch from "../search/IngredientSearch";
import Logo from "./Logo";

const Header = () => {
  const totalProductsInCart = useSelector((state) => state.cart.total);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg p-0 flex">
      <div id="sectionTitle" className="w-2/12">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="justify-center w-8/12">
        <IngredientSearch></IngredientSearch>
      </div>
      <div className="md:flex justify-right md:w-2/12">
        <Link to="/favourites">
          <IconButton
            iconProps={{ iconName: "Heart" }}
            title="Favourites"
            ariaLabel="Favourites"
            className="w-1/2"
          />
        </Link>
        <Link to="/cart">
          <IconButton
            iconProps={{ iconName: "ShoppingCart" }}
            title="Cart"
            ariaLabel="Cart"
            className="w-1/2"
          >
            <span>{totalProductsInCart}</span>
          </IconButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
