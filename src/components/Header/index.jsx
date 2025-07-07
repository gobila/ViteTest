import React from 'react';
import { Flex } from 'antd';
import HeaderMenu from '../HeaderMenu';

export const Header = () => {
  return (
    <Flex
      justify="space-between"
      data-testid="div_header"
      style={{ padding: '10px', backgroundColor: '#FFFFFF' }}
    >
      <Flex align="center" gap="10px" data-testid="div_header_logo">
        <img src="src/assets/images/inc.png" alt="avatar inc" width="45px" />
        <p>Nome da empresa</p>
      </Flex>
      <HeaderMenu />
    </Flex>
  );
};

export default Header;
