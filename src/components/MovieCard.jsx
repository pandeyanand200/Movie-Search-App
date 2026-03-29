import React from 'react'

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      {movie.Poster !== 'N/A' ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="no-poster">No Poster</div>
      )}
      <div className="info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
