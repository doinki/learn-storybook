import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Fragment } from 'react';

import { mockedStore } from '@/molecules/StoreCard/StoreCard.stories';

import StoreCardList from '.';

export default {
  component: StoreCardList,
  decorators: [(story) => <div className="max-w-screen-sm">{story()}</div>],
  excludeStories: /^mocked/,
  title: 'StoreCardList',
} as ComponentMeta<typeof StoreCardList>;

export const mockedStores = new Array(10)
  .fill(0)
  .map((_, i) => ({ ...mockedStore, id: i }));

const Template: ComponentStory<typeof StoreCardList> = (args) => (
  <StoreCardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: mockedStores,
};

export const WithFragment = Template.bind({});
WithFragment.args = {
  component: Fragment,
  items: mockedStores,
};
WithFragment.decorators = [
  (story) => <div className="list-none">{story()}</div>,
];

export const DivideY = Template.bind({});
DivideY.args = {
  className: 'divide-y-8 divide-gray-100',
  items: mockedStores,
};

export const Loading = Template.bind({});
Loading.args = {
  className: 'divide-y-8 divide-gray-100',
  isLoading: true,
  items: mockedStores,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
