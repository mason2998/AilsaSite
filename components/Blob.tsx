import React from 'react';

interface BlobProps {
  color?: string;
  size?: number; // Size in pixels (width and height)
  top?: string; // CSS value like "5%", "-10%", "auto"
  left?: string; // CSS value like "10%", "-5%", "auto"
  right?: string; // CSS value like "5%", "-15%", "auto"
  bottom?: string; // CSS value like "10%", "-20%", "auto"
  opacity?: number;
  zIndex?: number;
  className?: string;
}

export default function Blob({
  color = '#FF0066',
  size = 200, // Default size in pixels
  top,
  left,
  right,
  bottom,
  opacity = 1,
  zIndex = 0,
  className = '',
}: BlobProps) {
  const blobStyle: React.CSSProperties = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size}px`,
    top: top || 'auto',
    left: left || 'auto',
    right: right || 'auto',
    bottom: bottom || 'auto',
    opacity,
    zIndex,
  };

  return (
    <svg
      className={className}
      style={blobStyle}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M37,-21.2C42.7,-11.4,38.5,4.2,30.7,20.5C22.9,36.8,11.5,53.7,-3.5,55.7C-18.5,57.7,-36.9,44.9,-49.9,25.6C-62.8,6.4,-70.2,-19.2,-61,-31C-51.7,-42.8,-25.9,-40.8,-5.1,-37.9C15.6,-34.9,31.3,-31,37,-21.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
