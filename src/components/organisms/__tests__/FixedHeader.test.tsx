import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type { NextRouter } from 'next/router';

import { Default, WithLongTitle } from '../FixedHeader/FixedHeader.stories';

const mockedRouter = {
  back: jest.fn(),
} as unknown as NextRouter;

afterEach(() => {
  jest.clearAllMocks();
});

describe('organisms/FixedHeader', () => {
  test('children', () => {
    render(<Default {...Default.args} />, {
      wrapper: ({ children }) => (
        <RouterContext.Provider value={mockedRouter}>
          {children}
        </RouterContext.Provider>
      ),
    });

    expect(screen.getByRole('heading')).toHaveTextContent('Header');
  });

  test('button', async () => {
    render(<Default {...Default.args} />, {
      wrapper: ({ children }) => (
        <RouterContext.Provider value={mockedRouter}>
          {children}
        </RouterContext.Provider>
      ),
    });

    const button = screen.getByRole('button');
    expect(button).not.toBeEmptyDOMElement();

    await userEvent.click(button);
    expect(mockedRouter.back).toHaveBeenCalledTimes(1);
  });

  test('viewCount', async () => {
    render(<WithLongTitle {...WithLongTitle.args} />, {
      wrapper: ({ children }) => (
        <RouterContext.Provider value={mockedRouter}>
          {children}
        </RouterContext.Provider>
      ),
    });

    expect(screen.getByTestId('eye-icon')).toBeInTheDocument();
    expect(screen.getByText('30000')).toBeInTheDocument();
  });
});
