import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoff } from '../../store/auth/authSlice';
import { StyledMenu, StyledMenuItem } from './styles';
import SubMenu from 'antd/es/menu/SubMenu';

const HeaderMenu = () => {
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();

  const onLogoff = () => {
    dispatch(logoff());
  };
  return (
    <StyledMenu mode="inline" data-testid="header_menu">
      <SubMenu key="sub1" title={userData.user} style={{ border: 'none' }}>
        <StyledMenuItem
          key="1"
          style={{
            position: 'absolute',
          }}
          onClick={() => {
            onLogoff();
          }}
        >
          Sair
        </StyledMenuItem>
      </SubMenu>
    </StyledMenu>
  );
};

export default HeaderMenu;
