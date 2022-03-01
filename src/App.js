import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import AllCategories from "./components/categories/allCategories";
import CategoryMeals from "./components/categories/categoryMeals";
import IngredientMeals from "./components/search/ingredientMeals";
import Cart from "./components/cart/cart";

initializeIcons();

function App() {
  return (
    <div className="App bg-indigo-100">
      <Header />
      <div className="mb-0 pt-20 flex flex-wrap justify-center">
        <Routes>
          <Route index element={<AllCategories />} />
          <Route path="/category/meals" element={<CategoryMeals />} />
          <Route path="/ingredient/meals" element={<IngredientMeals />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
