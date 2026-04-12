// Save movie to localStorage
export const saveToRecentlyWatched = (movie) => {
    if (!movie) return;
  
    const existing =
      JSON.parse(localStorage.getItem("recentMovies")) || [];
  
    // Remove duplicates (based on id or title)
    const filtered = existing.filter(
      (m) => m.id !== movie.id
    );
  
    const updated = [movie, ...filtered];
  
    // Limit to 12 items
    localStorage.setItem(
      "recentMovies",
      JSON.stringify(updated.slice(0, 12))
    );
  };
  
  // Get movies
  export const getRecentMovies = () => {
    return JSON.parse(localStorage.getItem("recentMovies")) || [];
  };