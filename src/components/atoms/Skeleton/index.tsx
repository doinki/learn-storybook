import clsx from 'clsx';
import type { FC } from 'react';

interface SkeletonProps {
  className?: string;
  /** @default 'text' */
  variant?: 'text' | 'circular' | 'rectangle';
}

// TODO: animation
const Skeleton: FC<SkeletonProps> = ({ className, variant = 'text' }) => {
  let rounded;

  switch (variant) {
    case 'text':
      rounded = 'rounded-md p-1 bg-clip-content';
      break;
    case 'circular':
      rounded = 'rounded-full';
      break;
    case 'rectangle':
    default:
  }

  return (
    <span
      className={clsx('block bg-gray-200 dark:bg-gray-500', rounded, className)}
      data-testid="skeleton"
    />
  );
};

export default Skeleton;
