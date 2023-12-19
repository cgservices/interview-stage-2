import React from 'react';

import { twMerge } from 'tailwind-merge';

export const ButtonVariants = {
  PRIMARY: 'primary',
} as const;

export type ButtonVariantsProps =
  (typeof ButtonVariants)[keyof typeof ButtonVariants];

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  variant?: ButtonVariantsProps;
  isLoading?: boolean;
  customClasses?: string;
  onClick?: () => void;
};

export const Button = ({
  label,
  variant,
  isLoading,
  customClasses = '',
  ...props
}: ButtonProps) => {
  const classes = twMerge(
    variant === ButtonVariants.PRIMARY &&
      'bg-primary-main hover:bg-primary-dark text-monochrome-darker focus:shadow-[0_0_0_2px_white,_0_0_0_4px_theme(colors.primary.shadow)] w-full',
    props.disabled && 'text-monochrome-mid cursor-not-allowed',
    isLoading && 'pointer-events-none',
    customClasses,
  );

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};
