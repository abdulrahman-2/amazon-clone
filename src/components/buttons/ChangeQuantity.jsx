"use client";

import {
  decreaseQuantity,
  increaseQuantity,
} from "@/lib/store/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

const ChangeQuantity = ({ item }) => {
  const { cart } = useAppSelector((state) => state.cart);

  const product = cart.find((product) => product.id === item.id);

  const dispatch = useAppDispatch();

  const handleIncrement = (product) => {
    dispatch(increaseQuantity(product));
  };
  const handleDecrement = (product) => {
    dispatch(decreaseQuantity(product));
  };
  return (
    <div className="flex items-center gap-5">
      <button
        className="bg-gray-200 w-8 h-8 rounded-full font-bold grid place-items-center"
        onClick={() => handleDecrement(product)}
      >
        -
      </button>
      <span className="font-bold">{product.quantity}</span>
      <button
        className="bg-gray-200 text-black w-8 h-8 rounded-full font-bold grid place-items-center"
        onClick={() => handleIncrement(product)}
      >
        +
      </button>
    </div>
  );
};

export default ChangeQuantity;
