import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pagination({ currentPage, onPageChange, totalPages }) {
  return (
    <div className="d-flex justify-content-end align-items-center mt-4">
      {/* Previous Page Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn btn-link me-2"
      >
        <FaChevronLeft />
        </button>

      {/* Page Info */}
      <span className="text-dark">Page {currentPage} of {totalPages}</span>

      {/* Next Page Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-link ms-2"
      >
        <FaChevronRight />
        </button>
    </div>
  );
}

export default Pagination;
