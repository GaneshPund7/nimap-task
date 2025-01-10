import { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api/movieApi';
import MovieCard from '../MovieCard';
import Pagination from '../Pagination';

function TopRatedPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Start loading
    getTopRatedMovies(page).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setIsLoading(false); // End loading
    });
  }, [page]);

  return (
    <div className="container-fluid my-4 mt-5">
      <h1 className="mb-4 mt-5 p-2"> </h1>
      {/* Loader */}
      {isLoading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && movies.length === 0 ? (
        <div className="d-flex justify-content-center">
          <p>No movies found.</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
      {/* Hide Pagination when loading */}
      {!isLoading && (
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}

export default TopRatedPage;
