import { Icon } from "@fluentui/react/lib/Icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../../styles/modal.css";
import Button from "../button/button";
import { clearAllProducts } from "../cart/cartSlice";

const Modal = ({
  item,
  title,
  description,
  image,
  styles,
  isOpen,
  setIsOpen,
  addToCartHandler,
  actionButtons,
  orderRecap,
  sendProducts,
  productsQuantities,
}) => {
  const [orderSent, setOrderSent] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const confirmOrderHandler = () => {
    // send order to redux state
    sendProducts(productsQuantities);
    setOrderSent(true);

    // return to hp after 3s
    setTimeout(() => {
      dispatch(clearAllProducts());
      setOrderSent(false);
      navigate("/");
    }, 3000);
  };
  return (
    <>
      {/* products modal template*/}
      {isOpen && (
        <div id="modalBG" className="pt-20 text-center darkBG">
          <div
            className={
              styles
                ? styles
                : "inline-block max-h-max m-2 sm:max-w-4/12 md:w-8/12 rounded shadow-lg bg-white w-full relative "
            }
          >
            <div className="px-6 py-4">
              <h2>{title}</h2>
              <div className="absolute top-4 right-4">
                <Icon iconName="ChromeClose" onClick={() => setIsOpen(false)} />
              </div>
              <div className="mb-2 text-indigo-300">{description}</div>
              {image && (
                <div className="w-full">
                  <img src={image} alt="recipe thumb" />
                </div>
              )}
            </div>
            <div className="px-8 pt-4 pb-2">
              {/* order recap modal template */}
              {orderRecap && productsQuantities && !orderSent && (
                <>
                  <h2>Order recap</h2>
                  {productsQuantities.map((item) => (
                    <div
                      key={item.idMeal}
                      className="w-full flex mt-2 p-2 h-14 w-4/6 border-1 border-grey-100 bg-white place-content-between bg-white shadow-md rounded-lg overflow-hidden"
                    >
                      <h2 className="flex items-center w-4/6">
                        {item.strMeal}
                      </h2>
                      <span className="flex items-center font-bold">
                        Quantity: {item.quantity}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-around">
                    <Button
                      text={"Add more meals"}
                      iconName={"Back"}
                      textStyle={"pr-2"}
                      btnStyle={
                        "mt-4 flex justify-end pr-2 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded shadow-md"
                      }
                      clickHandler={() => setIsOpen(false)}
                    />
                    <Button
                      iconName={"Forward"}
                      text={"Place your order"}
                      textStyle={"pr-2"}
                      btnStyle={
                        "mt-4 flex justify-end pr-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-md"
                      }
                      clickHandler={() => {
                        confirmOrderHandler();
                      }}
                    />
                  </div>
                </>
              )}
              {/* order sent confirmation */}
              {orderSent && (
                <>
                  <div className="text-green-600 font-bold">
                    <p>
                      Order has been sent! <Icon iconName="CheckMark" />
                    </p>
                    <p>returning to home page...</p>
                  </div>
                </>
              )}
              {actionButtons && (
                <>
                  <div className="text-right pb-2 flex justify-end">
                    <Button
                      iconName={"ShoppingCart"}
                      text={"Add to Cart"}
                      textStyle={"text-sm font-bold"}
                      btnStyle={
                        "flex place-content-between bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
                      }
                      clickHandler={() => addToCartHandler(item)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
