import { initializeIcons } from "@fluentui/font-icons-mdl2";

import Header from "./components/layout/Header";
import Categories from "./components/categories/Categories";

initializeIcons();

function App() {
  return (
    <div className="App bg-indigo-100">
      <Header />
      <div className="mb-0 pt-20 flex flex-wrap justify-center">
        <Categories />
      </div>
    </div>
  );
}

export default App;
