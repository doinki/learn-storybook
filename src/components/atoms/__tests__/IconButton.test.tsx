import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Default, Edge } from '../IconButton/IconButton.stories';

describe('atoms/IconButton', () => {
  test('Should be clickable', async () => {
    const onClick = jest.fn();
    render(<Default {...Default.args} onClick={onClick} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('Should not be clickable', async () => {
    const onClick = jest.fn();
    render(<Default {...Default.args} disabled onClick={onClick} />);

    const button = screen.getByRole('button');
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });

  test('Should have icon', () => {
    render(<Default {...Default.args} />);

    expect(screen.getByRole('button')).toContainElement(
      screen.getByTestId('icon')
    );
  });

  test('Should have class related to edge', () => {
    const { rerender } = render(<Edge {...Edge.args} edge="start" />);
    expect(screen.getByRole('button').className).toMatch(/-ml-/);

    rerender(<Edge {...Edge.args} edge="end" />);
    expect(screen.getByRole('button').className).toMatch(/-mr-/);
  });

  test('Should have active:, focus:, hover: class', async () => {
    render(<Default {...Default.args} />);

    const { className } = screen.getByRole('button');

    expect(className).toMatch(/active:bg-/);
    expect(className).toMatch(/dark:active:bg-/);
    expect(className).toMatch(/focus-visible:bg-/);
    expect(className).toMatch(/dark:focus-visible:bg-/);
    expect(className).toMatch(/hover:bg-/);
    expect(className).toMatch(/dark:hover:bg-/);
  });
});
