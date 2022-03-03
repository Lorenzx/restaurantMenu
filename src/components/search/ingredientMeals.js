import { useSelector, useDispatch } from "react-redux";

import Card from "../layout/Card";
import NotFoundMessage from "../../pages/404";
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
      {filteredMeals.length > 0 ? (
        filteredMeals.map((item) => (
          <Card
            key={item.idMeal}
            item={item}
            title={item.strMeal}
            styles={"md:w-60 justify-evenly"}
            description={item.strDescription}
            image={item.strMealThumb}
            addToFavouritesHandler={addToFavouritesHandler}
            addToCartHandler={addToCartHandler}
            actionButtons={true}
            modal={true}
          ></Card>
        ))
      ) : (
        <NotFoundMessage
          message={
            <p>
              No meals available for this ingredient, <br />
              please change ingredient in the search field above or search by
              category.
            </p>
          }
          linkText={"Back to Category selection"}
          linkUrl={"/"}
        />
      )}
    </>
  );
};

export default IngredientMeals;
