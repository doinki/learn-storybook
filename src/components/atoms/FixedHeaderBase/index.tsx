import type { FC, ReactNode } from 'react';

interface FixedHeaderBaseProps {
  children?: ReactNode;
}

const height = 'h-14';

const FixedHeaderBase: FC<FixedHeaderBaseProps> = ({ children }) => {
  return (
    <header>
      <div className={height} />
      <div
        className={`fixed top-0 left-0 right-0 mx-auto w-full max-w-screen-sm bg-white dark:bg-neutral-700 ${height}`}
        data-testid="fixed"
      >
        <div
          className="flex h-full items-center px-4"
          data-testid="fixed__wrapper"
        >
          {children}
        </div>
      </div>
    </header>
  );
};

export default FixedHeaderBase;
