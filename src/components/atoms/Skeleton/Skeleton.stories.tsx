import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Skeleton from '.';

export default {
  component: Skeleton,
  title: 'Skeleton',
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'w-[240px] h-[24px]',
  variant: 'text',
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  className: 'w-[120px] h-[120px]',
  variant: 'rectangle',
};

export const Circle = Template.bind({});
Circle.args = {
  className: 'w-[120px] h-[120px]',
  variant: 'circular',
};
