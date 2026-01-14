import React from 'react';

interface DoubleBorderCardProps {
  className?: string;
  children: React.ReactNode;
}

export default function DoubleBorderCard({ className = '', children }: DoubleBorderCardProps) {
  return (
    <div className={`bg-white border-1 p-2 border-stone-500 ${className}`}>
      <div className="border-1 border-spacing-8 border-stone-300 pb-14 px-6 py-14 md:px-12 flex flex-col items-center text-center relative overflow-hidden">
        {children}
      </div>
    </div>
  );
}
