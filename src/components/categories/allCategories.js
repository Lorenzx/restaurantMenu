import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { mealCategoriesEndPoint } from "../../API/endpoints";
import { addSelectedCategory } from "./categoriesSlice";
import Card from "../layout/Card";

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
      <h2 className="flex flex-col text-center w-full mb-2">
        Select meal category
      </h2>
      {categories.map((item) => (
        <Link key={item.idCategory + "link"} to="/category/meals">
          <Card
            item={item}
            key={item.idCategory}
            title={item.strCategory}
            image={item.strCategoryThumb}
            handleClickedCard={handleClickedCategory}
            actionButtons={false}
          ></Card>
        </Link>
      ))}
    </>
  );
};

export default Categories;
