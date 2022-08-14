import React from "react";
import HCards from "./HCards";
const HeadlineCards = () => {
  const ListHCards = [
    {
      id: 1,
      title: "Sun's Out, BOGO's Out",
      desc: "Through 8/26",
      img: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "New Restaurants",
      desc: "Added Daily",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "We Deliver Desserts Too",
      desc: "Tasty Treats",
      img: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <div className="max-w-[1910px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {ListHCards.map((item, index) => (
        <HCards key={index} item={item} />
      ))}
    </div>
  );
};

export default HeadlineCards;
