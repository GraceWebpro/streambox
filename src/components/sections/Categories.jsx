import React, { useState } from "react";
import { categories } from "./../../data/categories";


const CategoriesSection = ({ onSelect }) => {
  const [active, setActive] = useState("all");

  const handleSelect = (id) => {
    setActive(id);
    onSelect?.(id);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
        <span className="text-primary font-semibold uppercase tracking-widest">
            Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Browse by Category
          </h2>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Find your favorite meals faster
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`group relative p-6 rounded-2xl transition-all duration-300
                backdrop-blur-xl border border-black/10 dark:border-white/20
                hover:scale-105 hover:shadow-2xl
                ${
                  active === cat.id
                    ? "bg-white/80 dark:bg-white/10"
                    : "bg-white/40 dark:bg-white/5"
                }`}
              >
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-50
                  transition rounded-2xl blur-xl
                  bg-gradient-to-r ${cat.gradient}`}
                />

                {/* Content */}
                <div className="relative flex flex-col items-center gap-3">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center
                    rounded-xl text-white shadow-lg
                    bg-gradient-to-r ${cat.gradient}`}
                  >
                    <Icon size={24} />
                  </div>

                  {/* Label */}
                  <span className="font-semibold text-sm">
                    {cat.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;