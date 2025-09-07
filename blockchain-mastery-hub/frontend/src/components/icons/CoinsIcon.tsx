import React from 'react';

interface CoinsIconProps {
  className?: string;
}

export const CoinsIcon: React.FC<CoinsIconProps> = ({ className = "h-6 w-6" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6" />
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <path d="M7 6h1v4" />
      <path d="M16.71 13.88A.5.5 0 0 0 16.5 13h-1a.5.5 0 0 0-.5.5 1 1 0 0 1-1 1h-1a.5.5 0 0 0-.5.5 1 1 0 0 1-1 1" />
    </svg>
  );
};