import { useState, useEffect } from "react";
import axios from "axios";

import { mealCategoriesEndPoint } from "./API/endpoints";
import Header from "./components/layout/Header";
import Card from "./components/Card";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(mealCategoriesEndPoint)
      .then((res) => setCategories(res.data.categories));
  }, []);

  return (
    <div className="App bg-indigo-100">
      <Header />
      <div className="mb-0 pt-20 flex flex-wrap justify-center">
        {categories.map((item) => (
          <Card
            key={item.idCategory}
            title={item.strCategory}
            image={item.strCategoryThumb}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
