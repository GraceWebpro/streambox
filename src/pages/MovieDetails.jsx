import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieCard } from "../components/ui/MovieCard";

// Dummy data (replace later with Firebase/API)
const movies = [
  {
    id: "1",
    title: "Extraction 2",
    backdrop: "https://image.tmdb.org/t/p/original/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    poster: "https://image.tmdb.org/t/p/w500/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
    rating: 8.2,
    year: 2024,
    duration: "2h 10m",
    quality: "HD",
    genre: "Action, Thriller",
    description: "A high-stakes rescue mission turns into a relentless battle for survival.",
    trailer: "https://www.w3schools.com/html/mov_bbb.mp4",

    // 🆕 NEW FIELDS
    director: "Sam Hargrave",
    language: "English",
    releaseDate: "2024-06-10",
    ageRating: "16+",
    views: "12K",
    downloadsCount: "3K",

    cast: [
      {
        name: "Chris Hemsworth",
        role: "Tyler Rake",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Golshifteh Farahani",
        role: "Nik",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],

    downloads: [
      { quality: "480p", size: "500MB", link: "#" },
      { quality: "720p", size: "900MB", link: "#" },
      { quality: "1080p", size: "1.5GB", link: "#" },
    ],
    images: [
      "https://image.tmdb.org/t/p/w500/9c6bR2f7Z6kFz9d1g0z7rZ.png",
      "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    ],
    type: "series", // 👈 IMPORTANT
    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            title: "Episode 1",
            duration: "45m",
            downloads: [
              { quality: "480p", size: "200MB", link: "#" },
              { quality: "720p", size: "400MB", link: "#" },
            ],
          },
          {
            title: "Episode 2",
            duration: "50m",
            downloads: [
              { quality: "480p", size: "220MB", link: "#" },
              { quality: "720p", size: "420MB", link: "#" },
            ],
          },
        ],
      },
      {
        seasonNumber: 2,
        episodes: [
          {
            title: "Episode 1",
            duration: "48m",
            downloads: [
              { quality: "720p", size: "450MB", link: "#" },
            ],
          },
        ],
      },
    ],
  },
];

