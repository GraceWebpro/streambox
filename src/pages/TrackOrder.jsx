import { Helmet } from "react-helmet";

const TrackOrder = () => {
  return (
    <div className="max-w-xl mx-auto py-20 px-6 text-center mt-10">

      <Helmet>
        <title>Track Order | QuickBite</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">
        Track Your Order
      </h1>

      <p className="text-gray-500 mb-6">
        Enter your order ID to track delivery status.
      </p>

      <input
        placeholder="Enter Order ID"
        className="w-full border rounded-lg px-4 py-3 mb-4"
      />

      <button className="bg-primary text-white px-6 py-3 rounded-xl">
        Track Order
      </button>

    </div>
  );
};

export default TrackOrder;