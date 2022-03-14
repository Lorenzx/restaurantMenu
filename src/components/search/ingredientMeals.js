import { useSelector, useDispatch } from "react-redux";

import Card from "../layout/Card";
import NotFoundMessage from "../../pages/404";
import { addProductToCart } from "../cart/cartSlice";
import { randomNumber } from "../../utils/helpersFuncs";

const IngredientMeals = () => {
  const filteredMeals = useSelector(
    (state) => state.search.mealsByIngredientList
  );

  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addProductToCart(item));
  };

  return (
    <>
      {filteredMeals.length > 0 ? (
        filteredMeals.map((item) => (
          <Card
            key={item.idMeal + randomNumber()}
            item={item}
            title={item.strMeal}
            styles={"md:w-60 justify-between"}
            description={item.strDescription}
            image={item.strMealThumb}
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
