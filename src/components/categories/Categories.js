import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { mealCategoriesEndPoint } from "../../API/endpoints";
import { addSelectedCategory } from "./categoriesSlice";
import Card from "../Card";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(mealCategoriesEndPoint)
      .then((res) => setCategories(res.data.categories));
  }, []);

  const handleClickedCategory = (item) => {
    dispatch(addSelectedCategory(item));
  };

  return (
    <>
      {categories.map((item) => (
        <Card
          item={item}
          key={item.idCategory}
          title={item.strCategory}
          image={item.strCategoryThumb}
          handleClickedCategory={handleClickedCategory}
        ></Card>
      ))}
    </>
  );
};

export default Categories;
