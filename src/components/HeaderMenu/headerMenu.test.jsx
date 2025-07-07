import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderMenu from '.';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

vi.mock('../../store/auth/authSlice', () => ({
  logoff: vi.fn(() => ({ type: 'auth/logoff' })),
}));

import { useSelector, useDispatch } from 'react-redux';
import { logoff } from '../../store/auth/authSlice';

describe('HeaderMenu component', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockReturnValue({ user: 'Usuário Teste' });
  });

  it('should render HeaderMenu componte with correctly data', () => {
    render(<HeaderMenu />);
    const menu = screen.getByTestId('header_menu');
    expect(menu).toBeInTheDocument();
    expect(screen.getByText('Usuário Teste')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Usuário Teste'));
    expect(screen.getByText('Sair')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Sair'));
    expect(mockDispatch).toHaveBeenCalledWith(logoff());
  });
});
