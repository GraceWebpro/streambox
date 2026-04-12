import {
    UtensilsCrossed,
    Soup,
    Pizza,
    IceCream,
    Drumstick,
    Coffee
  } from "lucide-react";

export const categories = [
    {
      id: "all",
      name: "All Meals",
      icon: UtensilsCrossed,
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: "fastfood",
      name: "Fast Food",
      icon: Soup,
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      id: "pizza",
      name: "Pizza",
      icon: Pizza,
      gradient: "from-red-400 to-pink-500"
    },
    {
      id: "chicken",
      name: "Chicken",
      icon: Drumstick,
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: "dessert",
      name: "Desserts",
      icon: IceCream,
      gradient: "from-pink-400 to-purple-500"
    },
    {
      id: "drinks",
      name: "Drinks",
      icon: Coffee,
      gradient: "from-blue-400 to-indigo-500"
    }
];