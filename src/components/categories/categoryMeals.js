import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { mealsFilteredByCategory } from "../../API/endpoints";
import Card from "../layout/Card";
import { addProductToCart } from "../cart/cartSlice";

const CategoryMeals = () => {
  const [filteredMeals, setFilteredMeals] = useState([{}]);
  const selectedCategory = useSelector((state) =>
    state.categories.selectedCategory.map((item) => item.strCategory)
  );

  const dispatch = useDispatch();

  useState(() => {
    axios
      .get(mealsFilteredByCategory + selectedCategory)
      .then((res) => setFilteredMeals(res.data.meals));
  });

  const addToFavouritesHandler = (item) => {
    console.log(item);
  };

  const addToCartHandler = (item) => {
    dispatch(addProductToCart(item));
  };

  return (
    <>
      {filteredMeals ? (
        filteredMeals.map((item) => (
          <Card
            className="hover:bg-indigo-100 cursor-pointer p-3 border-2 border-indigo-200 rounded m-2 ml-0"
            key={item.idMeal}
            title={item.strMeal}
            image={item.strMealThumb}
            addToFavouritesHandler={() => addToFavouritesHandler(item)}
            addToCartHandler={() => addToCartHandler(item)}
            actionButtons={true}
          ></Card>
        ))
      ) : (
        <div className="font-bold text-center mt-20">
          No meals available, please change category
          <br />
          <div className="border-2 border-slate-300 mt-2 p-2 font-normal bg-white rounded">
            <Link to={"/"}>Back to Category selection</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryMeals;
