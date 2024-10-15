"use client";

import { addToCart } from "@/lib/store/features/CartSlice";
import ChangeQuantity from "./ChangeQuantity";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

const AddToCartBtn = ({ product }) => {
  const dispatch = useAppDispatch();

  const { cart } = useAppSelector((state) => state.cart);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  // check item in cart
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  return (
    <>
      {isInCart(product.id) ? (
        <ChangeQuantity item={product} />
      ) : (
        <button
          className="w-full bg-gray-200 hover:bg-amazon_blue hover:text-white ease-in-out duration-200 font-bold py-2 px-4 rounded-md"
          onClick={() => addToCartHandler(product)}
        >
          ADD TO CART
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
