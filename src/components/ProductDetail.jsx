import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

import { useParams } from "react-router-dom";
import useItem from "../hooks/useItem";
import StarGenerator from "./Rating";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data, loading, error } = useItem(productId);
  const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(data));
    };
  if (loading) return <div>Loading...</div>;
  return (
    <div className="flex">
      <div className="flex flex-col items-center ">
        <p className="text-[28px] text-secondary font-semibold w-[30rem]">{data.title}</p>
        <div className="flex gap-28 xl:flex-row flex-col border-2 border-gray-200 rounded-3xl p-4">
          <img
            src={data.image}
            alt={data.title}
            width={400}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <p className="text-3xl">
          <span>Category:</span>
          {data.category}
        </p>
        <p className="text-3xl">
          <span>Price:</span>${data.price}
        </p>
        <p className="bg-yellow-300 text-black mb-2 p-2 rounded-lg text-center">
          {" "}
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
        <p className="text-3xl text-yellow-500">
          <StarGenerator numberOfStars={data?.rating?.rate} />
        </p>
        <p className="w-[25rem]">{data.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
