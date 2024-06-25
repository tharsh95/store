import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black text-white p-4">

    <div className="flex justify-between ml-4 mr-4 ">
      <div>
        <h1 className="text-2xl">Store</h1>
      </div>
      <div>
        <ul className="flex justify-around w-[20rem]">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <Link to='/cart'>
        <ShoppingCart />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Header;
