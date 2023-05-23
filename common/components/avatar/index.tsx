import React from 'react';
import { getVariantColor, getVariantType } from './styles';

export const AVATAR_SIZES = {
    TINY: 'tiny',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    VERY_LARGE: 'veryLarge',
};

export const AVATAR_COLORS = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    INFO: 'info',
};

export interface AvatarProps {
    src?: string;
    alt?: string;
    children: string;
    size: string;
    color?: string;
}

export function Avatar(props: AvatarProps): JSX.Element {
    const { src, alt, children, size, color = AVATAR_COLORS.DEFAULT } = props;
    return (
        <div className={`flex items-center justify-center font-semibold relative rounded-lg  ${getVariantColor(color)} ${getVariantType(size)}`}>
            {src && src.length > 0 ? (
                <img src={src} alt={alt} height={100} width={100} />
            ) : (
                children.slice(0, 1).toUpperCase()
            )}
        </div>
    );
}
