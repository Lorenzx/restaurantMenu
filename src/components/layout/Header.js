import { IconButton } from "@fluentui/react/lib/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import IngredientSearch from "../search/IngredientSearch";
import Logo from "./Logo";

const Header = () => {
  const totalProductsInCart = useSelector((state) => state.cart.total);

  return (
    <header className="flex z-10 fixed top-0 left-0 right-0 bg-white shadow-lg p-0 ">
      <div id="sectionTitle" className="w-2/12">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="w-8/12">
        <IngredientSearch />
      </div>
      <div className="md:flex items-center text-center justify-evenly h-full">
        <Link to="/cart">
          <IconButton
            iconProps={{ iconName: "ShoppingCart" }}
            title="Cart"
            ariaLabel="Cart"
            className="w-full p-2"
          >
            <span>{totalProductsInCart}</span>
          </IconButton>
        </Link>
      </div>
    </header>
  );
};

export default Header;
