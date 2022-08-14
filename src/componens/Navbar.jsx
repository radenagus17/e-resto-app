import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const listMenusMobile = [
    {
      id: 1,
      title: "Orders",
      icon: <TbTruckDelivery size={25} className="mr-4" />,
    },
    {
      id: 2,
      title: "Favorites",
      icon: <MdFavorite size={25} className="mr-4" />,
    },
    {
      id: 3,
      title: "Wallet",
      icon: <FaWallet size={25} className="mr-4" />,
    },
    {
      id: 4,
      title: "Help",
      icon: <MdHelp size={25} className="mr-4" />,
    },
    {
      id: 5,
      title: "Promotions",
      icon: <AiFillTag size={25} className="mr-4" />,
    },
    {
      id: 6,
      title: "Best Ones",
      icon: <BsFillSaveFill size={25} className="mr-4" />,
    },
    {
      id: 7,
      title: "Invite Friends",
      icon: <FaUserFriends size={25} className="mr-4" />,
    },
  ];

  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1910px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input type="text" placeholder="search foods" className="bg-transparent p-2 w-full focus:outline-none" />
      </div>

      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* mobile menu */}
      {/* overlay */}
      {nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>}

      {/* side drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500" : "fixed top-0 w-[300px] h-screen bg-white z-10 duration-500 left-[-100%]"}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {listMenusMobile.map(({ id, title, icon }) => (
              <li key={id} className="text-xl py-4 flex">
                {icon}
                {title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
