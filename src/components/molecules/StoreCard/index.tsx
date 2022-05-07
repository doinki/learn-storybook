import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import type { FC } from 'react';
import { memo } from 'react';

import { Skeleton } from '@/atoms';
import { StoreStatus } from '@/constants';

interface StoreCardProps {
  description?: string;
  loading?: boolean;
  marketName?: string;
  name?: string;
  /** @default 0 */
  numberOfReviews?: number;
  rating?: number;
  src?: string;
  /** @default 'OPEN' */
  status?: 'OPEN' | 'CLOSED';
  /** @default [] */
  tags?: string[];
}

// TODO: Chip
const StoreCard: FC<StoreCardProps> = (props) => {
  const {
    status = 'OPEN',
    description,
    marketName,
    src,
    numberOfReviews = 0,
    rating,
    name,
    tags = [],
    loading,
  } = props;

  const image = (
    <>
      {src ? (
        <Image alt="스토어 이미지" layout="fill" src={src} unoptimized />
      ) : (
        <Skeleton className="h-full w-full" variant="rectangle" />
      )}
      {status !== 'OPEN' && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#00000033] font-medium text-white">
          {StoreStatus[status]}
        </div>
      )}
    </>
  );

  return (
    <article className="flex h-[120px] bg-white dark:bg-neutral-700">
      <section className="h-[120]px relative w-[120px]">
        {loading ? (
          <Skeleton className="h-[120px] w-[120px]" variant="rectangle" />
        ) : (
          image
        )}
      </section>
      <section className="flex flex-1 flex-col p-2">
        <header className="flex items-center space-x-1">
          <h2 className="text-lg font-bold">
            {loading ? <Skeleton className="h-[28px] w-[96px]" /> : name}
          </h2>
          <span className="text-sm text-gray-500">
            {loading ? <Skeleton className="h-[20px] w-[64px]" /> : marketName}
          </span>
        </header>
        <p className="text-sm text-gray-500">
          {loading ? <Skeleton className="h-[20px] w-[196px]" /> : description}
        </p>
        {!loading && tags.length > 0 && (
          <div className="mt-auto space-x-2">
            {tags.map((tag) => (
              <span key={tag} className="text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
        <footer className="mt-auto flex items-center">
          {loading ? (
            <Skeleton className="h-[24px] w-[64px]" />
          ) : (
            <>
              <StarIcon className="h-4 w-4 text-yellow-400" />
              {rating ? rating.toFixed(1) : '-'}({numberOfReviews})
            </>
          )}
        </footer>
      </section>
    </article>
  );
};

export default memo(StoreCard);
