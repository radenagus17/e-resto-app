import React, { useState } from "react";
import { data } from "../data/data";
import FilterPrice from "./FilterPrice";
import FilterType from "./FilterType";
const Foods = () => {
  const [foods, setFoods] = useState(data);

  // filter type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data
        .filter((item) => item.category === category)
        .sort((a, b) => a.price.localeCompare(b.price))
        .map((val) => val)
    );
  };

  // filter by price
  const filterPrice = (price) => {
    setFoods(data.filter((item) => item.price === price));
  };
  return (
    <div className="max-w-[1910px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center capitalize">Top rated menu items</h1>
      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <FilterType setFoods={setFoods} foods={data} filterType={filterType} />
        {/* filter price */}
        <FilterPrice filterPrice={filterPrice} />
      </div>
      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img src={item.image} alt={item.name} className="w-full h-[200px] object-cover rounded-t-lg" />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
