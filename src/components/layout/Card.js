import { useState } from "react";
import Button from "../button/button";
import Modal from "./Modal";

const Card = ({
  item,
  title,
  image,
  description,
  styles,
  modal,
  handleClickedCard,
  addToCartHandler,
  actionButtons,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {modal && (
        <Modal
          item={item}
          title={title}
          image={image}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          description={description}
          actionButtons={true}
          addToCartHandler={addToCartHandler}
        />
      )}
      <div
        onClick={
          handleClickedCard &&
          (() => {
            handleClickedCard(item);
          })
        }
        className={
          styles
            ? `${styles} flex flex-col m-2 sm:max-w-sm md:w-40 rounded shadow-lg bg-white`
            : "flex flex-col m-2 sm:max-w-sm md:w-40 rounded shadow-lg bg-white"
        }
      >
        <div className="px-6 py-2">
          <div className="font-bold text-md mb-2 text-indigo-500">{title}</div>
          <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
            <img src={image} alt="recipe thumb" />
          </div>
        </div>
        <div className="px-6 py-2">
          {actionButtons && (
            <>
              <Button
                text={"Add to Cart"}
                textStyle={"pr-2"}
                iconName={"ShoppingCart"}
                btnStyle={
                  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                }
                clickHandler={() => addToCartHandler(item)}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
