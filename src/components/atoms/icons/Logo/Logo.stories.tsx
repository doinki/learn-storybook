import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from '.';

export default {
  component: Logo,
  title: 'icons/Logo',
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: 128,
  width: 128,
};
