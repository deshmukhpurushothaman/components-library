import React from 'react';

interface IconChevronDownProps {
    size: string;
    color?: string;
}

export function IconChevronDown(props: IconChevronDownProps): JSX.Element {
    const { size, color = '#ffffff' } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            style={{ fill: color }}
        >
            {/* eslint-disable-next-line max-len */}
            <path d="M16.939 7.939L12 12.879 7.061 7.939 4.939 10.061 12 17.121 19.061 10.061z"></path>
        </svg>
    );
}
