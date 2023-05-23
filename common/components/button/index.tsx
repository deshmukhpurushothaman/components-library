import React, { ReactNode } from 'react';
import { getSplitVariant, getVariant, getVariantSize, getVariantType } from './styles';
import { SPINNER_SIZES, Spinner } from '../spinner';
import { IconChevronDown } from '../../icons/IconChevronDown';

export enum BUTTON_TYPES {
  PRIMARY = 'primary',
  DEFAULT = 'default',
  SUBTLE = 'subtle',
  WARNING = 'warning',
  SUCCESS = 'success',
  DANGER = 'danger',
  LINK = 'link',
}

export const BUTTON_VARIANT = {
  NORMAL: 'normal',
  SPLIT: 'split',
};

export const BUTTON_SIZES = {
  MEDIUM: 'medium',
  SMALL: 'small',
};

export interface ButtonProps {
  id?: string;
  type?: BUTTON_TYPES;
  size?: string;
  variant?: string;
  children?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  splitActionIcon?: JSX.Element;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onSplitAction?: () => void;
}

export function Button(props: ButtonProps): JSX.Element {
  const {
    children,
    id,
    type = BUTTON_TYPES.DEFAULT,
    size = BUTTON_SIZES.MEDIUM,
    variant = BUTTON_VARIANT.NORMAL,
    loading = false,
    disabled = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    onClick,
    onSplitAction,
    splitActionIcon,
  } = props;
  return (
    <div
      id={id}
      className={`py-2 px-4 rounded flex items-center ${getVariantType(type)} ${getVariantSize(size)} ${getVariant(variant)} ${fullWidth ? 'w-full' : ''}`}
      disabled={disabled}
      // @ts-ignore
      onClick={onClick}
    >
      {loading ? (
        <Spinner size={SPINNER_SIZES.TINY} />
      ) : (
        leftIcon && <div className="flex items-center justify-center relative w-5 h-5">{leftIcon}</div>
      )}
      {children}
      {rightIcon && <div className="flex items-center justify-center relative w-5 h-5">{rightIcon}</div>}
      {variant === BUTTON_VARIANT.SPLIT && (
        <div
          tabIndex={1}
          className={`${!disabled
            ? `ml-2 rounded-tr-4 rounded-br-4 w-8 h-8 flex items-center justify-center outline-none opacity-50`
            : `ml-2 rounded-tr-4 rounded-br-4 w-8 h-8 flex items-center justify-center cursor-not-allowed outline-none opacity-50 ${getSplitVariant(type)}`
            }`}
          onClick={onSplitAction}
        >
          <div className="h-5 w-5 flex items-center justify-center">
            {splitActionIcon ? splitActionIcon : <IconChevronDown size="20" />}
          </div>
        </div>
      )}
    </div>
  )
}