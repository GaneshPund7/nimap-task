import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/api/movieApi';
import MovieCard from '../MovieCard';
import Pagination from '../Pagination'; 
function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';   
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (query) {
      searchMovies(query, page).then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      });
    }
  }, [query, page]);

  if (!query) {
    return <h2>Please enter a search query to find movies.</h2>;
  }

  return (
    <div className="container-fluid my-4 mt-5">
      <h1 className="text-center mb-4 mt-5"> </h1>
      {movies.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
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

export default SearchPage;
