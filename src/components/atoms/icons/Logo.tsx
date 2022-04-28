import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

const Logo: FC<Omit<ImageProps, 'src'>> = (props) => {
  const { height = 64, width = 64, ...rest } = props;

  return (
    <Image
      alt="Logo"
      height={width}
      src="/logo.png"
      width={height}
      unoptimized
      {...rest}
    />
  );
};

export default Logo;
