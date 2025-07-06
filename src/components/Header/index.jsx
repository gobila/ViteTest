import { Flex } from 'antd';
import HeaderMenu from '../HeaderMenu';

export const Header = () => {
  return (
    <Flex justify="space-between" style={{ padding: '10px', backgroundColor: '#FFFFFF' }}>
      <Flex align="center" gap="10px">
        <img src="src/assets/images/inc.png" alt="" width="45px" />
        <p>Nome da empresa</p>
      </Flex>
      <HeaderMenu />
    </Flex>
  );
};

export default Header;
