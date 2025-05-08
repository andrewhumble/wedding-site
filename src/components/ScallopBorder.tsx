import React from 'react';

interface ScallopBorderProps {
  className?: string;
}

export default function ScallopBorder({ className = '' }: ScallopBorderProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute bottom-0 left-0 w-full h-[50px] bg-secondary/0">
        <div className="absolute left-0 w-full h-[70px] bg-secondary/0">
          <div className="absolute bottom-0 left-0 w-full h-[50px] 
            bg-[radial-gradient(circle_at_50%_0%,_transparent_25%,_var(--color-secondary)_26%,_var(--color-secondary)_40%,_transparent_41%)]
            bg-[length:40px_100px] bg-repeat-x" />
        </div>
      </div>
    </div>
  );
}