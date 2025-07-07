import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '.';

vi.mock('react-redux', () => ({
  useSelector: vi.fn(),
  useDispatch: vi.fn(),
}));

describe('Header component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render header componte with correctly data', () => {
    useSelector.mockReturnValue({});
    useDispatch.mockReturnValue(() => {});

    const screen = render(<Header />);

    screen.debug();

    expect(screen.getByTestId('div_header')).toBeInTheDocument();
    expect(screen.getByTestId('div_header')).toHaveTextContent('Nome da empresa');
    expect(screen.getByTestId('div_header_logo')).toBeInTheDocument();
    expect(screen.getByTestId('header_menu')).toBeInTheDocument();
  });
  //   useSelector.mockReturnValue({ nome: 'Fulano' });
  //   useDispatch.mockReturnValue(() => {}); // mock do dispatch

  //   render(
  //     <QueryClientProvider client={queryClient}>
  //       <MemoryRouter>
  //         <Header />
  //       </MemoryRouter>
  //     </QueryClientProvider>,
  //   );

  //   expect(screen.getByTestId('div_header')).toBeInTheDocument();
  //   expect(screen.getByTestId('div_header_logo')).toBeInTheDocument();
  //   expect(screen.getByTestId('header_menu')).toBeInTheDocument();
  // });
});
