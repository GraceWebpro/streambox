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
    <section className="bg-background pt-6 pb-10 px-6 relative">

      <div className="relative -mt-20 z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C300,0 1140,0 1440,80 L1440,0 L0,0 Z"
            className="fill-background"
          />
        </svg>
      </div>

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
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/60 hover:bg-black p-3 rounded-full"
      >
        <ArrowBarRight />
      </button>

      {/* Scroll Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
      >

        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="relative min-w-[160px] md:min-w-[200px] z-10 group"
          >

            {/* BIG NUMBER */}
            <span className="absolute left-0 bottom-0 translate-x-[-30%] text-[90px] font-extrabold text-white z-20 pointer-events-none select-none">
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