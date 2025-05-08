interface DashedBorderProps {
  length?: number;
  className?: string;
}

export default function DashedBorder({ length = 40, className }: DashedBorderProps) {
  return (
    <div className={`flex w-full ${className || ''}`}>
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="w-20 h-1.5 bg-white"
          style={{ transform: `translateY(${index % 2 === 0 ? 3 : -3}px)` }}
        />
      ))}
    </div>
  );
}
