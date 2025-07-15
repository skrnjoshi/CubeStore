import { Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePageChange = (pageNum) => {
    if (isAdmin) {
      navigate(`/admin/productlist/${pageNum}`);
    } else {
      navigate(
        keyword ? `/search/${keyword}/page/${pageNum}` : `/page/${pageNum}`
      );
    }
  };

  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            onClick={() => handlePageChange(x + 1)}
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
