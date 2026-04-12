import { useState, useEffect } from "react";

export default function useInfiniteMeals(data, perPage = 8) {
  const [visible, setVisible] = useState(perPage);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisible((prev) => prev + perPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return data.slice(0, visible);
}