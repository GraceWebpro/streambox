import { MovieCard } from "../ui/MovieCard";

export default function LatestUploads({ movies }) {
  return (
    <section className="px-6 py-10 bg-background text-white mt-24">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          🆕 Latest Uploads
        </h2>

        <button className="text-sm text-accent hover:underline">
          View All
        </button>
      </div>

      {/* Grid (not scroll this time) */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide no-scrollbar pb-2">
        {movies?.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}

      </div>
    </section>
  );
}