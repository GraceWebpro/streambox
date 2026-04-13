import { useEffect, useState } from "react";
import { MovieCard } from "../ui/MovieCard";

export default function PopularDownloads({ movies = [] }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <section className="px-6 mt-16">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          🔥 Popular Downloads
        </h2>

        {/* <button className="text-sm text-textSecondary hover:text-white transition">
          View All
        </button> */}
      </div>

      {/* Row */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide no-scrollbar pb-2">

        {/* Skeleton */}
        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-[340px] rounded-2xl bg-surface animate-pulse"
            />
          ))}

        {/* Movies */}
        {!loading &&
          <div className="flex gap-5 overflow-x-auto scrollbar-hide no-scrollbar pb-2">
          {movies?.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
  
        </div>
}
      </div>
    </section>
  );
}