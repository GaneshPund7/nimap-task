import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieDetails, getMovieCredits } from '../api/movieApi';
import './Details.css';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieDetails(id).then((response) => {
      setMovie(response.data);
    });

    getMovieCredits(id).then((response) => {
      setCredits(response.data);
    });
  }, [id]);

  if (!movie) return <div>Loading...</div>;
  if (!credits) return <div>Loading Credits...</div>;

  return (
    <div className="movie-detail">
      <div className="movie-detail__back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
        className="movie-detail__image"
      />
      <div className="movie-detail__content1">
        <h1 className="movie-detail__title">{movie.title}</h1>
        <div className="movie-detail__genres">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="movie-detail__genre">
              {genre.name}
            </span>
          ))}
        </div>
        <p className="movie-detail__overview">{movie.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
      </div>

      <div className="movie-detail__content_2 mt-4">
        <h1 className="movie-detail__title text-warning">{movie.title}</h1>
        <div className="movie-detail__genres">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="movie-detail__genre">
              {genre.name}
            </span>
          ))}
        </div>
        <p className="movie-detail__overview">{movie.overview}</p>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
      </div>

      {/* Crew Section with Images */}
      <div className="col-lg-12 mt-5">
  <h2 className="d-flex justify-content-center text-warning"><b>Cast</b></h2>
  <div className="scroll-container">
    <div className="scroll-content">
      {credits.cast.slice(0, 6).map((member) => (
        <div className="scroll-item" key={member.id}>
          <div className="text-center">
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={member.name}
              className="img-fluid rounded"
            />
            <p className="text-white mt-2">
              <strong>{member.name}</strong>
            </p>
            <p className="text-white">{member.character}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* <h2 className="d-flex justify-content-center text-warning mt-5"><b>Crew</b></h2>
  <div className="scroll-container">
    <div className="scroll-content">
      {credits.crew.slice(0, 10).map((member) => (
        <div className="scroll-item" key={member.id}>
          <div className="text-center">
            <img
              src={
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                  : 'https://via.placeholder.com/200x300?text=No+Image'
              }
              alt={member.name}
              className="img-fluid rounded"
            />
            <p className="text-white mt-2">
              <strong>{member.name}</strong>
            </p>
            <p className="text-white">{member.job}</p>
          </div>
        </div>
      ))}
    </div>
  </div> */}
  
</div>




    </div>
  );
}

export default MovieDetailPage;
