import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { demoMovies } from "../data/movies";

const genreImages = {
  action: "https://image.tmdb.org/t/p/w1280/9c6bR2f7Z6kFz9d1g0z7rZ.jpg",
  drama: "https://image.tmdb.org/t/p/w1280/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
  comedy: "https://image.tmdb.org/t/p/w1280/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  horror: "https://image.tmdb.org/t/p/w1280/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
};

export default function GenrePage() {
  const { name } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // 🔗 READ FROM URL
  const [sort, setSort] = useState(searchParams.get("sort") || "popular");
  const [minRating, setMinRating] = useState(
    Number(searchParams.get("rating")) || 0
  );
  const [year, setYear] = useState(searchParams.get("year") || "all");

  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(true);

  // 🔄 SYNC TO URL
  useEffect(() => {
    setSearchParams({
      sort,
      rating: minRating,
      year,
    });
  }, [sort, minRating, year]);

  // 🎯 FILTER LOGIC
  const filteredMovies = useMemo(() => {
    return demoMovies
      .filter((movie) => {
        const matchGenre = movie.genre
          ?.toLowerCase()
          .includes(name.toLowerCase());

        const matchRating = movie.rating >= minRating;

        const matchYear =
          year === "all" || movie.year === Number(year);

        return matchGenre && matchRating && matchYear;
      })
      .sort((a, b) => {
        if (sort === "latest") return b.year - a.year;
        if (sort === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [name, sort, minRating, year]);

  // ⏳ FAKE LOADING (for skeleton UX)
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [name, sort, minRating, year]);

  // 🚀 INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 150
      ) {
        setVisible((prev) => prev + 8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moviesToShow = filteredMovies.slice(0, visible);

  const isAllMovies = !name;

  return (
    <div className="bg-background text-white min-h-screen">

      {/* HEADER */}
      <div className="relative h-[320px] flex items-end px-6">
        <div className="absolute inset-0">
          <img
            src={genreImages[name] || genreImages["action"]}
            className="w-full h-full object-cover blur-md scale-110"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <h1 className="relative z-10 text-4xl font-bold uppercase mb-6">
          {name}
        </h1>
      </div>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-30 bg-black/50 backdrop-blur-lg px-6 py-4 flex flex-wrap gap-3 border-b border-white/10">

        {["popular", "latest", "rating"].map((item) => (
          <button
            key={item}
            onClick={() => setSort(item)}
            className={`px-4 py-2 rounded-full text-sm ${
              sort === item
                ? "bg-primary text-black"
                : "bg-white/10"
            }`}
          >
            {item.toUpperCase()}
          </button>
        ))}

        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="bg-white/10 px-3 py-2 rounded"
        >
          <option value="0">All Ratings</option>
          <option value="7">7+</option>
          <option value="8">8+</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-white/10 px-3 py-2 rounded"
        >
          <option value="all">All Years</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

      </div>

      {/* RESULTS COUNT */}
      <div className="px-6 mt-6 text-sm text-gray-400">
        {filteredMovies.length} movies found
      </div>

      {/* EMPTY STATE */}
      {!loading && filteredMovies.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          🎬 No movies found for this filter
        </div>
      )}

      {/* GRID */}
      <div className="px-6 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {/* SKELETON LOADERS */}
        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-white/10 h-[260px] rounded-xl"></div>
              <div className="h-4 bg-white/10 mt-2 rounded w-3/4"></div>
            </div>
          ))}

        {/* MOVIES */}
        {!loading &&
          moviesToShow.map((movie) => (
            <div key={movie.id} className="group cursor-pointer">

              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={movie.poster}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="mt-2 text-sm">{movie.title}</h3>
              <p className="text-xs text-gray-400">{movie.year}</p>

            </div>
          ))}

      </div>

    </div>
  );
}