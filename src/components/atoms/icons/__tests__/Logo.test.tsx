import { render, screen } from '@testing-library/react';

import Logo from '../Logo';

describe('atoms/Logo', () => {
  test('Logo should have alt', () => {
    render(<Logo />);

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Logo');
  });

  test('Logo should use next/image', () => {
    render(<Logo />);
    const iamges = screen.getAllByRole('img', { hidden: true });

    expect(iamges).toHaveLength(2);
    expect(iamges[1]).toHaveAttribute('data-nimg');
    expect(iamges[1]).toHaveStyle({
      position: 'absolute',
    });
  });
});
