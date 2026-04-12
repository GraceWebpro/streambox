import { useState, useEffect, useRef } from "react";
import { demoMovies } from "../../data/movies";

const trending = [
  "Avengers",
  "Money Heist",
  "John Wick",
  "Stranger Things",
  "Dune",
];

const popular = [
  "The Batman",
  "Interstellar",
  "Breaking Bad",
  "Oppenheimer",
  "Dark",
];

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const wrapperRef = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      // trigger filtering logic (already reactive in your case)
    }, 200);
  
    return () => clearTimeout(delay);
  }, [query]);

  const filteredMovies =
  query.trim().length > 0
    ? demoMovies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="flex relative w-auto" ref={wrapperRef}>
      
      {/* INPUT */}
      <div
  onClick={() => !open && setOpen(true)}
  className={`
    flex items-center rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer

    ${open 
      ? "bg-white/10 border border-white/10 px-4 py-3 w-52 hover:border-primary/40 focus-within:ring-2 focus-within:ring-primary/30"
      : "bg-transparent border-transparent p-2 w-auto"
    }

    lg:bg-white/10 lg:border lg:border-white/10 lg:px-4 lg:py-3 lg:w-auto
  `}
>
        {/* icon */}
        <svg
          onClick={() => setOpen(true)}
          className="w-5 h-5 text-white/90 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.5 5.5a7.5 7.5 0 0011.15 11.15z"
          />
        </svg>

        <input
  type="text"
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onFocus={() => setOpen(true)}
  placeholder="Search movies, series..."
  className={`
    bg-transparent outline-none text-sm text-textPrimary placeholder:text-textSecondary
    transition-all duration-300

    ${open 
      ? "ml-2 w-36 focus:w-52 opacity-100"
      : "w-0 ml-0 opacity-0"
    }

    lg:ml-2 lg:w-36 lg:opacity-100
  `}
/>
      </div>

      {/* DROPDOWN */}
      {open && (
  <div className="absolute mt-14 w-full md:w-80 bg-surface/95 backdrop-blur-xl border border-surfaceLight rounded-xl shadow-xl overflow-hidden z-50">

    {query.length > 0 ? (
      <>
        <p className="px-4 py-2 text-xs text-textMuted">
          Search Results
        </p>

        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <div
              key={movie.id}
              onClick={() => {
                setQuery(movie.title);
                setOpen(false);
                window.location.href = `/movie/${movie.id}`;
              }}
              className="flex items-center gap-3 px-4 py-2 hover:bg-surfaceLight cursor-pointer transition"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-10 h-14 rounded object-cover"
              />

              <div className="flex flex-col">
                <span className="text-textPrimary text-sm font-medium">
                  {movie.title}
                </span>
                <span className="text-textMuted text-xs">
                  ⭐ {movie.rating} • {movie.quality}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-3 text-textMuted text-sm">
            No movies found
          </div>
        )}
      </>
    ) : (
      <>
        <p className="px-4 py-2 text-xs text-textMuted">
          🎬 Popular Movies
        </p>

        {demoMovies.slice(0, 3).map((movie) => (
          <div
            key={movie.id}
            onClick={() => {
              setQuery(movie.title);
              setOpen(false);
              window.location.href = `/movie/${movie.id}`;
            }}
            className="flex items-center gap-3 px-4 py-2 hover:bg-surfaceLight cursor-pointer transition"
          >
            <img
              src={movie.poster}
              className="w-10 h-14 rounded object-cover"
            />
            <span className="text-textPrimary text-sm">
              {movie.title}
            </span>
          </div>
        ))}
      </>
    )}
  </div>
)}
    </div>
  );
}