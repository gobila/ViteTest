import React from 'react';
import { Avatar, Flex, Space, Table } from 'antd';
import Title from 'antd/es/typography/Title';
import useList from '../../hooks/useList';
import SearchList from '../Search';
// import Search from '../Search';

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
  const { data, isLoading, handleChangePage, currentPage, perPage } = useList();

  const pagination = {
    current: currentPage,
    pageSize: perPage,
    total: data?.total || 0,
    showSizeChanger: true,
    pageSizeOptions: ['5', '10', '50'],
  };

  return (
    <Flex style={{ padding: '24px', maxWidth: '1390px', margin: 'auto' }} width="100%" vertical>
      <Title level={3}>Usuários</Title>
      <SearchList />
      {isLoading && <p>Carregando...</p>}
      {!isLoading && (
        <Table
          columns={columns}
          dataSource={Array.isArray(data?.data) ? data.data : []}
          pagination={pagination}
          onChange={handleChangePage}
        />
      )}
    </Flex>
  );
};

export default List;
