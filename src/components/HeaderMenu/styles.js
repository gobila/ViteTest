import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  position: relative;
  width: auto;
  background: none;
  border: none;
`;

export const StyledMenuItem = styled(Menu.Item)`
  padding: 4px;
  margin: 0px;
  width: 100%;
  box-shadow: #0000001f 0px 6px 16px 0px;
  z-index: 1;
`;
