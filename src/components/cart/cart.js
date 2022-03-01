import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@fluentui/react/lib/Icon";

import { removeProductFromCart } from "./cartSlice";
import { addSelectedIngredient } from "../search/searchSlice";

const Categories = () => {
  const [cart, setCart] = useState([]);
  const cartProducts = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSelectedIngredient([]));
  }, [dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeProductFromCart(item));
  };

  const placeOrder = (products) => {
    products.map((meal) => console.log(meal));
  };

  return (
    <>
      {console.log(cartProducts)}
      {cartProducts &&
        cartProducts.map((item) => (
          <div
            key={item.idMeal}
            className="h-14 w-full bg-blue-200 flex bg-white border rounded-lg overflow-hidden"
          >
            <h2>{item.strMeal}</h2>
            <img alt={item.strMeal} src={item.strMealThumb} className="" />
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="flex-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove from Cart{" "}
              <Icon iconName="StatusCircleErrorX" className="" />
            </button>
          </div>
        ))}
      <button
        onClick={() => placeOrder(cartProducts)}
        className="flex-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Place order <Icon iconName="Forward" className="" />
      </button>
    </>
  );
};

export default Categories;