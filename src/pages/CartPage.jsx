import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { flyToCart } from "../utils/flyToCart";
import { FaPlus, FaMinus } from "react-icons/fa"
import { Helmet } from "react-helmet";

const CartPage = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    totalPrice,
  } = useCart();

  const items = Object.values(cartItems);

  if (items.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link
          to="/meals"
          className="bg-primary text-white px-6 py-3 rounded-xl"
        >
          Browse Meals
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-16 mt-10">
      <Helmet>
      <title>Your Cart | QuickBite</title>
      <meta
        name="description"
        content="Review items in your cart before proceeding to checkout using the QuickBite template."
      />
      </Helmet>
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {Object.values(items).map((item) => (
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
                      addToCart(item);
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

        {/* Summary */}
        <div className="p-6 border border-black/10 dark:border-white/20 rounded-xl h-fit">
          <h3 className="font-bold text-xl mb-6">Order Summary</h3>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>₦{deliveryFee.toLocaleString()}</span>
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>₦{totalPrice.toLocaleString()}</span>
          </div>

          <Link
            to="/checkout"
            className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;