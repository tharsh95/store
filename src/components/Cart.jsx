import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import axios from "axios";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const isEmpty = Object.keys(items).length === 0;

  if (isEmpty) {
    return (
      <span className="flex justify-center items-center h-[81vh] text-2xl font-bold">
        <span>Your cart is empty</span>
      </span>
    );
  }


  const handleAddToCart = async (id, type) => {
    const response = await axios.get(`${import.meta.env.VITE_ECOM_API}/${id}`);

    type ? dispatch(addToCart(response.data)) : dispatch(removeFromCart(response.data));
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Cart</h1>
      {Object.values(items).map((item) => (
        <div key={item.id} className="m-4 border-2 border-gray-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={item.image} alt={item.title} width={100} height={100} />
              <p className="text-2xl font-bold">${item.price}</p>
            </div>
            <div className="flex text-2xl">
              <button
                className="bg-gray-300 rounded-3xl w-[50px] h-520px]"
                onClick={() => handleAddToCart(item.id, false)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                className="bg-gray-300 rounded-3xl w-[50px] h-520px]"
                onClick={() => handleAddToCart(item.id, true)}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
{
  /* <ul className='m-4 flex flex-col'>
{Object.values(items).map((item) => (
    <li key={item.id} className='w-[100rem] border-2 border-gray-300 flex items-center'>
        <img src={item.image} width={50} height={50}/>
        {item.title} - {item.quantity}
        <p className='font-bold'>${item.price}</p>
    </li>
))}
</ul> */
}
