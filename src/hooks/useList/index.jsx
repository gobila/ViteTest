import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { usersApi } from '../../services/users';

const useList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { data, isLoading } = useQuery({
    queryKey: ['users', currentPage, perPage],
    queryFn: () => usersApi(currentPage, perPage),
    keepPreviousData: true,
    staleTime: 1000 * 60 * 5,
  });

  const handleChangePage = (page) => {
    setCurrentPage(page.current);
    setPerPage(page.pageSize);
  };

  return { data, isLoading, handleChangePage, currentPage, perPage };
};

export default useList;