export default function MovieDetails() {
  const { id } = useParams();
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [loading, setLoading] = useState(true);
  const [watchlist, setWatchlist] = useState([]);

  const movie = movies.find((m) => m.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => setLoading(false), 500);

    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, [id]);

  const toggleWatchlist = () => {
    let updated;

    if (watchlist.includes(movie.id)) {
      updated = watchlist.filter((i) => i !== movie.id);
    } else {
      updated = [...watchlist, movie.id];
    }

    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className="p-10 animate-pulse">
        <div className="h-[60vh] bg-white/10 rounded-xl"></div>
        <div className="h-6 bg-white/10 mt-4 w-1/2"></div>
      </div>
    );
  }

  if (!movie) {
    return <div className="text-white p-10">Movie not found</div>;
  }

  return (
    <div className="bg-background text-white min-h-screen">

      {/* 🎬 HERO */}
      <div className="relative w-full h-[70vh]">

        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />

        <div className="absolute bottom-5 left-6 md:left-16 z-10 max-w-2xl">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {movie.title}
          </h1>

          <div className="flex flex-wrap gap-3 text-sm text-textSecondary mb-4">
            <span className="bg-primary px-2 py-1 rounded text-xs">
              {movie.quality}
            </span>
            <span>⭐ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span>🔥 {movie.views}</span>
            <span>⬇ {movie.downloadsCount}</span>
          </div>

          <div className="flex gap-3">

            <button
              onClick={() => setShowTrailer(true)}
              className="bg-white/10 border border-white/20 px-6 py-3 rounded-lg"
            >
              ▶ Watch Trailer
            </button>

            <button className="bg-primary px-6 py-3 rounded-lg shadow-soft">
              ⬇ Download
            </button>

            {/* <button
              onClick={toggleWatchlist}
              className="bg-primary px-5 py-3 rounded-lg"
            >
              {watchlist.includes(movie.id) ? "✓ Saved" : "+ Watchlist"}
            </button> */}


          </div>
        </div>
      </div>

      {/* 🧾 DETAILS */}
      <div className="px-6 md:px-16 mt-10 grid md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-textSecondary leading-relaxed">
            {movie.description}
          </p>

          {/* 🎭 CAST */}
          <h2 className="text-xl mt-8 mb-3">Cast</h2>
          <div className="flex gap-4 overflow-x-auto">
            {movie.cast.map((c, i) => (
              <div key={i} className="min-w-[100px] text-center">
                <img
                  src={c.image}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <p className="text-sm mt-2">{c.name}</p>
                <p className="text-xs text-gray-400">{c.role}</p>
              </div>
            ))}
          </div>

        </div>

        

        {/* RIGHT */}
        <div className="bg-surface p-5 rounded-xl space-y-3">
          <div>
            <span className="text-textMuted text-sm">Genre</span>
            <p>{movie.genre}</p>
          </div>
          <div>
            <span className="text-textMuted text-sm">Release</span>
            <p>{movie.releaseDate}</p>
          </div>
          <div>
            <span className="text-textMuted text-sm">Duration</span>
            <p>{movie.duration}</p>
          </div>
        </div>
      </div>

      {/* ⬇ DOWNLOAD OPTIONS */}
     {movie.type === "series" && (
            <div className="px-6 md:px-16 mt-10">

                <h2 className="text-xl font-semibold mb-4">
                Seasons
                </h2>

                <div className="flex gap-3 flex-wrap">

                {movie.seasons.map((season, index) => (
                    <button
                    key={index}
                    onClick={() => setSelectedSeason(index)}
                    className={`px-4 py-2 rounded-lg text-sm border transition ${
                        selectedSeason === index
                        ? "bg-primary text-white border-primary"
                        : "bg-surface border-white/10 hover:border-white/30"
                    }`}
                    >
                    Season {season.seasonNumber}
                    </button>
                ))}

                </div>
            </div>
        )}

        {movie.type === "series" && (
        <div className="px-6 md:px-16 mt-8">

            <h2 className="text-xl font-semibold mb-4">
            Episodes
            </h2>

            <div className="space-y-4">

            {movie.seasons[selectedSeason].episodes.map((ep, i) => (
                <div
                key={i}
                className="bg-surface p-4 rounded-xl border border-white/5"
                >

                {/* Episode Header */}
                <div className="flex justify-between items-center mb-3">

                    <div>
                    <h3 className="font-medium">
                        {i + 1}. {ep.title}
                    </h3>
                    <p className="text-sm text-textSecondary">
                        {ep.duration}
                    </p>
                    </div>

                </div>

                {/* Download Options */}
                <div className="flex gap-3 flex-wrap">

                    {ep.downloads.map((d, j) => (
                    <a
                        key={j}
                        href={d.link}
                        className="bg-background border border-white/10 px-3 py-2 rounded-lg text-sm hover:border-primary transition flex items-center gap-2"
                    >
                        <span>{d.quality}</span>
                        <span className="text-textMuted text-xs">
                        ({d.size})
                        </span>
                        <span>⬇</span>
                    </a>
                    ))}

                </div>
                </div>
            ))}

            </div>
        </div>
        )}

 

        {/* RECOMMENDED */}
        <div className="px-6 md:px-16 mt-14 mb-20">

            <h2 className="text-xl font-semibold mb-4">
            You May Also Like
            </h2>

            <div className="flex gap-5 overflow-x-auto">

                {movie.recommendations?.map((m, i) => (
                    <MovieCard key={i} movie={m} />
                ))}

            </div>
        </div>



      {/* 🎥 TRAILER MODAL */}
      {showTrailer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="relative w-[90%] md:w-[800px]">

            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <video
              src={movie.trailer}
              controls
              autoPlay
              className="w-full rounded-lg"
            />

          </div>
        </div>
      )}
    </div>
  );
}