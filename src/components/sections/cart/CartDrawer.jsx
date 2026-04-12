import { useCart } from "../../../context/CartContext";
import { FaPlus, FaMinus } from "react-icons/fa"
import { flyToCart } from "../../../utils/flyToCart";
import { useNavigate, Link } from "react-router-dom";
import './cart.css'

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    clearCart,
    subtotal,
    deliveryFee,
    totalPrice,
  } = useCart();

  const navigate = useNavigate();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose} // ✅ use prop
        className={`cart-overlay bg-black/40 backdrop-blur-sm z-[90]
        transition ${isOpen ? "open" : ""}`}
      />

      {/* Drawer */}
      <div
        className={`cart-drawer bg-white dark:bg-dark
        backdrop-blur-xl border-l border-white/20
        shadow-2xl
        ${isOpen ? "open" : ""}`}
      >
        {/* Header */}
        <div className="p-6 flex justify-between">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}
        <div className="cart-items space-y-4">
          {Object.keys(cartItems).length === 0 && (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-3">
                Your cart is empty
              </h2>
            
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any meals yet.
              </p>
            
              <Link
                to="/meals"
                className="px-6 py-3 bg-primary text-white rounded-xl"
              >
                Browse Meals
              </Link>
            </div>
          )}

          {Object.values(cartItems).map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 rounded-xl
              bg-white/40 dark:bg-white/10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              {/* Middle Section */}
              <div className="flex-1">
                <h4 className="font-semibold text-sm">
                  {item.name}
                </h4>

                <p className="text-sm opacity-60">
                  ₦{item.price.toLocaleString()}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2 bg-gray-100 dark:bg-dark px-2 py-1 rounded-lg w-fit">
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="hover:scale-110 transition"
                  >
                    <FaMinus size={12} />
                  </button>

                  <span className="text-sm font-medium">
                    {item.qty}
                  </span>

                  <button
                    onClick={(e) => {
                      flyToCart?.(e);
                      addToCart(item.id);
                    }}
                    className="hover:scale-110 transition"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>

              {/* Right Side */}
              <div className="text-right">
                <p className="font-semibold">
                  ₦{(item.price * item.qty).toLocaleString()}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xs mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="mt-6 border-t pt-4 space-y-2 text-sm px-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Bottom Actions */}
        {Object.keys(cartItems).length > 0 && (
          <div className="cart-footer space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <button
             onClick={() => {
              onClose();
              navigate("/cart");
            }}
              className="w-full bg-gradient-to-r from-primary to-secondary
              text-white py-3 rounded-xl"
            >
              View Cart
            </button>

            <button
              onClick={clearCart}
              className="w-full border py-2 rounded-xl"
            >
              Clear Cart
            </button>

            </div>

            <a
              href={`https://wa.me/2347043421913?text=${encodeURIComponent(
                `Hello QuickBite, I want to order:\n\n${Object.values(cartItems)
                  .map((i) => `${i.name} x${i.qty}`)
                  .join("\n")}\n\nTotal: ₦${totalPrice}`
              )}`}
              target="_blank"
              className="block bg-green-500 text-white text-center py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Checkout via WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;