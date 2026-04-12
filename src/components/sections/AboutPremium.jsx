import React from "react";
import { motion } from "framer-motion";
import { FaMotorcycle, FaLeaf, FaShieldAlt, FaStar, FaCheckCircle } from "react-icons/fa";
import FoodImg from "../../assets/food1.png"; // change to your food image

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "30–45min", label: "Delivery Time" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "100%", label: "Fresh Ingredients" },
];

const features = [
  {
    icon: <FaMotorcycle />,
    title: "Fast Delivery",
    desc: "Hot meals delivered to your doorstep in minutes.",
    color: "bg-primary",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    desc: "Prepared daily with high quality ingredients.",
    color: "bg-green-500",
  },
  {
    icon: <FaStar />,
    title: "Top Rated",
    desc: "Loved by hundreds of happy customers.",
    color: "bg-yellow-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Ordering",
    desc: "Safe and reliable checkout experience.",
    color: "bg-secondary",
  },
];

const AboutPremium = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950 dark:text-white overflow-hidden">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">QuickBite</span>
          </h2>

          <p className="opacity-70">
            Premium food delivery experience with fast service, fresh meals,
            and trusted quality.
          </p>
        </motion.div>

        {/* STORY + IMAGE */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>

            <img
              src={FoodImg}
              alt=""
              className="
                relative rounded-3xl shadow-2xl
                hover:scale-105 transition duration-500
              "
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Delicious Food, Delivered Fast
            </h3>

            <p className="opacity-70 mb-6">
              QuickBite is built to make food ordering simple, fast, and
              enjoyable. We combine quality meals with reliable delivery and
              modern technology to give customers the best experience.
            </p>


            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 dark:text-green-400" />
                Fresh meals prepared daily
              </p>

              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 dark:text-green-400" />
                Fast and reliable delivery
              </p>

              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 dark:text-green-400" />
                Affordable pricing
              </p>

              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 dark:text-green-400" />
                Trusted by hundreds of customers
              </p>
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                text-center p-6 rounded-2xl
                bg-white/70 dark:bg-white/10
                backdrop-blur-xl border border-black/10 dark:border-white/20
                shadow-lg hover:scale-105 transition
              "
            >
              <h3 className="text-3xl font-bold text-primary">
                {stat.value}
              </h3>
              <p className="text-sm opacity-70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="
                p-8 rounded-3xl text-center
                bg-white/70 dark:bg-white/10
                backdrop-blur-xl border border-white/20
                shadow-xl hover:scale-105 transition
              "
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-2xl text-white text-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="font-bold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-sm opacity-70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* TRUST BADGES STRIP */}
        <div className="
          mt-24 p-8 rounded-3xl text-center
          bg-gradient-to-r from-primary to-secondary
          text-white shadow-2xl
        ">
          <h3 className="text-2xl font-bold mb-2">
            Trusted Food Delivery Experience
          </h3>

          <p className="opacity-90">
            Fresh ingredients • Fast delivery • Secure ordering • 100% customer satisfaction
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutPremium;