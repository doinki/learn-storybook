import { BackspaceIcon } from '@heroicons/react/outline';
import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconButton from '.';

export default {
  component: IconButton,
  decorators: [
    (story) => (
      <div className="flex items-center bg-white px-1 dark:bg-neutral-500">
        {story()}
      </div>
    ),
  ],
  title: 'atoms/IconButton',
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <BackspaceIcon className="h-6 w-6" data-testid="icon" />,
  onClick: action('click'),
};

export const Edge = Template.bind({});
Edge.args = {
  children: <BackspaceIcon className="h-6 w-6" data-testid="icon" />,
  edge: 'start',
  onClick: action('click'),
};
