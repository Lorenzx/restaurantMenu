import { useSelector, useDispatch } from "react-redux";

import Card from "../layout/Card";
import { addProductToCart } from "../cart/cartSlice";

const IngredientMeals = () => {
  const filteredMeals = useSelector(
    (state) => state.search.mealsByIngredientList
  );

  const dispatch = useDispatch();

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
            key={item.idMeal}
            item={item}
            title={item.strMeal}
            description={item.strDescription}
            image={item.strMealThumb}
            addToFavouritesHandler={addToFavouritesHandler}
            addToCartHandler={addToCartHandler}
            actionButtons={true}
            modal={true}
          ></Card>
        ))
      ) : (
        <div className="font-bold text-center mt-20">
          No meals available for this ingredient, please change ingredient
        </div>
      )}
    </>
  );
};

export default IngredientMeals;
