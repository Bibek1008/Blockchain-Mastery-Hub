import React from 'react';

interface TrophyIconProps {
  className?: string;
}

export const TrophyIcon: React.FC<TrophyIconProps> = ({ className = "h-6 w-6" }) => {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55.47.98.97 1.21C11.56 18.75 12 19.6 12 20.5c0 .9-.44 1.75-1.03 2.29-.5.23-.97.71-.97 1.21v1" />
      <path d="M14 14.66V17c0 .55-.47.98-.97 1.21C12.44 18.75 12 19.6 12 20.5c0 .9.44 1.75 1.03 2.29.5.23.97.71.97 1.21v1" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
};