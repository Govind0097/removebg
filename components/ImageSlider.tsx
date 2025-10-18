
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeftRightIcon } from './Icons';

interface ImageSliderProps {
  beforeImage: string;
  afterImage: string;
  afterImageContainerStyle?: React.CSSProperties;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ beforeImage, afterImage, afterImageContainerStyle }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div ref={containerRef} className="relative w-full h-full select-none" onMouseLeave={handleMouseUp}>
      <img src={beforeImage} alt="Original" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
      <div className="absolute inset-0 w-full h-full pointer-events-none" style={{...afterImageContainerStyle, clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`}}>
        <img src={afterImage} alt="Background Removed" className="absolute inset-0 w-full h-full object-contain" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center pointer-events-none">
          <ChevronLeftRightIcon className="w-6 h-6 text-accent" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
