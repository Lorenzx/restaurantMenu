import { IconButton } from "@fluentui/react/lib/Button";
import { Link } from "react-router-dom";

import IngredientSearch from "../search/IngredientSearch";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg p-0 flex">
      <div id="sectionTitle" className="w-2/12">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="justify-center w-9/12">
        <IngredientSearch></IngredientSearch>
      </div>
      <div className="md:flex justify-right md:w-1/12">
        <IconButton
          iconProps={{ iconName: "Heart" }}
          title="Favourites"
          ariaLabel="Favourites"
          className=""
        />
        <IconButton
          iconProps={{ iconName: "ShoppingCart" }}
          title="Cart"
          ariaLabel="Cart"
          className=""
        />
      </div>
    </header>
  );
};

export default Header;
