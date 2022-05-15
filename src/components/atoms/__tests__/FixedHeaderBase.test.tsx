import { render, screen } from '@testing-library/react';

import FixedHeaderBase from '../FixedHeaderBase';
import { Default } from '../FixedHeaderBase/FixedHeaderBase.stories';

describe('atoms/FixedHeaderBase', () => {
  test('Support dark mode', () => {
    render(<FixedHeaderBase />);
    expect(screen.getByTestId('fixed').className).toMatch('dark:bg-');
  });

  test('Should have children', () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId('fixed__wrapper')).not.toBeEmptyDOMElement();
  });
});
