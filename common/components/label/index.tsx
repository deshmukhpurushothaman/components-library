import React from 'react';
import { getVariantSize, getVariantType } from './styles';
// import { IconClose } from '../../icons/IconClose';

export const LABEL_TYPES = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    DANGER: 'danger',
    WARNING: 'warning',
    INFO: 'info',
    LIGHT: 'light',

    PRIMARY_LIGHT: 'primary-light',
    SUCCESS_LIGHT: 'success-light',
    DANGER_LIGHT: 'danger-light',
    WARNING_LIGHT: 'warning-light',
    INFO_LIGHT: 'info-light',
    DEFAULT_LIGHT: 'default-light',
};

export const LABEL_SIZES = {
    SMALL: 'small',
    LARGE: 'large',
    VERY_LARGE: 'veryLarge',
};

export type LabelProps = {
    type: string;
    size: string;
    children: React.ReactNode;
    onClose?: () => void;
};

export function Label(props: LabelProps): JSX.Element {
    const { children, size, type, onClose } = props;

    return (
        <div className="flex">
            <div className={`text-center flex items-center justify-between min-w-48 rounded-4 px-space-8 text-font-size-12 font-semibold border-none text-white leading-16 whitespace-nowrap
       ${getVariantType(type)} ${getVariantSize(size)}`}>
                {children}
                {onClose && (
                    <div className="flex ml-2 text-text-color-primary cursor-pointer" onClick={onClose}>
                        {/* <IconClose size="16" /> */}
                    </div>
                )}
            </div>
        </div>
    );
}
