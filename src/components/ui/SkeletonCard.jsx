export function MovieSkeletonRow() {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="min-w-[160px] md:min-w-[200px] h-[240px] rounded-2xl bg-surface animate-pulse"
        />
      ))}
    </div>
  );
}