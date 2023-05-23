/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './common/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-tint-1': '#f3f0ff',
        'primary-tint-2': '#d6d1ff',
        'primary-tint-3': '#7e78f0',
        'primary-base': '#504ee4',
        'primary-shade-1': '#3739bd',
        'primary-shade-2': '#151d70',
        'primary-shade-3': '#0d144a',

        'success-tint-1': '#dcf5e2',
        'success-tint-2': '#7bdb96',
        'success-tint-3': '#2fc262',
        'success-base': '#0eb54e',
        'success-shade-1': '#048f3e',
        'success-shade-2': '#004220',
        'success-shade-3': '#001c0e',

        'danger-tint-1': '#fff4f0',
        'danger-tint-2': '#ffb19e',
        'danger-tint-3': '#fc634c',
        'danger-base': '#ef3621',
        'danger-shade-1': '#c91e12',
        'danger-shade-2': '#7d0000',
        'danger-shade-3': '#570003',

        'warning-tint-1': '#fff9e6',
        'warning-tint-2': '#ffd57a',
        'warning-tint-3': '#ffad29',
        'warning-base': '#fc9300',
        'warning-shade-1': '#d67600',
        'warning-shade-2': '#8a4300',
        'warning-shade-3': '#632d00',

        'info-tint-1': '#e6f8ff',
        'info-tint-2': '#80d4ff',
        'info-tint-3': '#2eabff',
        'info-base': '#0591fc',
        'info-shade-1': '#0072d6',
        'info-shade-2': '#00408a',
        'info-shade-3': '#002b63',

        'gray-1': '#f5f5f7',
        'gray-2': '#ebecee',
        'gray-3': '#e1e1e3',
        'gray-4': '#cececf',
        'gray-5': '#bababc',

        'text-color-title': '#080C2B',
        // 'text-color-primary': '#080C2B',
        'text-color-primary': '#ffffff',
        'text-color-secondary': '#080C2A',
        'text-color-disabled': '#080C2D',
      },
    },
  },
  plugins: [],
};
