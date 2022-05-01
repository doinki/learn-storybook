import { composeStories } from '@storybook/testing-react';
import { render, screen } from '@testing-library/react';

import Skeleton from '.';
import * as stories from './Skeleton.stories';

const { Circle, Default, Rectangle } = composeStories(stories);

describe('atoms/Skeleton', () => {
  it('Have its own classname', () => {
    const className = 'h-64 w-64 bg-black';
    render(<Skeleton className={className} />);
    expect(screen.getByTestId('skeleton').className).toContain(className);
  });
  it('No children', () => {
    render(<Skeleton />);
    expect(screen.getByTestId('skeleton')).toBeEmptyDOMElement();
  });
  it('Support dark mode', () => {
    render(<Skeleton />);
    expect(screen.getByTestId('skeleton').className).toContain('dark:bg-');
  });
  it('Default has color only content area', () => {
    render(<Default />);
    expect(screen.getByTestId('skeleton').className).toContain(
      'bg-clip-content'
    );
  });
  it('Circle have rounded-full classname', () => {
    render(<Circle />);
    expect(screen.getByTestId('skeleton').className).toContain('rounded-full');
  });

  // snapshots
  it('Default snapshot', () => {
    render(<Default />);
    expect(screen.getByTestId('skeleton')).toMatchSnapshot();
  });
  it('Circle snapshot', () => {
    render(<Circle />);
    expect(screen.getByTestId('skeleton')).toMatchSnapshot();
  });
  it('Rectangle snapshot', () => {
    render(<Rectangle />);
    expect(screen.getByTestId('skeleton')).toMatchSnapshot();
  });
});
