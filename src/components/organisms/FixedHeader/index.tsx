import { ArrowLeftIcon, EyeIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from 'react';

import FixedHeaderBase from '@/atoms/FixedHeaderBase';
import IconButton from '@/atoms/IconButton';

interface FixedHeaderProps {
  children?: ReactNode;
  viewCount?: number;
}

// TODO: Check previous page
const FixedHeader: FC<FixedHeaderProps> = ({ children, viewCount = 0 }) => {
  const { back } = useRouter();

  return (
    <FixedHeaderBase>
      <IconButton className="mr-4" edge="start" onClick={back}>
        <ArrowLeftIcon className="h-6 w-6" />
      </IconButton>
      <h1 className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
        {children}
      </h1>
      <section className="ml-auto flex items-center text-neutral-400">
        <EyeIcon className="h-4 w-4" data-testid="eye-icon" />
        <small className="ml-2">{viewCount}</small>
      </section>
    </FixedHeaderBase>
  );
};

export default FixedHeader;
