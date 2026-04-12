import { useEffect, useState } from "react";

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

        <button className="text-sm text-textSecondary hover:text-white transition">
          View All
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

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
          movies.map((movie, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden bg-surface cursor-pointer transition duration-300 hover:scale-[1.06]"
            >

              {/* Poster */}
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[340px] object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              {/* BIG Ranking Number */}
              <div className="absolute top-2 left-3 text-[80px] font-extrabold text-white/10 leading-none pointer-events-none">
                {index + 1}
              </div>

              {/* Top Right Tags */}
              <div className="absolute top-3 right-3 flex gap-2">
                {movie.quality && (
                  <span className="text-[10px] bg-black/70 px-2 py-1 rounded">
                    {movie.quality}
                  </span>
                )}
                <span className="text-[10px] bg-accent text-black px-2 py-1 rounded font-semibold">
                  HD
                </span>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">

                <h3 className="text-sm font-semibold line-clamp-2 mb-2">
                  {movie.title}
                </h3>

                {/* Meta */}
                <div className="flex justify-between text-xs text-textSecondary mb-3">
                  <span>{movie.year || "2024"}</span>
                  <span>{movie.size || "1.2GB"}</span>
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primaryHover py-2 rounded-lg text-sm font-medium transition">
                  ⬇ Download
                </button>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl bg-primary/20 pointer-events-none"></div>

            </div>
          ))}
      </div>
    </section>
  );
}