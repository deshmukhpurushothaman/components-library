import React from 'react';

interface IconLeftArrowProps {
  size: string;
  fill?: string;
}

export function IconLeftArrowAlt(props: IconLeftArrowProps): JSX.Element {
  const { size, fill } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={{ fill: fill ? fill : 'var(--text-color-secondary)' }}
    >
      <path d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z"></path>
    </svg>
  );
}
