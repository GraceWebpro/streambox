import { useCart } from "../../../context/CartContext";
import { useState } from "react";

const AddToCartButton = ({ item }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <button
      onClick={handleAdd}
      className={`px-5 py-3 rounded-xl text-white
      transition-all duration-300
      ${added
        ? "bg-green-500 scale-105"
        : "bg-gradient-to-r from-primary to-secondary hover:scale-105"
      }`}
    >
      {added ? "Added ✓" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;