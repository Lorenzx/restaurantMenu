import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@fluentui/react/lib/Icon";
import { Link } from "react-router-dom";

import { removeProductDuplicates, removeProductFromCart } from "./cartSlice";
import { addSelectedIngredient } from "../search/searchSlice";

const Categories = () => {
  const productsQuantities = useSelector(
    (state) => state.cart.productsQuantities
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSelectedIngredient([]));
    dispatch(removeProductDuplicates());
  }, []);

  const handleRemoveFromCart = (item) => {
    console.log(item);
    dispatch(removeProductFromCart(item));
  };

  const placeOrder = (products) => {
    products.map((meal) => console.log(meal));
  };

  return (
    <>
      {console.log(productsQuantities)}
      {productsQuantities.length > 0 ? (
        productsQuantities.map((item) => (
          <>
            <div
              key={item.idMeal}
              className="h-14 w-full bg-blue-200 flex bg-white border rounded-lg overflow-hidden"
            >
              <h2>{item.strMeal}</h2>
              <img alt={item.strMeal} src={item.strMealThumb} className="" />
              <span>{item.quantity}</span>
              <button
                onClick={() => handleRemoveFromCart(item)}
                className="flex-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove from Cart
                <Icon iconName="StatusCircleErrorX" className="" />
              </button>
            </div>
            <button
              onClick={() => placeOrder(productsQuantities)}
              className="flex-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Place your order <Icon iconName="Forward" className="" />
            </button>
          </>
        ))
      ) : (
        <div id="noProductsInCart" className="font-bold text-center mt-20">
          <p>No meals have been added to your cart.</p>
          <p>
            please select by category or by ingredient in the search field
            above.
          </p>
          <br />
          <div className="border-2 border-slate-300 mt-2 p-2 font-normal bg-white rounded">
            <Link to={"/"}>Back to Category selection</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
