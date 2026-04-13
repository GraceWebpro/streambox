import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedBanner() {
  const navigate = useNavigate();

  const featuredList = [
    {
      title: "Marvel Collection",
      subtitle: "Earth’s mightiest heroes. All in one place.",
      description:
        "Dive into the complete Marvel universe — from Iron Man to Avengers Endgame.",
      image:
        "https://image.tmdb.org/t/p/original/9BBTo63ANSmhC4e6r62OJFuK2GL.jpg",
      tag: "FEATURED",
      link: "/genre/action",
    },
    {
      title: "Fast & Furious Saga",
      subtitle: "Speed. Family. Adrenaline.",
      description:
        "Experience high-octane action across all Fast & Furious movies.",
      image:
        "https://image.tmdb.org/t/p/original/fnpxxXYoR7U2o2K7K4o2L4L8c8Z.jpg",
      tag: "TRENDING",
      link: "/genre/action",
    },
    {
      title: "Top Horror Picks",
      subtitle: "Fear has a new face.",
      description:
        "A chilling collection of the scariest horror movies right now.",
      image:
        "https://image.tmdb.org/t/p/original/3ZQ0pZ9Wk9jWc4n7bQh1gZ.jpg",
      tag: "HOT",
      link: "/genre/horror",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ⏱ Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredList.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, featuredList.length]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? featuredList.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % featuredList.length);
  };

  const featured = featuredList[current];

  return (
    <section className="px-6 md:px-16 mt-16">
      <div
        className="relative h-[280px] md:h-[320px] rounded-2xl overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 🎬 Background */}
        <img
          key={featured.image}
          src={featured.image}
          alt={featured.title}
          className="w-full h-full object-cover transition duration-700"
        />

        {/* 🌑 Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

        {/* 🔥 Glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
          <div className="absolute -inset-1 bg-primary/20 blur-2xl"></div>
        </div>

        {/* 🎯 CONTENT */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-xl z-10">
          <span className="text-xs text-primary font-semibold tracking-widest mb-2">
            {featured.tag}
          </span>

          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            {featured.title}
          </h2>

          <p className="text-sm md:text-base text-white/80 mb-4">
            {featured.subtitle}
          </p>

          <p className="hidden md:block text-sm text-white/60 mb-6">
            {featured.description}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => navigate(featured.link)}
              className="bg-primary text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Explore Now
            </button>

            <button className="bg-white/10 border border-white/20 px-5 py-2 rounded-lg hover:bg-white/20 transition">
              ▶ Preview
            </button>
          </div>
        </div>

        {/* ⬅️➡️ ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full hover:bg-black/70"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-full hover:bg-black/70"
        >
          ›
        </button>

        {/* 🔘 DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredList.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                current === index
                  ? "bg-primary w-6"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}