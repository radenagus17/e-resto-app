const HCards = ({ item }) => {
  return (
    <div className="rounded-xl relative">
      {/* overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{item.title}</p>
        <p className="px-2">{item.desc}</p>
        <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
      </div>
      <img className="max-h-[220px] md:max-h-[240px] w-full object-cover rounded-xl" src={item.img} alt="thumbnail" />
    </div>
  );
};

export default HCards;
