const FilterType = ({ filterType, foods, setFoods }) => {
  return (
    <div>
      <p className="font-bold text-gray-700 capitalize">filter type</p>
      <div className="flex justify-between flex-wrap">
        <button onClick={() => setFoods(foods)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          All
        </button>
        <button onClick={() => filterType("burger")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          Burgers
        </button>
        <button onClick={() => filterType("pizza")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          Pizza
        </button>
        <button onClick={() => filterType("salad")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          Salads
        </button>
        <button onClick={() => filterType("chicken")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          Chicken
        </button>
      </div>
    </div>
  );
};

export default FilterType;
