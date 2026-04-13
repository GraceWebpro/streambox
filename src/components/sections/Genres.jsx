import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const genres = [
  {
    name: "Action",
    image: "https://image.tmdb.org/t/p/w780/9c6bR2f7Z6kFz9d1g0z7rZ.jpg",
  },
  {
    name: "Drama",
    image: "https://image.tmdb.org/t/p/w780/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
  },
  {
    name: "Comedy",
    image: "https://image.tmdb.org/t/p/w780/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
  },
  {
    name: "Horror",
    image: "https://image.tmdb.org/t/p/w780/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
  },
  {
    name: "Romance",
    image: "https://image.tmdb.org/t/p/w780/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
  },
  {
    name: "Sci-Fi",
    image: "https://image.tmdb.org/t/p/w780/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
  },
  {
    name: "Adventure",
    image: "https://image.tmdb.org/t/p/w780/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
  },
  {
    name: "Animation",
    image: "https://image.tmdb.org/t/p/w780/1NqwE6LP9IEdOZ57NCT51ftHtWT.jpg",
  },
];

export default function Genres() {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-6 mt-20 relative">

      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Browse by Genre
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full"
      >
        ›
      </button>

      {/* Row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {genres.map((genre, index) => (
          <div
            key={index}
            onClick={() => navigate(`/genre/${genre.name.toLowerCase()}`)}
            className="relative min-w-[160px] md:min-w-[200px] h-[160px] md:h-[200px] rounded-2xl overflow-hidden cursor-pointer group snap-start flex-shrink-0"
          >

            {/* Background Image */}
            <img
              src={genre.image}
              alt={genre.name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />

            {/* Bottom Gradient (for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Title */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h3 className="text-white text-lg md:text-xl font-bold tracking-wider uppercase">
                {genre.name}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}