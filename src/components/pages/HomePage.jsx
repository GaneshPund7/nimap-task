import { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/movieApi';
import MovieCard from '../MovieCard';
import Pagination from '../../components/Pagination';
 
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    getPopularMovies(page).then((response) => {
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <div className="container-fluid my-4 mt-5 text-light">
      <h1 className="text-center mb-4 mt-5 p-2"> </h1>
      {isLoading && (
  <div
    style={{
      position: 'fixed', // Keeps the loader in the center of the viewport
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',  
      zIndex: 9999, 
    }}
  >
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
)}

      {movies.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
      
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          totalPages={totalPages}
        />
 
    </div>
  );
}

export default HomePage;
