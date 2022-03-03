import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Icon } from "@fluentui/react/lib/Icon";
import { Link } from "react-router-dom";

import {
  allIngredientsListEndPoint,
  mealsFilteredByIngredient,
} from "../../API/endpoints";
import { addSelectedIngredient, getMealsByIngredientList } from "./searchSlice";

const IngredientSearch = () => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  const inputRef = useRef();
  const resultsDivRef = useRef();

  const selectedIngredient = useSelector(
    (state) => state.search.selectedIngredient
  );
  const dispatch = useDispatch();

  let filteredItems = [];

  useEffect(() => {
    // retrieve all ingredients list to populate UI search pills
    axios.get(allIngredientsListEndPoint).then((res) => {
      setIngredientsList(res.data.meals);
    });
  }, [selectedIngredient]);

  const handleSearchInput = () => {
    // reset selected ingredient redux state
    // filter UI pills by serch input value
    let searchText = inputRef.current.value.toLowerCase();
    resultsDivRef.current.style.display = "flex";
    filteredItems = ingredientsList.filter((item) =>
      item.strIngredient.toLowerCase().startsWith(searchText)
    );
    // set component state accordingly
    searchText && filteredItems
      ? setSearchedItems(filteredItems)
      : searchText && filteredItems === []
      ? setSearchedItems([
          { idIngredient: "noID", strIngredient: "No results found." },
        ])
      : setSearchedItems([]);
  };

  const handleClickedIngredient = (ingredient) => {
    // add selected ingredient to redux selected ingredient state
    inputRef.current.value = "";
    dispatch(addSelectedIngredient(ingredient));
    axios
      .get(mealsFilteredByIngredient + ingredient.strIngredient)
      .then((res) => {
        dispatch(getMealsByIngredientList(res.data.meals));
      });
    resultsDivRef.current.style.display = "none";
  };

  return (
    <>
      <div className="mt-6">
        <div className="flex rounded items-center flex-start">
          <Icon iconName="Search" className="items-center flex px-2" />
          <input
            type="text"
            name="searchField"
            placeholder="Choose your favourite ingredient"
            className="w-8/12 border-2 pl-2 p-1 border-blue-400 rounded-full flex justify-left placeholder:italic placeholder:text-slate-400"
            ref={inputRef}
            onChange={() => handleSearchInput()}
          ></input>
        </div>

        {selectedIngredient &&
          selectedIngredient.map(
            (ingredient) =>
              ingredient.strIngredient && (
                <div
                  key={ingredient.strIngredient}
                  className="w-max mt-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {ingredient.strIngredient &&
                    "Meals with: " + ingredient.strIngredient}
                </div>
              )
          )}

        <div
          ref={resultsDivRef}
          className="justify-left bg-white p-2 pl-0 overflow-hidden flex flex-wrap"
        >
          {/*searched items filter*/}
          {searchedItems.map((result) => (
            <>
              <Link key={result.idIngredient + "-link"} to="/ingredient/meals">
                <div
                  className="hover:bg-blue-100 cursor-pointer p-3 border-2 border-blue-200 rounded m-2 ml-0"
                  key={result.idIngredient}
                  onClick={() => handleClickedIngredient(result)}
                >
                  {result.strIngredient}
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default IngredientSearch;
