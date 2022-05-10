import type { ComponentMeta, ComponentStory } from '@storybook/react';

import type { Store } from '@/types';

import StoreCard from '.';

export default {
  component: StoreCard,
  decorators: [
    (Story) => (
      <div className="max-w-screen-sm">
        <Story />
      </div>
    ),
  ],
  excludeStories: /^mocked/,
  title: 'molecules/StoreCard',
} as ComponentMeta<typeof StoreCard>;

export const mockedStore: Store = {
  description: 'lorem ipsum',
  id: 1,
  marketName: 'lorem ipsum',
  name: 'lorem ipsum',
  rating: 5,
  reviewCount: 0,
  src: 'https://via.placeholder.com/120',
  status: 'OPEN',
  tags: ['lorem', 'ipsum'],
};

const Template: ComponentStory<typeof StoreCard> = (args) => (
  <StoreCard {...args} />
);

export const Default = Template.bind({});
Default.args = mockedStore;

export const Closed = Template.bind({});
Closed.args = {
  ...mockedStore,
  status: 'CLOSED',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
