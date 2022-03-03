import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeProductDuplicates,
  removeProductFromCart,
  placeOrder,
} from "./cartSlice";
import { addSelectedIngredient } from "../search/searchSlice";
import NotFoundMessage from "../../pages/404";
import Modal from "../layout/Modal";
import Button from "../button/button";

const Categories = () => {
  const productsQuantities = useSelector(
    (state) => state.cart.productsQuantities
  );
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSelectedIngredient([]));
    dispatch(removeProductDuplicates());
  }, [dispatch]);

  const handleRemoveFromCart = (item) => {
    dispatch(removeProductFromCart(item));
  };

  const sendProducts = (productsQuantities) => {
    dispatch(placeOrder(productsQuantities));
  };

  return (
    <>
      {/* show all the products in redux state.productsQuantities*/}
      {productsQuantities.length > 0 &&
        productsQuantities.map((item) => (
          <div
            key={item.idMeal}
            className="flex mt-2 p-2 h-14 w-4/6 bg-white place-content-between bg-white shadow-md rounded-lg overflow-hidden"
          >
            <h2 className="flex items-center w-4/6">{item.strMeal}</h2>
            <img
              className="flex items-center"
              alt={item.strMeal}
              src={item.strMealThumb}
            />
            <span className="flex items-center font-bold">{item.quantity}</span>
            <Button
              clickHandler={() => handleRemoveFromCart(item)}
              btnStyle="flex items-center text-black bg-slate-500 py-1 px-2 rounded shadow-md"
              iconName="StatusCircleErrorX"
              iconStyle={"text-white text-bold"}
            />
          </div>
        ))}
      {/*if there are products, show place order button outside the products list for loop*/}
      {productsQuantities.length > 0 && (
        <div className="mt-6 flex border-t-2 border-grey-100 w-4/6 justify-end">
          <Button
            text={"Place your order"}
            textStyle={"pr-2"}
            iconName={"Forward"}
            clickHandler={() => setIsOpen(true)}
            btnStyle={
              "mt-4 flex justify-end pr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md"
            }
          />
          <Modal
            sendProducts={sendProducts}
            orderRecap={true}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            productsQuantities={productsQuantities}
          />
        </div>
      )}
      {/* no products in cart*/}
      {productsQuantities.length <= 0 && (
        <NotFoundMessage
          message={
            <>
              <p>No meals have been added to your cart yet.</p>
              <p>
                Please select a meal by category or by ingredient in the search
                field above.
              </p>
              <br />
            </>
          }
          linkText={"Back to Category selection"}
          linkUrl={"/"}
        />
      )}
    </>
  );
};

export default Categories;
