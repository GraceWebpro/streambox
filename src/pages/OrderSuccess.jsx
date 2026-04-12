import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Helmet } from "react-helmet";

const OrderSuccess = () => {
  const { clearCart } = useCart();

  const orderId = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-12">
      <Helmet>
      <title>Order Successful | QuickBite</title>
      <meta
        name="description"
        content="Order confirmation page from the QuickBite food ordering template."
      />
      </Helmet>
      <div className="max-w-lg w-full text-center p-10 rounded-2xl border shadow-lg mt-10 mb-20">
        
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
          <span className="text-green-600 dark:text-green-400 text-4xl">✓</span>
        </div>
      </div>
        <h1 className="text-3xl font-bold mb-4">
          Order Successful!
        </h1>

        <p className="opacity-70 mb-2">
          Thank you for your order. Your meal is being prepared.
        </p>

        <p className="font-semibold mb-6">
          Order ID: #{orderId}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl"
          >
            Back to Home
          </Link>

          <Link
            to="/meals"
            className="px-6 py-3 rounded-xl border border-gray-300 dark:border-white/20"
          >
            Order More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;