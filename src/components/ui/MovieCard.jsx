import { useNavigate } from "react-router-dom";

export function MovieCard({ movie, isLoading }) {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };

    if (isLoading) {
      return (
        <div className="min-w-[180px] md:min-w-[220px] h-[300px] rounded-xl bg-surface animate-pulse" />
      );
    }
  
    return (
        <div
        onClick={handleClick}
        className="min-w-[180px] md:min-w-[220px] cursor-pointer group"
      >
        <div className="relative rounded-lg overflow-hidden">
      
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
          />
      
          {/* Quality (keep this!) */}
          {movie.quality && (
            <span className="absolute top-2 right-2 bg-primary px-2 py-1 text-xs rounded">
              {movie.quality}
            </span>
          )}
      
          {/* Rating (small, subtle) */}
          {movie.rating && (
            <span className="absolute top-2 left-2 bg-black/70 px-2 py-1 text-xs rounded">
              ⭐ {movie.rating}
            </span>
          )}
      
        </div>
      
        {/* Title */}
        <h3 className="mt-2 text-sm truncate text-textPrimary">
          {movie.title}
        </h3>
      </div>
    );
  }