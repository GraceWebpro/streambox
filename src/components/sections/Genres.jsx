import { useNavigate } from "react-router-dom";

const genres = [
    { name: "Action", color: "from-red-500 to-red-700" },
    { name: "Drama", color: "from-purple-500 to-indigo-600" },
    { name: "Comedy", color: "from-yellow-400 to-orange-500" },
    { name: "Horror", color: "from-gray-700 to-black" },
    { name: "Romance", color: "from-pink-500 to-rose-600" },
    { name: "Sci-Fi", color: "from-cyan-500 to-blue-600" },
    { name: "Adventure", color: "from-green-500 to-emerald-600" },
    { name: "Animation", color: "from-orange-400 to-amber-500" },
  ];
  
  export default function Genres() {
    const navigate = useNavigate();

    return (
      <section className="px-6 mt-14">
  
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-textPrimary">
            🎭 Browse by Genre
          </h2>
        </div>
  
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  
          {genres.map((genre, index) => (
            <div
              key={index}
              onClick={() => navigate(`/genre/${genre.name.toLowerCase()}`)}
              className="group relative rounded-full overflow-hidden cursor-pointer bg-surface border border-white/5 hover:border-white/10 transition"
            >
  
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${genre.color} opacity-20 group-hover:opacity-30 transition`}
              />
  
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-xl"></div>
              </div>
  
              {/* Content */}
              <div className="relative z-10 p-6 flex items-center justify-between">
  
                {/* Genre Name */}
                <h3 className="text-lg font-semibold text-white">
                  {genre.name}
                </h3>
  
                {/* Arrow */}
                <span className="text-xl opacity-70 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
  
            </div>
          ))}
  
        </div>
      </section>
    );
  }