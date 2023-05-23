import React from 'react';
import { getVariantSize } from './styles';
import "./styles.css"

export const SPINNER_SIZES = {
    TINY: 'tiny',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
};

export type SpinnerProps = {
    size: string;
};

export function Spinner(props: SpinnerProps): JSX.Element {
    const { size } = props;
    return (
        <div className="flex items-center justify-center">
            <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary-base ${getVariantSize(size)}`}></div>
        </div>
    );
};