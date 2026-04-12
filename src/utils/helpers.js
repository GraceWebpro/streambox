export const getDynamicCategories = (meals) => {
    const uniqueCategories = [
      "all",
      ...new Set(meals.map((meal) => meal.category)),
    ];
  
    return uniqueCategories.map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
    }));
  };