import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../../context/CartContext";

const CartIcon = ({ onClick }) => {
  const { totalItems } = useCart(); // use totalItems from context


  return (
    <button
      onClick={onClick}
      className="relative p-3 rounded-xl backdrop-blur-lg
      bg-white/20 dark:bg-white/10
      border border-white/20
      hover:scale-105 transition"
    >
      <FaCartShopping className="text-xl" />

      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs px-2 py-[2px] rounded-full">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon;