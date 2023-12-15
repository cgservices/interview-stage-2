'use client';

import cx from 'classnames';
import Image from 'next/legacy/image';
import { default as NextLink } from 'next/link';

export type LinkIconPositionsProps = 'left' | 'right';

export type IconProps = {
  icon: { fields: { file: { url: string } } };
  iconWidth: number;
  iconHeight: number;
};

export type LinkProps = {
  text: string;
  classes?: string;
  slug?: string;
  baseURL: string;
} & React.HTMLAttributes<HTMLElement>;

export type LinkPropsWithIconProps = {
  iconPosition: LinkIconPositionsProps;
  iconProps: IconProps;
} & LinkProps;

export type LinkPropsWithoutIconProps = {
  iconPosition?: never;
  iconProps?: never;
} & LinkProps;

export const Link = ({
  text,
  classes = '',
  slug = '',
  baseURL,
  iconPosition,
  iconProps,
  ...props
}: LinkPropsWithIconProps | LinkPropsWithoutIconProps) => {
  const linkClasses = cx(classes);

  const renderIcon = (
    position: LinkIconPositionsProps,
    iconProps: IconProps,
  ) => {
    const { icon, iconWidth, iconHeight } = iconProps;
    return (
      <Image
        width={iconWidth}
        height={iconHeight}
        alt={`link icon to the ${position} of the text`}
        src={`https:${icon?.fields?.file?.url}`}
      />
    );
  };

  return (
    <div className='flex'>
      {iconPosition === 'left' && renderIcon('left', iconProps)}
      <NextLink
        href={`${baseURL}/${slug}`}
        target='_blank'
        aria-label={text}
        className={linkClasses}
        {...props}
      >
        {text}
      </NextLink>
      {iconPosition === 'right' && renderIcon('right', iconProps)}
    </div>
  );
};
