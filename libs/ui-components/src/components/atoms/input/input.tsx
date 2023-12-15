import React, { forwardRef } from 'react';

import { twMerge } from 'tailwind-merge';

export type InputProps = {
  label?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  customClasses?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { onChange, placeholder, type, label, id, name, customClasses, ...props },
    ref,
  ) => {
    const inputClasses = twMerge(
      label && 'pt-5',
      `w-full leading-5 pl-4 text-sm text-monochrome-darker border border-gray-300 rounded-md focus:outline-none h-14`,
      customClasses,
    );

    return (
      <div className='flex flex-col gap-1 self-center'>
        {label && (
          <label
            className='absolute pl-4 pt-2.5 text-xs text-monochrome-mid'
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          name={name}
          id={id}
          onChange={onChange}
          className={inputClasses}
          placeholder={placeholder}
          type={type}
          {...props}
        />
      </div>
    );
  },
);
