import { useRef, useEffect } from "react";
import { ArrowBarLeft } from "react-bootstrap-icons";
import { ArrowBarRight } from "react-bootstrap-icons";

export default function TrendingNow({ movies = [] }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
  
    let scrollAmount = 0;
  
    const autoScroll = setInterval(() => {
      if (!container) return;
  
      container.scrollLeft += 1; // speed
  
      // reset when reaching end
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
      }
    }, 20); // smoothness
  
    return () => clearInterval(autoScroll);
  }, []);

  return (
<section className="bg-background pt-24 pb-10 px-6 relative">

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-6">
        Trending Now
      </h2>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full"
      >
        <ArrowBarLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full"
      >
        <ArrowBarRight />
      </button>

      {/* Scroll Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide no-scrollbar"
      >

        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="relative min-w-[160px] md:min-w-[200px] z-10 group"
          >

            {/* BIG NUMBER */}
            <span className="absolute -left-3 bottom-0 text-[80px] font-extrabold text-white/10 z-0 pointer-events-none select-none leading-none">
  {index + 1}
</span>

            {/* CARD */}
            <div className="relative rounded-xl overflow-hidden group">

              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-[260px] object-cover rounded-xl group-hover:scale-105 transition"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

              {/* Optional badge */}
              {movie.quality && (
                <span className="absolute top-2 right-2 bg-primary px-2 py-1 text-xs rounded">
                  {movie.quality}
                </span>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}