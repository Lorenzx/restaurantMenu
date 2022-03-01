import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { mealsFilteredByIngredient } from "../../API/endpoints";
import Card from "../Card";

const IngredientMeals = () => {
  const [filteredMeals, setFilteredMeals] = useState([{}]);
  const selectedIngredient = useSelector((state) =>
    state.search.selectedIngredient.map((item) => item.strCategory)
  );
  useState(() => {
    axios
      .get(mealsFilteredByIngredient + selectedIngredient)
      .then((res) => setFilteredMeals(res.data.meals));
  }, []);

  const handleClickedCard = (item) => {
    console.log(item);
    console.log(filteredMeals);
  };
  return (
    <>
      {filteredMeals.map((item) => (
        <Card
          key={item.idMeal}
          item={item}
          title={item.strMeal}
          image={item.strMealThumb}
          handleClickedCard={handleClickedCard}
        ></Card>
      ))}
    </>
  );
};

export default IngredientMeals;
