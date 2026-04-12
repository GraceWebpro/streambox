import React, { useState } from "react"
import { motion } from "framer-motion";
import { FaStar, FaClock, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { flyToCart } from "../../utils/flyToCart";

const MealCard = ({ meal }) => {
  const [cart, setCart] = useState({})
  const [selectedItem, setSelectedItem] = useState(null)
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  // add to cart
  const updateQty = (id, change) => {
    setCart(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + change),
    }))
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-3 left-3
        bg-white/50 dark:bg-black/90 px-3 py-1 rounded-lg text-xs flex items-center gap-1 text-white">
          <FaClock /> {meal.time}
        </div>
      </div>

        {/* content */}
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{meal.name}</h3>

        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-3">
          <FaStar /> {meal.rating}
        </div>

        {/* Price + */}
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary text-lg">
            ₦{meal.price.toLocaleString()}
          </span>


           {/* Quantity Selector */}
           {cartItems[meal.id] ? (
              <div className="flex items-center gap-3 bg-gray-100 dark:bg-dark px-3 py-2 rounded-lg">
                      
                <button onClick={() => removeFromCart(meal.id)}>
                  <FaMinus />
                </button>

                <span>{cartItems[meal.id].qty}</span>

                <button onClick={(e) => {
                  flyToCart(e);
                  addToCart(meal);
                }}>
                  <FaPlus />
                </button>

              </div>
              ) : (
              <button
                onClick={(e) => {
                  flyToCart(e);
                  addToCart(meal);
                  setAddedId(meal.id);
                  setTimeout(() => setAddedId(null), 1000);
                }}
                className={`px-4 py-2 rounded-lg transition
                  ${addedId === meal.id
                  ? "bg-green-500 text-white scale-110"
                  : "bg-primary text-white hover:scale-105"
                }`}
              >
                {addedId === meal.id ? "✓ Added" : <FaPlus /> }
              </button>
            )}
        </div>
        <a
          href={`https://wa.me/2347043421913?text=I want ${meal.name}`}
          target="_blank"
          rel="noreferrer"
          className="block mt-4 text-sm text-primary font-medium hover:underline"
        >
          Order via WhatsApp
        </a>
      </div>
    </motion.div>
  );
};

export default MealCard;