import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Outer target ring (extremely responsive, zero interpolation lag) */}
      <div 
        className="rounded-full border transition-all duration-150 ease-out flex items-center justify-center"
        style={{
          width: isHovered ? '28px' : '16px',
          height: isHovered ? '28px' : '16px',
          borderColor: isHovered ? 'rgba(99, 102, 241, 1)' : 'rgba(255, 255, 255, 0.4)',
          backgroundColor: isHovered ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
          boxShadow: isHovered ? '0 0 10px rgba(99, 102, 241, 0.4)' : 'none',
        }}
      >
        {/* Center dot */}
        <div 
          className="w-1.5 h-1.5 rounded-full bg-white transition-transform"
          style={{
            transform: `scale(${isHovered ? 1.2 : 1})`,
            backgroundColor: isHovered ? '#6366F1' : '#FFFFFF',
          }}
        />
      </div>
    </div>
  );
}
