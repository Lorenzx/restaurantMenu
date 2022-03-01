import { Icon } from "@fluentui/react/lib/Icon";

const Card = ({
  item,
  title,
  image,
  handleClickedCard,
  addToFavouritesHandler,
  addToCartHandler,
  actionButtons,
}) => {
  return (
    <div
      onClick={
        handleClickedCard &&
        (() => {
          handleClickedCard(item);
        })
      }
      className="m-2 sm:max-w-sm md:max-w-xs rounded shadow-lg bg-white"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-indigo-500">{title}</div>
        <div className="w-full">
          <img src={image} alt="recipe thumb" />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {actionButtons && (
          <>
            {" "}
            <button
              onClick={() => addToFavouritesHandler(item)}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              <Icon iconName="Heart" className="" />
            </button>
            <button
              onClick={() => addToCartHandler(item)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add to Cart <Icon iconName="ShoppingCart" className="" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
