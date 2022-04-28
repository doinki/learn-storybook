import Link from 'next/link';
import type { ElementType, FC } from 'react';
import { Fragment, memo } from 'react';

import StoreCard from '@/molecules/StoreCard';
import type { Store } from '@/types';

interface StoreCardListProps {
  className?: HTMLElement['className'];
  /** @default 'ul' */
  component?: ElementType;
  /** @default false */
  isError?: boolean;
  /** @default false */
  isLoading?: boolean;
  /** @default [] */
  items?: Store[];
}

const StoreCardList: FC<StoreCardListProps> = ({
  component = 'ul',
  items = [],
  className,
  isLoading,
  isError,
}) => {
  const Component = component;
  const isFragment = component === Fragment;
  const props = {
    className,
  };

  if (isLoading) {
    return (
      <Component {...(!isFragment && props)}>
        <li>
          <StoreCard loading />
        </li>
        <li>
          <StoreCard loading />
        </li>
        <li>
          <StoreCard loading />
        </li>
      </Component>
    );
  }

  if (isError) {
    return (
      <Component {...(!isFragment && props)}>
        <section className="flex h-16 items-center justify-center bg-white">
          Error
        </section>
      </Component>
    );
  }

  if (items.length === 0) {
    return (
      <Component {...(!isFragment && props)}>
        <section className="flex h-16 items-center justify-center bg-white">
          Empty
        </section>
      </Component>
    );
  }

  return (
    <Component {...(!isFragment && props)}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href={`/stores/${item.id}`}>
            <a>
              <StoreCard {...item} />
            </a>
          </Link>
        </li>
      ))}
    </Component>
  );
};

export default memo(StoreCardList);
