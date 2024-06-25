/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, title, price, description, rating, image }) => {
  return (
    <div className="flex flex-col justify-between h-[19rem] border-2 border-gray-100  w-[12rem] drop-shadow-lg m-4 rounded-lg">
      <img src={image} alt={title} className="h-[10rem] w-[12rem]" />
      <h3 className="">{title.length > 49 ? title.slice(0, 30) : title}</h3>
      <p>${price}</p>
      <Link
        to={`/product/${id}`}
        className="bg-yellow-300 text-black mb-2 p-2 rounded-lg text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;
//
