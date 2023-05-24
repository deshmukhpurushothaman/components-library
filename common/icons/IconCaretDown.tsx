import React from 'react';

interface IconCallProps {
  size: string;
}

export function IconCaretDown(props: IconCallProps): JSX.Element {
  const { size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path d="M11.998 17L18.998 9 4.998 9z"></path>
    </svg>
  );
}
