import React from 'react';
import { Button, Form, Input } from 'antd';
import { Controller } from 'react-hook-form';
import { loginError } from '../../store/auth/authSlice';

const loginLabels = {
  emailLabel: 'Email',
  emailPlaceholder: 'Seu email ou usuário',
  passwordLabel: 'Senha',
  passwordPlaceholder: 'Sua senha',
  submitLabel: 'Entrar',
  errorGeneric: 'Usuário ou senha inválidos',
  errorInvalidField: 'Email ou senha inválidos',
};

export const LoginForm = ({ onSubmit, control, handleSubmit, errors }) => {
  return (
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
        data-testid="emailInput"
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
        data-testid="passwordInput"
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
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '100%' }}
          data-testid="submitButton"
        >
          {loginLabels.submitLabel}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
