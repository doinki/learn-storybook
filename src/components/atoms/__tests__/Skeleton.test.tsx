import { render, screen } from '@testing-library/react';

import Skeleton from '../Skeleton';
import { Circle, Default, Rectangle } from '../Skeleton/Skeleton.stories';

describe('atoms/Skeleton', () => {
  test('Have its own classname', () => {
    const className = 'h-64 w-64 bg-black';
    render(<Skeleton className={className} />);
    expect(screen.getByText('', { selector: 'span' })).toHaveClass(className);
  });

  test('No children', () => {
    render(<Skeleton />);
    expect(screen.getByText('', { selector: 'span' })).toBeEmptyDOMElement();
  });

  test('Support dark mode', () => {
    render(<Skeleton />);
    expect(screen.getByText('', { selector: 'span' }).className).toMatch(
      'dark:bg'
    );
  });

  test('Default should have color only content area', () => {
    render(<Default {...Default.args} />);
    expect(screen.getByText('', { selector: 'span' })).toHaveClass(
      'bg-clip-content',
      'p-1',
      'rounded-md'
    );
  });

  test('Circle should have rounded-full classname', () => {
    render(<Circle {...Circle.args} />);
    expect(screen.getByText('', { selector: 'span' })).toHaveClass(
      'rounded-full'
    );
  });

  test('Rectangle should be a right angle', () => {
    render(<Rectangle {...Rectangle.args} />);
    expect(screen.getByText('', { selector: 'span' }).className).not.toMatch(
      'rounded'
    );
  });
});
