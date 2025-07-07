import React from 'react';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import List from '.';
vi.mock('../../services/users', () => ({
  usersApi: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

import { useQuery } from '@tanstack/react-query';

describe('List component', () => {
  const mockData = {
    data: [
      {
        id: 1,
        first_name: 'Fulano',
        last_name: 'Silva',
        avatar: 'avatar-url',
        email: 'fulano@email.com',
      },
    ],
    total: 1,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render List compont when data is loading', () => {
    useQuery.mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<List />);
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });

  it('should render List compont when data is loaded', () => {
    useQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
    });

    render(<List />);
    expect(screen.getByText(/fulano silva/i)).toBeInTheDocument();
    expect(screen.getByText(/fulano@email.com/i)).toBeInTheDocument();
    expect(screen.getByText(/mais detalhes/i)).toBeInTheDocument();
  });
});
