import { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/movieApi';
import Pagination from '../Pagination';
import MovieCard from '../MovieCard';  // Import your custom MovieCard component

function UpcomingPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUpcomingMovies(page).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div className="container-fluid my-4 mt-5">
      <h1 className="text-center mb-4 mt-5 p-2"> </h1>
      {isLoading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}    
      {!isLoading && movies.length === 0 ? (
        <p>Movies not found </p>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              {/* Use the custom MovieCard here */}
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
     
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

export default UpcomingPage;
