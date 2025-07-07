import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Home } from '.';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

import { useSelector, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('Home component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  const queryClient = new QueryClient();
  it('should redirect to /auth when token is not present', () => {
    useSelector.mockReturnValue({});
    useDispatch.mockReturnValue(() => {});

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.queryByTestId('div_header')).not.toBeInTheDocument();
    expect(screen.queryByTestId('div_header_logo')).not.toBeInTheDocument();
    expect(screen.queryByTestId('header_menu')).not.toBeInTheDocument();
  });

  it('should render home page', () => {
    useSelector.mockReturnValue({ nome: 'Fulano' });
    useDispatch.mockReturnValue(() => {}); // mock do dispatch

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByTestId('div_header')).toBeInTheDocument();
    expect(screen.getByTestId('div_header_logo')).toBeInTheDocument();
    expect(screen.getByTestId('header_menu')).toBeInTheDocument();
  });
});
