import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { mealListByIngredientEndPoint } from "../../API/endpoints";
import { addSelectedIngredient } from "./searchSlice";

const IngredientSearch = () => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  const inputRef = useRef();

  const selectedIngredient = useSelector(
    (state) => state.search.selectedIngredient
  );
  const dispatch = useDispatch();

  let filteredItems = [];

  useEffect(() => {
    axios
      .get(mealListByIngredientEndPoint)
      .then((res) => setIngredientsList(res.data.meals));
  }, []);

  const handleSearchInput = () => {
    let searchText = inputRef.current.value.toLowerCase();

    filteredItems = ingredientsList.filter((item) =>
      item.strIngredient.toLowerCase().startsWith(searchText)
    );
    searchText && filteredItems
      ? setSearchedItems(filteredItems)
      : searchText && filteredItems === []
      ? setSearchedItems([
          { idIngredient: "noID", strIngredient: "No results found." },
        ])
      : setSearchedItems([]);
  };

  const handleClickedIngredient = (ingredient) => {
    console.log(ingredient);
    dispatch(addSelectedIngredient(ingredient));
  };

  return (
    <>
      <input
        type="text"
        name="searchField"
        placeholder="Choose your favourite ingredient"
        className="placeholder:italic placeholder:text-slate-400 rounded border-2 border-indigo-400 p-2"
        size="40"
        ref={inputRef}
        onChange={() => handleSearchInput()}
      ></input>
      <div className="inline-flex p-2">
        <svg width="20" height="20" viewBox="0 0 20 20">
          <path
            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
            stroke="currentColor"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div className="inline-flex">
        {selectedIngredient.map((ingredient) => (
          <div>Your selection: {ingredient.strIngredient}</div>
        ))}
      </div>

      <div className="justify-left bg-white p-2 pl-0 overflow-hidden flex flex-wrap">
        {searchedItems.map((result) => (
          <div
            className="hover:bg-indigo-100 cursor-pointer p-3 border-2 border-indigo-200 rounded m-2 ml-0"
            key={result.idIngredient}
            onClick={() => handleClickedIngredient(result)}
          >
            {result.strIngredient}
          </div>
        ))}
      </div>
    </>
  );
};

export default IngredientSearch;
