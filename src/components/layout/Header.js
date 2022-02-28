import { IconButton } from "@fluentui/react/lib/Button";

import IngredientSearch from "../search/IngredientSearch";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg p-0 flex">
      <div id="sectionTitle" className="w-2/12">
        <Logo />
      </div>
      <div className="m-2 justify-center w-9/12">
        <IngredientSearch></IngredientSearch>
      </div>
      <div className="m-2 justify-right w-1/12">
        <IconButton
          iconProps={{ iconName: "Heart" }}
          title="Favourites"
          ariaLabel="Favourites"
        />
        <IconButton
          iconProps={{ iconName: "ShoppingCart" }}
          title="Cart"
          ariaLabel="Cart"
        />
      </div>
    </header>
  );
};

export default Header;
