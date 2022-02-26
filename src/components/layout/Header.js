import IngredientSearch from "../search/IngredientSearch";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg p-0 flex">
      <div id="sectionTitle" className="w-2/12">
        <h1>RnR Restaurant Menu</h1>
      </div>
      <div className="m-2 justify-center w-10/12">
        <IngredientSearch></IngredientSearch>
      </div>
    </header>
  );
};

export default Header;
