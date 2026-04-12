import React, { useRef } from "react";
import { mealsData } from "./../../data/meals";
import MealCard from "../ui/MealCard";
import { Link } from "react-router-dom";


const BrowseMealsPreview = ({ onAddToCart }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  const previewMeals = mealsData.slice(0, 8);

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold">
            Browse Meals
          </h2>
          <p className="mt-2 text-gray-500">
            Discover delicious meals ready for fast delivery
          </p>
        </div>

        <Link
          to="/meals"
          className="w-fit px-4 py-3 rounded-xl bg-primary text-white hover:scale-105 transition"
        >
          View Full Menu →
        </Link>
      </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {previewMeals.map((meal) => ( 
            <div key={meal.id} 
              className="group min-w-[280px] rounded-2xl overflow-hidden bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray/40 dark:border-white/20 hover:shadow-2xl transition" 
            > 
              
              <MealCard meal={meal} onAddToCart={onAddToCart} />
              </div> 
            ))}
        </div>

      </div>
    </section>
  );
};

export default BrowseMealsPreview;