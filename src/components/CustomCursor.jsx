import React, { useState, useEffect, useCallback } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  const handleOver = useCallback((e) => {
    const t = e.target;
    setHovered(
      !!(t.tagName === 'A' || t.tagName === 'BUTTON' ||
        t.closest('a') || t.closest('button') ||
        t.getAttribute('role') === 'button')
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    window.addEventListener('mousedown', () => setClicking(true));
    window.addEventListener('mouseup', () => setClicking(false));
    window.addEventListener('mouseleave', () => setVisible(false));
    window.addEventListener('mouseenter', () => setVisible(true));

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [handleMove, handleOver, reducedMotion]);

  if (reducedMotion || !visible) return null;

  const size = hovered ? 36 : clicking ? 16 : 24;
  const color = hovered ? '#818cf8' : '#ffffff';
  const dotColor = hovered ? '#6366f1' : '#ffffff';

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x,
        top: pos.y,
        transform: 'translate(-50%, -50%)',
        width: size,
        height: size,
        transition: 'width 0.12s, height 0.12s',
        mixBlendMode: 'difference',
      }}
    >
      {/* Outer ring */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        style={{ position: 'absolute', inset: 0, transition: 'all 0.12s' }}
      >
        {/* Corner tick marks — crosshair style */}
        <line x1="18" y1="2" x2="18" y2="8"   stroke={color} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.12s' }} />
        <line x1="18" y1="28" x2="18" y2="34" stroke={color} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.12s' }} />
        <line x1="2" y1="18" x2="8"  y2="18"  stroke={color} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.12s' }} />
        <line x1="28" y1="18" x2="34" y2="18" stroke={color} strokeWidth="1.5" strokeLinecap="round" style={{ transition: 'stroke 0.12s' }} />
        {/* Circle */}
        <circle
          cx="18" cy="18" r="8"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeDasharray={hovered ? '0' : '4 4'}
          style={{ transition: 'all 0.2s' }}
        />
        {/* Centre dot */}
        <circle
          cx="18" cy="18" r={clicking ? 4 : 2}
          fill={dotColor}
          style={{ transition: 'all 0.1s' }}
        />
      </svg>
    </div>
  );
}
