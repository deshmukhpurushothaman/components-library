'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import { getVariantColor, getVariantCount } from './styles';

export const BADGE_COLORS = {
    DEFAULT: 'default',
    PRIMARY: 'primary',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
};

export type BadgeProps = {
    children?: ReactNode;
    color?: string;
    count?: number;
    overflowCount?: number;
    text?: string;
};

export function Badge(props: BadgeProps): JSX.Element {
    const {
        children,
        text,
        count,
        overflowCount = 1,
        color = BADGE_COLORS.DEFAULT,
    } = props;
    const renderCount = count && count > overflowCount ? overflowCount : count;
    const [showPlus, setShowPlus] = useState<boolean>(false);

    useEffect(() => {
        if (count && count > overflowCount) {
            setShowPlus(true);
        }
    }, [count, overflowCount]);

    const getCountStyle = () => {
        const renderCountLength = String(renderCount).length;
        if ((count && renderCountLength > 1) || (text && text.length > 1)) {
            return 'plus';
        } else {
            return 'count';
        }
    };

    return (
        <div className="relative flex w-fit">
            <div
                className={`flex items-center justify-center p-2 text-sm text-text-color-title h-4 ${children ? 'absolute t-[-6px] r-[-6px]' : ''
                    } ${getVariantCount(getCountStyle())} ${getVariantColor(color)}`}
            >
                {renderCount && count && renderCount}
                {text}
                {showPlus && '+'}
            </div>
            {children ? <div>{children}</div> : <div />}
        </div>
    );
}
