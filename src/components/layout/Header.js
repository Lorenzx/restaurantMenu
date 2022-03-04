import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import IngredientSearch from "../search/IngredientSearch";
import Logo from "./Logo";
import Button from "../button/button";

const Header = () => {
  const totalProductsInCart = useSelector((state) => state.cart.total);

  return (
    <header className="h-26 pb-4 flex z-10 fixed top-0 left-0 right-0 bg-white shadow-lg p-0 ">
      <div id="sectionTitle" className="w-2/12">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex flex-col w-8/12">
        <IngredientSearch />
      </div>
      <div className="w-2/12">
        {/* cart button */}
        <Link
          className="p-4 mt-3 font-bold flex w-10/12 text-white rounded  justify-center bg-blue-600 shadow-md"
          to="/cart"
        >
          <span className="px-2 rounded-full mr-2 bg-orange-500 shadow-md">
            {totalProductsInCart}
          </span>
          <Button
            iconName="ShoppingCart"
            title="Cart"
            ariaLabel="Cart"
            className="w-full p-2"
          ></Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
