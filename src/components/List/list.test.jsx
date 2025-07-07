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
import * as Mock from './mock.json';

describe('List component', () => {
  const mockData = Mock;

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
    expect(screen.getByText(/George Bluth/i)).toBeInTheDocument();
    expect(screen.getByText(/george.bluth@reqres.in/i)).toBeInTheDocument();
    expect(screen.getAllByText(/mais detalhes/i)).toHaveLength(10);
  });
});
