import "./Pagination.css";
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  const handlePageClick = (data) => {
    setPageNumber(data.selected + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ReactPaginate
      className="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item prev-button"
      nextClassName="page-item next-button"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      previousLabel="Prev"  
      nextLabel="Next"      
      pageCount={info?.pages || 1}
      onPageChange={handlePageClick}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;