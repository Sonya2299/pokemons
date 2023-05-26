import Pagination from "@mui/material/Pagination";

const MyPagination = ({ page, handlePageChange }) => {
  return <Pagination page={page} onChange={handlePageChange} count={15} />;
};

export default MyPagination;
