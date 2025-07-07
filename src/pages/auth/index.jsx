import { Button, Flex, Form, Input, Image, Alert } from 'antd';
import React, { useEffect } from 'react';

import { loginError, loginSuccess } from '../../store/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Controller, useForm } from 'react-hook-form';
import { StyledImage } from './styles';
import { authApi } from '../../services/auth';
import LoginForm from '../../components/LoginForm';

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
  const userData = useSelector((state) => state.userData.userData);

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
      dispatch(loginError({ error: error?.message || loginLabels.errorGeneric }));
      setError('username', { type: 'manual', message: '' });
      setError('password', { type: 'manual', message: '' });
    }
  };

  return (
    <Flex width="100%" bgcolor="blue" style={{ height: '100vh' }}>
      <StyledImage src="src/assets/images/loginBackground.png" alt="Ita frotas" />
      <Flex bgcolor="white" justify="center" align="center" style={{ width: '50%' }}>
        <LoginForm
          onSubmit={onSubmit}
          loginLabels={loginLabels}
          control={control}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Flex>
    </Flex>
  );
};
