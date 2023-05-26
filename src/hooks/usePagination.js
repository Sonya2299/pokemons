import { useCallback, useState } from "react";

const usePagination = (initialPage) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
  }, []);

  return [page, handlePageChange];
};

export default usePagination;
