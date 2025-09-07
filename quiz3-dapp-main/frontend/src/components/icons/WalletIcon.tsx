import React from 'react';

interface WalletIconProps extends React.SVGProps<SVGSVGElement> {}

export const WalletIcon: React.FC<WalletIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3" />
    <path d="M22 7v3" />
    <path d="M22 17v-3" />
    <path d="M22 10h-6" />
    <path d="M22 14h-6" />
  </svg>
);