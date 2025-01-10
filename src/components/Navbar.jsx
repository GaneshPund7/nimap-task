import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      window.location.href = `/search?query=${search}`;
    }
  };

  const handleNavLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 w-100 fixed-top shadow">
      <Link className="navbar-brand" to="/">
       <h5> Movie<span className="text-primary ">DB</span></h5>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
       
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={handleNavLinkClick}>
              Popular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/top-rated" onClick={handleNavLinkClick}>
              Top Rated
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/upcoming" onClick={handleNavLinkClick}>
              Upcoming
            </Link>
          </li>
        </ul>
        <form className="d-flex ms-2" onSubmit={handleSearch}>
          <input
            className="form-control me-2 form-control-sm shadow-sm"
            type="search"
            placeholder="Search movies..."
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-secondary btn-sm shadow-sm" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
