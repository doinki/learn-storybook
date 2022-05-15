import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FixedHeaderBase from '.';

export default {
  component: FixedHeaderBase,
  decorators: [(story) => <div className="h-[200vh]">{story()}</div>],
  parameters: {
    layout: 'fullscreen',
  },
  title: 'atoms/FixedHeaderBase',
} as ComponentMeta<typeof FixedHeaderBase>;

const Template: ComponentStory<typeof FixedHeaderBase> = (args) => (
  <FixedHeaderBase {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
