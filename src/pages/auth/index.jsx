import { Button, Flex, Form, Input, Image, Alert } from 'antd';
import React, { useEffect } from 'react';

import { loginSuccess } from '../../store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { StyledImage } from './styles';
import { authApi } from '../../services/auth';

const loginLabels = {
  emailLabel: 'Email',
  emailPlaceholder: 'Seu email ou usuário',
  passwordLabel: 'Senha',
  passwordPlaceholder: 'Sua senha',
  submitLabel: 'Entrar',
  errorGeneric: 'Usuário ou senha inválidos',
  errorInvalidField: 'Email ou senha inválidos',
};

export const Auth = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = React.useState('');
  const userData = useSelector((state) => state.userData.userData);

  // TODO: melhorar criar tela login
  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      navigate('/');
    }
  }, [userData]);

  const onSubmit = async (data) => {
    try {
      const { username, password } = data;
      const callApi = await authApi({ username, password });
      dispatch(loginSuccess({ token: callApi?.token, user: username }));
      navigate('/');
    } catch (error) {
      //TODO: logar o error da api
      setLoginError(loginLabels.errorInvalidField);
      setError('username', { type: 'manual', message: '' });
      setError('password', { type: 'manual', message: '' });
    }
  };

  return (
    <Flex width="100%" bgcolor="blue" style={{ height: '100vh' }}>
      <StyledImage src="src/assets/images/loginBackground.png" alt="Ita frotas" />
      <Flex bgcolor="white" justify="center" align="center" style={{ width: '50%' }}>
        <Form
          layout="vertical"
          onFinish={handleSubmit(onSubmit)}
          style={{ maxWidth: '100%', padding: '64px', width: '100%' }}
        >
          <Form.Item
            label={loginLabels.emailLabel}
            validateStatus={errors.username ? 'error' : ''}
            help={errors.username?.message}
            style={{ marginBottom: 24 }}
          >
            <Controller
              name="username"
              control={control}
              rules={{ required: loginLabels.errorGeneric }}
              render={({ field }) => <Input {...field} />}
            />
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          </Form.Item>

          <Form.Item
            label={loginLabels.passwordLabel}
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password?.message}
            style={{ marginBottom: 24 }}
          >
            <Controller
              name="password"
              control={control}
              rules={{ required: loginLabels.errorGeneric }}
              render={({ field }) => <Input.Password {...field} />}
            />
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              {loginLabels.submitLabel}
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};
