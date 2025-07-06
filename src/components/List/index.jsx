import { Avatar, Flex, Space, Table } from 'antd';
import { useState } from 'react';
import { usersApi } from '../../services/users';
import { useQuery } from '@tanstack/react-query';

const List = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Nome completo',
      dataIndex: 'name',
      key: 'name',
      render: (_, record) => (
        <Flex justifyContent="center" align="center" gap="5px">
          <Avatar src={record.avatar} alt={`avatar`} />
          <p>
            {record.first_name} {record.last_name}
          </p>
        </Flex>
      ),
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Ações',
      key: 'action',
      render: () => (
        <Space size="middle">
          {/* TODO: adcionar link */}
          <a>Mais detalhes</a>
        </Space>
      ),
    },
  ];
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

  const pagination = {
    current: currentPage,
    pageSize: perPage,
    total: data?.total || 0,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '50'],
  };

  return (
    <>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <Table
          columns={columns}
          dataSource={Array.isArray(data?.data) ? data.data : []}
          pagination={pagination}
          onChange={handleChangePage}
        />
      )}
    </>
  );
};

export default List;
