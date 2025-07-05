import { Button, Flex, Form, Input } from 'antd';
import React from 'react';

import { loginStart } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';

export const Auth = () => {
  const dispatch = useDispatch();

  const handleSubmit = (userData) => {
    dispatch(loginStart(userData));
  };
  return (
    <Flex>
      <Form name="validateOnly" layout="vertical" autoComplete="off" onFinish={handleSubmit}>
        <Form.Item name="email" label="Email">
          <Input placeholder="Email" data-testid="emailInput" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input placeholder="Senha" data-testid="passwordInput" />
        </Form.Item>
        <Button type="primary" htmlType="submit" data-testid="submitButton">
          Confirmar
        </Button>
      </Form>
    </Flex>
  );
};
