'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(DrawSVGPlugin);

export default function DrawnText({ onVisibilityChange }: { onVisibilityChange?: (isVisible: boolean) => void }) {
  const groupRef = useRef<SVGGElement | null>(null);
  const [viewBox, setViewBox] = useState('0 0 1000 200');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (groupRef.current) {
      const paths = groupRef.current.querySelectorAll('path');
      
      // Get the bounding box of all paths
      const bbox = groupRef.current.getBBox();
      
      // Add some padding around the paths
      const padding = 10;
      const newViewBox = `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + padding * 2} ${bbox.height + padding * 2}`;
      setViewBox(newViewBox);

      // Animate the paths
      gsap.fromTo(
        paths,
        { drawSVG: '0% 0%' },
        { 
          drawSVG: '0% 100%', 
          duration: 1.5, 
          ease: '', 
          stagger: 0,
          onStart: () => setIsVisible(true),
          onComplete: () => onVisibilityChange?.(true)
        }
      );
    }
  }, [onVisibilityChange]);

  return (
    <svg 
      viewBox={viewBox} 
      width="5.8%" 
      height="5.8%" 
      className="ml-[-50]"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.1s' }}
    >
      <g ref={groupRef}>
        <path
          id="montecarlo1"
          d="M89.8,16.2c-12.49652,3.64805 -15.84593,1.54984 -22.1,11.4c-13.53731,21.32126 -18.80733,73.345 -52.9,73.345c-11.37032,0 -14.9974,-9.06905 -15.43,-18.545M4.72,35.7c-23.25488,-24.21956 18.30433,-24.40596 35.28,-23c19.79668,1.6396 41.72346,4.8 62.38,4.8c3.33611,0 7.00093,-1.53159 9.13,-4.1"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="montecarlo2"
          d="M137.4,9.6c-0.90284,-9.25411 -7.26248,-9.93286 -15.8,-8.2c-30.3665,6.1635 -43.22663,39.3761 -53.86,64.3c-4.30123,10.08179 -8.60154,20.18053 -12.24,30.52c-2.08861,5.93524 7.60769,-10.02528 11.3,-15.12c4.38879,-6.05575 19.55472,-27.5968 30.2,-25.5c2.69432,0.5307 -18.97817,31.91333 -17.9,39.04c1.67712,11.08576 21.93266,-8.33601 29,-17.04"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="montecarlo3"
          d="M111.88,77.3c4.09333,-0.53333 8.28727,-0.55218 12.28,-1.6c32.99009,-8.65762 8.67967,-43.87509 -15.75,1c-2.02827,3.72574 -5.37441,11.34886 -3.15,16.37c8.10319,18.2913 35.90309,-9.21202 40.94,-15.47"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
