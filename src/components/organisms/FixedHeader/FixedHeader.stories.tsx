import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FixedHeader from '.';

export default {
  component: FixedHeader,
  title: 'organisms/FixedHeader',
} as ComponentMeta<typeof FixedHeader>;

const Template: ComponentStory<typeof FixedHeader> = (args) => (
  <FixedHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Header',
  viewCount: 10000,
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  children: 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ',
  viewCount: 30000,
};
