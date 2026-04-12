import React from "react";
import { FaWhatsapp, FaClock, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl"></div>

      {/* Container */}
      <div className="container relative z-10">

        {/* Glass Card */}
        <div
          className="
          max-w-5xl mx-auto
          rounded-3xl
          bg-white/70 dark:bg-black/50
          backdrop-blur-xl
          border border-white/20
          shadow-2xl
          px-8 sm:px-16 py-16
          text-center
        "
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
            ⚡ Fast Delivery Available
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Craving Something Delicious?
            <br />
            <span className="text-primary">Order Now & Get It Fast</span>
          </h2>

          {/* Description */}
          <p className="text-lg opacity-70 max-w-2xl mx-auto mb-10">
            Fresh meals prepared instantly and delivered to your doorstep in
            30–45 minutes. Trusted by hundreds of happy customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* WhatsApp Order */}
            <a
              href="https://wa.me/2347043421913?text=Hello%20QuickBite,%20I%20want%20to%20order"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center justify-center gap-3
                px-6 py-4 rounded-xl
                text-white font-semibold
                bg-gradient-to-r from-green-500 to-green-600
                shadow-lg hover:scale-105 transition
              "
            >
              <FaWhatsapp size={20} />
              Order via WhatsApp
            </a>

            {/* Browse Menu */}
            <Link
              to="/meals"
              className="
                px-6 py-4 rounded-xl font-semibold
                border border-primary text-primary
                hover:bg-primary hover:text-white
                transition
              "
            >
              Browse Menu
            </Link>
          </div>

          {/* Trust Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm opacity-70">
            <span className="flex items-center gap-2">
              <FaClock /> 30–45 min delivery
            </span>

            <span className="flex items-center gap-2">
              <FaMotorcycle /> Fast dispatch
            </span>

            <span>⭐ Rated 4.9 by customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;