import { useSelector } from "react-redux";

import Card from "../Card";

const IngredientMeals = () => {
  const filteredMeals = useSelector(
    (state) => state.search.mealsByIngredientList
  );

  console.log(filteredMeals);

  const addToFavouritesHandler = (item) => {
    console.log(item);
  };
  const addToCartHandler = (item) => {
    console.log(item);
  };
  return (
    <>
      {console.log(filteredMeals)}
      {filteredMeals.map((item) => (
        <Card
          key={item.idMeal}
          item={item}
          title={item.strMeal}
          image={item.strMealThumb}
          addToFavouritesHandler={addToFavouritesHandler}
          addToCartHandler={addToCartHandler}
          actionButtons={true}
        ></Card>
      ))}
    </>
  );
};

export default IngredientMeals;
