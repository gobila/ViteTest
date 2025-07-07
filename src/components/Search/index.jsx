import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { StyledButton } from './styles';
const { Search } = Input;

const SearchList = () => {
  const onSearch = (value, _e, info) => {
    console.log(info === null || info === void 0 ? void 0 : info.source, value);
  };
  return (
    <Search
      placeholder="Pesquise nome ou documento"
      onSearch={onSearch}
      style={{ width: 200 }}
      enterButton={<StyledButton icon={<SearchOutlined />} type="primary" />}
    />
  );
};

export default SearchList;
