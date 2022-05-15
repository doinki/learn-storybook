import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  edge?: 'start' | 'end';
}

const IconButton: FC<IconButtonProps> = ({ className, edge, ...props }) => {
  let cn;

  switch (edge) {
    case 'start':
      cn = '-ml-1';
      break;
    case 'end':
      cn = '-mr-1';
      break;
    default:
  }

  return (
    <button
      className={clsx(
        'rounded-full p-1 transition',
        'hover:bg-neutral-900/10 focus-visible:bg-neutral-900/10 active:bg-neutral-900/10 dark:hover:bg-gray-100/10 dark:focus-visible:bg-gray-100/10 dark:active:bg-gray-100/10',
        className,
        cn
      )}
      type="button"
      {...props}
    />
  );
};

export default IconButton;
