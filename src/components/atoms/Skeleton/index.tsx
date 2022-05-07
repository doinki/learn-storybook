import clsx from 'clsx';
import type { FC } from 'react';

interface SkeletonProps {
  className?: string;
  /**
   * @default 'text'
   */
  variant?: 'text' | 'circular' | 'rectangle';
}

// TODO: animation
const Skeleton: FC<SkeletonProps> = ({ className, variant = 'text' }) => {
  let tw;

  switch (variant) {
    case 'text':
      tw = 'p-1 rounded-md bg-clip-content';
      break;
    case 'circular':
      tw = 'rounded-full';
      break;
    case 'rectangle':
    default:
  }

  return (
    <span
      className={clsx('block bg-gray-200 dark:bg-gray-500', tw, className)}
    />
  );
};

export default Skeleton;
