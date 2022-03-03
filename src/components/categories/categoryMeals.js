import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { Spinner } from "@fluentui/react";
import axios from "axios";

import { mealsFilteredByCategory } from "../../API/endpoints";
import Card from "../layout/Card";
import { addProductToCart } from "../cart/cartSlice";
import NotFoundMessage from "../../pages/404";

const CategoryMeals = () => {
  const [filteredMeals, setFilteredMeals] = useState([{}]);
  const [loading, setIsLoading] = useState(false);
  const selectedCategory = useSelector((state) =>
    state.categories.selectedCategory.map((item) => item.strCategory)
  );

  const dispatch = useDispatch();

  useState(() => {
    setIsLoading(true);
    axios.get(mealsFilteredByCategory + selectedCategory).then((res) => {
      setFilteredMeals(res.data.meals);
      setIsLoading(false);
    });
  });

  const addToCartHandler = (item) => {
    dispatch(addProductToCart(item));
  };

  return (
    <>
      {loading ? (
        <Spinner
          label="Loading selected category meals..."
          ariaLive="assertive"
          labelPosition="right"
        />
      ) : filteredMeals ? (
        filteredMeals.map((item) => (
          <Card
            className="hover:bg-indigo-100 cursor-pointer p-3 border-2 border-indigo-200 rounded m-2 ml-0"
            key={item.idMeal}
            title={item.strMeal}
            styles={"md:w-60 justify-evenly"}
            image={item.strMealThumb}
            addToCartHandler={() => addToCartHandler(item)}
            actionButtons={true}
            modal={true}
          ></Card>
        ))
      ) : (
        <NotFoundMessage
          message={"No meals available, please select another category"}
          linkText={"Back to Category selection"}
          linkUrl={"/"}
        />
      )}
    </>
  );
};

export default CategoryMeals;
