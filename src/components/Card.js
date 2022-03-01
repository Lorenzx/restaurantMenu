const Card = ({ item, title, image, handleClickedCard }) => {
  return (
    <div
      onClick={() => {
        handleClickedCard(item);
      }}
      className="m-2 sm:max-w-sm md:max-w-xs rounded shadow-lg bg-white cursor-pointer"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-indigo-500">{title}</div>
        <div className="w-full">
          <img src={image} alt="recipe thumb" />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Hashtags    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span> */}
      </div>
    </div>
  );
};

export default Card;
