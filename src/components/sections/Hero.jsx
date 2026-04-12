import { useEffect, useState } from "react";

const movies = [
  {
    title: "Featured Movie 1",
    description: "Watch the latest blockbuster now.",
    poster: "https://image.tmdb.org/t/p/w500/9c6bR2f7Z6kFz9d1g0z7rZ.png",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Featured Movie 2",
    description: "Top trending series available.",
    poster: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    trailer: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    title: "Featured Movie 3",
    description: "Download episodes instantly.",
    poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // 🔁 Auto carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const movie = movies[current];

  return (
    <section className="relative min-h-screen flex items-center bg-background text-white overflow-hidden pt-6">

      {/* 🎥 VIDEO (Desktop Only) */}
      {!isMobile && (
        <video
          key={movie.trailer}
          src={movie.trailer}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}

      {/* 🖼️ IMAGE (Mobile Only) */}
      {isMobile && (
        <img
          src={movie.poster}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      )}

      {/* DARK OVERLAY */}
      {/* <div className="absolute inset-0 bg-black/70"></div> */}

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-main opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 relative z-10">
          <span className="text-white/90">Stream Movies</span> <br />
          <span className="gradient-text">
            Anytime, Anywhere
          </span>
        </h1>

          <p className="text-textSecondary text-lg mb-8 max-w-lg">
            Discover trending movies and series, watch trailers instantly, and download your favorite episodes with ease.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-main hover:bg-gradient-hover px-6 py-3 rounded-xl font-medium shadow-glow transition">
              🎬 Explore Movies
            </button>

            <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-medium backdrop-blur-md border border-white/10 transition">
              ▶ Watch Trailer
            </button>
          </div>

          {/* STATS */}
          <div className="flex gap-8 mt-10 text-sm text-textSecondary">
            <div>
              <p className="text-xl font-bold text-white">10K+</p>
              <p>Movies</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">5K+</p>
              <p>Users</p>
            </div>
            <div>
              <p className="text-xl font-bold text-white">24/7</p>
              <p>Access</p>
            </div>
          </div>
        </div>

        {/* RIGHT CAROUSEL CARD */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-4 bg-gradient-main opacity-20 blur-2xl rounded-2xl"></div>

          <div className="bg-surface rounded-2xl overflow-hidden shadow-soft relative transition-all duration-500">

            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[400px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-6">
              <h3 className="text-2xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-sm text-gray-300 mb-4">
                {movie.description}
              </p>

              <button className="bg-gradient-main px-4 py-2 rounded-lg text-sm shadow-glow">
                ▶ Play Now
              </button>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-4 gap-2">
            {movies.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-accent" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}