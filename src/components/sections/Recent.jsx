import { useEffect, useState } from "react";
import { getRecentMovies } from "../../utils/recentMovies";

export default function RecentlyWatched() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getRecentMovies());
  }, []);

  if (movies.length === 0) return null;

  
  return (
    <section className="px-6 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-textPrimary">
          Recently Watched
        </h2>
      </div>

      {/* Scroll Row */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">

        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative min-w-[180px] md:min-w-[220px] h-[260px] rounded-xl overflow-hidden group cursor-pointer bg-surface"
          >

            {/* Poster */}
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-3 left-3 right-3">
              <h3 className="text-sm font-semibold truncate">
                {movie.title}
              </h3>
            </div>

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <button className="bg-primary px-4 py-2 rounded-lg text-sm font-medium shadow-soft">
                ▶ Download
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}