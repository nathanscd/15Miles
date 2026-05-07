import React, { useRef } from 'react';
import Starfield from './Starfield.tsx';
import { useScrollProgress } from '../hooks/useScrollProgress.ts';
import './Style/Portal.css';

interface PortalProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Portal: React.FC<PortalProps> = ({ children, className = "", id }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  // Map progress to scale and border radius
  // We want it to be 100% full when progress is between 0.4 and 0.6
  const scale = progress < 0.3 ? 0.85 + (progress / 0.3) * 0.15 : progress > 0.7 ? 1 - ((progress - 0.7) / 0.3) * 0.15 : 1;
  const borderRadius = progress < 0.3 ? 40 * (1 - progress / 0.3) : progress > 0.7 ? 40 * ((progress - 0.7) / 0.3) : 0;
  const opacity = progress < 0.1 ? progress / 0.1 : progress > 0.9 ? 1 - (progress - 0.9) / 0.1 : 1;

  return (
    <div 
      ref={containerRef} 
      className={`portal-container ${className}`}
      style={{ height: '300vh' }} // Give room for the sticky effect
    >
      <div className="portal-sticky">
        <div 
          id={id} 
          className="space-portal-v3"
          style={{ 
            width: `${scale * 100}%`,
            height: `${scale * 100}vh`,
            borderRadius: `${borderRadius}px`,
            opacity: opacity
          }}
        >
          <div className="starfield-container">
            <Starfield />
          </div>
          <div className="container portal-content-v3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
