const FilterPrice = ({ filterPrice }) => {
  return (
    <div>
      <p className="font-bold text-gray-700 capitalize">filter price</p>
      <div className="flex justify-between max-w-[390px] w-full">
        <button onClick={() => filterPrice("$")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          $
        </button>
        <button onClick={() => filterPrice("$$")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          $$
        </button>
        <button onClick={() => filterPrice("$$$")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          $$$
        </button>
        <button onClick={() => filterPrice("$$$$")} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1">
          $$$$
        </button>
      </div>
    </div>
  );
};

export default FilterPrice;
