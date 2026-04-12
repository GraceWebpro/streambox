import React, { useState, useEffect } from "react";
import { mealsData } from "../data/meals";
import MealCard from "../components/ui/MealCard";
import { Helmet } from "react-helmet";

const categories = ["all", "rice", "fastfood", "pizza", "chicken", "dessert"];

const MealsPage = ({ onAddToCart }) => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("default");

  let filteredMeals = mealsData.filter((meal) => {
    const matchesCategory =
      active === "all" || meal.category === active;

    const matchesSearch = meal.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sorting
  if (sort === "low") {
    filteredMeals.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredMeals.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filteredMeals.sort((a, b) => b.rating - a.rating);
  }

  const mealsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  
  const currentMeals = filteredMeals.slice(
    indexOfFirstMeal,
    indexOfLastMeal
  );
  
  const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <section className="py-24 px-6">
      <Helmet>
        <title>Browse Meals | QuickBite</title>
        <meta
          name="description"
          content="Explore delicious meals available for fast delivery with the QuickBite food ordering template."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Our Full Menu
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Explore all available meals
          </p>
        </div>


        <div className="max-w-xl mx-auto mb-8"> 
          <input 
            type="text" 
            placeholder="Search meals..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full px-6 py-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary" 
          /> 
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          {/* Categories */}
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full capitalize whitespace-nowrap transition
                ${
                  active === cat
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 dark:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="w-full sm:w-auto sm:self-end relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                px-5 py-3 rounded-xl
                bg-gray-100 dark:bg-white/10
                border border-white/20
                apearance-auto
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            >
              <option value="default">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

        </div>

        
        {/* Grid */}
        
        {loading ? (
          <div>
          <div className="grid md:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse p-4 rounded-xl bg-gray-200 h-60"
              />
            ))}
          </div>
          <div className="animate-pulse">
  <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {currentMeals.map((meal) => (
              <div key={meal.id} 
              className="group min-w-[280px] rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-gray/40 dark:border-white/20 hover:shadow-2xl transition" 
            > 
            <MealCard
              meal={meal}
              onAddToCart={onAddToCart}
            />
            </div>
          ))}
        </div>

        )}

        <div className="flex justify-center mt-10 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-primary text-white"
                  : "bg-white-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MealsPage;