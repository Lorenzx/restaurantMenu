import { useState, useEffect } from "react";
import axios from "axios";

import { mealCategoriesEndPoint } from "./API/endpoints";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(mealCategoriesEndPoint)
      .then((res) => setCategories(res.data.categories));
  }, []);

  return (
    <div className="App">
      <header className="App-header flex">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <p>RnR Restaurant Menu</p>

          <div>
            {categories.map((item) => (
              <div>{item.strCategory}</div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
