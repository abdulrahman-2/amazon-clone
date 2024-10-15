import { removeFromCart } from "@/lib/store/features/CartSlice";
import { useDispatch } from "react-redux";

const DeleteFromCart = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <button
      className="text-red-500 text-xs font-semibold"
      onClick={() => handleDelete(product)}
    >
      Delete
    </button>
  );
};

export default DeleteFromCart;
