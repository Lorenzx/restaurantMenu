import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { mealsFilteredByCategory } from "../../API/endpoints";
import Card from "../Card";

const CategoryMeals = () => {
  const [filteredMeals, setFilteredMeals] = useState([{}]);
  const selectedCategory = useSelector((state) =>
    state.categories.selectedCategory.map((item) => item.strCategory)
  );
  useState(() => {
    axios
      .get(mealsFilteredByCategory + selectedCategory)
      .then((res) => setFilteredMeals(res.data.meals));
  });

  const handleClickedCard = (item) => {
    console.log(item);
  };
  return (
    <>
      {filteredMeals.map((item) => (
        <Card
          className="hover:bg-indigo-100 cursor-pointer p-3 border-2 border-indigo-200 rounded m-2 ml-0"
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

export default CategoryMeals;
