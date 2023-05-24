import React from 'react';

interface IconCloseProps {
  size: string;
  color?: string;
}

export function IconClose(props: IconCloseProps): JSX.Element {
  const { size, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ fill: color }}
    >
      {/* eslint-disable-next-line max-len */}
      <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"></path>
    </svg>
  );
}
