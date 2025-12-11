import { useRef, useState, ReactNode } from 'react';

interface Card3DProps {
  children: ReactNode;
  className?: string;
  floating?: boolean;
}

const Card3D = ({ children, className = '', floating = false }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltTransform, setTiltTransform] = useState('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTiltTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTiltTransform('rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className={`${floating ? 'animate-card-float' : ''}`} style={{ perspective: '1000px' }}>
      <div
        ref={cardRef}
        className={`relative transition-transform duration-200 ease-out ${className}`}
        style={{ transform: tiltTransform, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, hsl(var(--primary) / ${glare.opacity}), transparent 50%)`,
          }}
        />
      </div>
    </div>
  );
};

export default Card3D;
