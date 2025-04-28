import Image from 'next/image';

interface FramedPhotoProps {
  photoPath: string;
  framePath: string;
  objectPosition?: string;
  inset?: string;
  scale?: string;
  rotation?: '0' | '90' | '180' | '270';
}

export default function FramedPhoto({ 
  photoPath, 
  framePath, 
  objectPosition = 'center 60%',
  inset = '10% 0% 10% 0%',
  scale = '80',
  rotation = '0'
}: FramedPhotoProps) {
  return (
    <div className="relative w-100 h-100">
      <div className="absolute inset-0">
        <Image
          src={photoPath}
          alt="Your Photo"
          fill
          className={`object-cover scale-${scale}`}
          style={{ clipPath: `inset(${inset})`, objectPosition }}
        />
      </div>
      <Image
        src={framePath}
        alt="Picture Frame"
        fill
        className="object-contain pointer-events-none"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
    </div>
  );
}