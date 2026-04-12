import { demoMovies } from "../../data/movies";

export default function ContinueWatching() {
  const continueMovies = demoMovies.slice(0, 4);

  return (
    <section className="px-4 md:px-10 mt-10">
      
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-textPrimary mb-4">
        Continue Watching
      </h2>

      {/* Row */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">

        {continueMovies.map((movie) => (
          <div
            key={movie.id}
            className="min-w-[180px] md:min-w-[220px] group cursor-pointer"
          >
            
            {/* Poster */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
              />

              {/* Resume overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2">
                <div className="h-1 w-full bg-gray-700 rounded">
                  <div className="h-1 w-1/2 bg-primary rounded"></div>
                </div>
              </div>
            </div>

            {/* Title */}
            <p className="text-sm text-textSecondary mt-2 truncate">
              {movie.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}