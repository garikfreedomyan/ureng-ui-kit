import React from 'react';

import { useTheme } from 'context';
import { classNames } from 'utils';
import styles from './input.module.scss';

export interface IInputProps {
  className?: string;
  fieldClassName?: string;
  size?: 'small' | 'medium' | 'large';
  colorScheme?: 'light' | 'dark';
  autoColor?: boolean;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  type?:
    | 'date'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'time'
    | 'email'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'url';
  inputMode?: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  id?: string;
  name?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string | number;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  required?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  refLink?: React.RefObject<HTMLInputElement> | null;
}

Input.defaultProps = {
  size: 'medium',
  colorScheme: 'light',
  autoColor: true,
  type: 'text',
} as IInputProps;

export function Input({
  className,
  size,
  colorScheme,
  autoColor,
  icon: Icon,
  placeholder,
  disabled,
  ...props
}: IInputProps) {
  const { theme } = useTheme();

  return (
    <label className={styles.label}>
      {Icon && (
        <Icon
          className={classNames(
            styles.icon,
            styles[`icon--${size}`],
            styles[`icon--${colorScheme}`],
            autoColor ? styles[`icon--${theme}-mode`] : undefined
          )}
        />
      )}
      <input
        type="text"
        className={classNames(
          styles.input,
          styles[`input--${size}`],
          styles[`input--${colorScheme}`],
          autoColor ? styles[`input--${theme}-mode`] : undefined,
          Icon ? styles['input--with-icon'] : undefined,
          className
        )}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
    </label>
  );
}
