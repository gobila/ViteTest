import { useState } from 'react';

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const handleChangePage = (page) => {
    setCurrentPage(page.current);
    setPerPage(page.pageSize);
  };

  return { handleChangePage, perPage, currentPage };
};

export default usePagination;
