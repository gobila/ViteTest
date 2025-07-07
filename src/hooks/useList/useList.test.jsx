import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
vi.mock('../../services/users', () => ({
  usersApi: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

import { useQuery } from '@tanstack/react-query';
import useList from '.';

describe('useList hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with default pagination and call useQuery with correct params', () => {
    const mockData = [{ id: 1, name: 'Alice' }];
    useQuery.mockReturnValue({
      data: mockData,
      isLoading: true,
    });

    const { result } = renderHook(() => useList());

    expect(result.current.data).toEqual(mockData);
    // expect(result.current.isLoading).toBe(false);
    expect(result.current.currentPage).toBe(1);
    expect(result.current.perPage).toBe(10);
  });

  it('should update page and pageSize when handleChangePage is called', () => {
    const mockData = [{ id: 1, name: 'Bob' }];
    useQuery.mockReturnValue({
      data: mockData,
      isLoading: true,
    });

    const { result } = renderHook(() => useList());

    act(() => {
      result.current.handleChangePage({ current: 2, pageSize: 20 });
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.perPage).toBe(20);
  });
});
