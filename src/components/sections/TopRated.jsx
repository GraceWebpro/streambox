export default function TopRated({ movies = [] }) {
    return (
      <section className="px-6 mt-14">
  
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            ⭐ Top Rated
          </h2>
  
          <button className="text-sm text-primary hover:text-primaryHover">
            View All
          </button>
        </div>
  
        {/* Row */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
  
          {movies.map((movie, index) => (
            <div
              key={index}
              className="min-w-[200px] group cursor-pointer"
            >
  
              {/* Poster */}
              <div className="relative rounded-xl overflow-hidden">
  
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition"
                />
  
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
  
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded text-xs">
                  ⭐ {movie.rating || "8.5"}
                </div>
  
                {/* Hover Play */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-primary px-4 py-2 rounded-lg text-sm">
                    ▶ View
                  </div>
                </div>
  
              </div>
  
              {/* Title */}
              <h3 className="mt-2 text-sm font-medium truncate">
                {movie.title}
              </h3>
  
            </div>
          ))}
  
        </div>
      </section>
    );
  }