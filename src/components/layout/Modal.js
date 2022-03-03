import { Icon } from "@fluentui/react/lib/Icon";

import "../../styles/modal.css";

const Modal = ({
  item,
  title,
  description,
  image,
  styles,
  isOpen,
  setIsOpen,
  addToFavouritesHandler,
  addToCartHandler,
  actionButtons,
}) => {
  return (
    <>
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
              <div className="font-bold text-xl mb-2 text-indigo-500">
                {title}
              </div>
              <div className="absolute top-4 right-4">
                <Icon iconName="ChromeClose" onClick={() => setIsOpen(false)} />
              </div>
              <div className="mb-2 text-indigo-300">{description}</div>
              <div className="w-full">
                <img src={image} alt="recipe thumb" />
              </div>
            </div>
            <div className="px-8 pt-4 pb-2">
              {actionButtons && (
                <>
                  <div className="text-right pb-2">
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
