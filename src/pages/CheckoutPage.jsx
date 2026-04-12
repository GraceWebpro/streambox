import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { flyToCart } from "../utils/flyToCart";
import { FaPlus, FaMinus } from "react-icons/fa"
import { Helmet } from "react-helmet";

const CheckoutPage = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    totalPrice,
  } = useCart();

  const items = Object.values(cartItems);

  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
  
    if (!formData.name.trim())
      newErrors.name = "Name is required";
  
    if (!formData.phone.trim())
      newErrors.phone = "Phone is required";
  
    if (!formData.address.trim())
      newErrors.address = "Address is required";
  
    setErrors(newErrors);
  
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake delay
    setTimeout(() => {
      navigate("/order-success");
    }, 1000);
  };

  return (
    <div className="container py-16 mt-10">
      <Helmet>
      <title>Checkout | QuickBite</title>
      <meta
        name="description"
        content="Secure checkout page design included in the QuickBite React food ordering template."
      />
      </Helmet>
      <h1 className="text-3xl font-bold mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            required
            placeholder="Full Name"
            className="w-full mt-2 px-4 py-3 rounded-xl
            bg-white/80 dark:bg-white/10
            border border-gray-200 dark:border-white/20
            outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            required
            placeholder="Phone Number"
            className="w-full mt-2 px-4 py-3 rounded-xl
            bg-white/80 dark:bg-white/10
            border border-gray-200 dark:border-white/20
            outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            required
            placeholder="Delivery Address"
            className="w-full mt-2 px-4 py-3 rounded-xl
            bg-white/80 dark:bg-white/10
            border border-gray-200 dark:border-white/20
            outline-none focus:ring-2 focus:ring-primary"
          />

            

          {/* Payment Method */}
          <div>
            <h3 className="font-semibold mb-3">Payment Method</h3>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                Card Payment
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "transfer"}
                  onChange={() => setPaymentMethod("transfer")}
                />
                Bank Transfer
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                Pay on Delivery
              </label>
            </div>

            {paymentMethod === "card" && (
                <div className="mt-4 space-y-3">
                    <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full mt-2 px-4 py-3 rounded-xl
                    bg-white/80 dark:bg-white/10
                    border border-gray-200 dark:border-white/20
                    outline-none focus:ring-2 focus:ring-primary"
                    />
                    <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full mt-2 px-4 py-3 rounded-xl
                        bg-white/80 dark:bg-white/10
                        border border-gray-200 dark:border-white/20
                        outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        className="w-full mt-2 px-4 py-3 rounded-xl
                        bg-white/80 dark:bg-white/10
                        border border-gray-200 dark:border-white/20
                        outline-none focus:ring-2 focus:ring-primary"
                    />
                    </div>
                </div>
            )}

            {paymentMethod === "transfer" && (
            <div className="mt-4 p-4 bg-white/80 dark:bg-white/10 rounded-lg">
                <p className="font-semibold">Bank Details:</p>
                <p>Bank: Demo Bank</p>
                <p>Account Name: QuickBite Ltd</p>
                <p>Account No: 1234567890</p>
            </div>
            )}

            {paymentMethod === "cash" && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-white/10 rounded-lg">
                Pay when your order arrives.
            </div>
            )}
            </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl"
          >
            Pay ₦{totalPrice.toLocaleString()}
          </button>
        </form>

        {/* Summary */}
        <div className="p-2 border border-black/10 dark:border-white/20 rounded-xl h-fit">
          <h3 className="font-bold text-xl mb-6">Order Summary</h3>

          <div className="lg:col-span-2 space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;