import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="card mb-4 border-0"
      style={{
        maxWidth: "100%",
        height: "550px",
        transition: "box-shadow 0.3s ease",
        textDecoration: "none",
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="card-img-top"
        alt={movie.title}
        style={{
          height: "400px",
          objectFit: "cover",
        }}
      />
      <div
        className="card-body d-flex flex-column p-3"
        style={{
          height: "150px",
        }}
      >
        <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
          {movie.title}
        </h5>
        <p
          className="card-text"
          style={{
            fontSize: "0.9rem",
            overflow: "hidden",
            height: "80px",
          }}
        >
          {movie.overview.length > 100
            ? movie.overview.substring(0, 100) + "..."
            : movie.overview}
        </p>
        <div className="mt-auto">
          <button className="btn btn-primary btn-sm view-details-btn" disabled>
            View Details
          </button>
        </div>
      </div>

      {/* Hover effect */}
      <style jsx>{`
        .card:hover {
          box-shadow: 0px 4px 20px rgba(5, 5, 5, 0.2);
          cursor: pointer;
        }
        .view-details-btn:hover {
          background-color: rgb(83, 121, 245); /* Warning color */
          border-color: rgb(96, 106, 248); /* Warning color */
          text-color: white;
        }
      `}</style>
    </Link>
  );
}

export default MovieCard;
