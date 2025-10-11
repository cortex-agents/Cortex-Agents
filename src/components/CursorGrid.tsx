'use client';
import React, { useEffect, useRef, useState } from 'react';

interface CursorGridProps {
  cellSize?: number;
  cellGap?: number;
  activationDistance?: number;
  color?: string;
  className?: string;
}

interface Cell {
  x: number;
  y: number;
  opacity: number;
}

const CursorGrid: React.FC<CursorGridProps> = ({
  cellSize = 12,
  cellGap = 6,
  activationDistance = 100,
  color = '#6366F1',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<Cell[]>([]);
  const mousePositionRef = useRef<{ x: number; y: number } | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const containerRectRef = useRef<DOMRect | null>(null);

  // Calculate grid cells
  const calculateGrid = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRectRef.current = rect;

    const totalSize = cellSize + cellGap;
    const cols = Math.ceil(rect.width / totalSize);
    const rows = Math.ceil(rect.height / totalSize);

    const newCells: Cell[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        newCells.push({
          x: col * totalSize,
          y: row * totalSize,
          opacity: 0,
        });
      }
    }
    setCells(newCells);
  };

  // Initialize grid
  useEffect(() => {
    calculateGrid();
    const handleResize = () => calculateGrid();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [cellSize, cellGap]);

  // Track mouse and animate
  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRectRef.current;
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          mousePositionRef.current = { x, y };
        } else {
          mousePositionRef.current = null;
        }
      }
    };

    const handleMouseLeave = () => {
      mousePositionRef.current = null;
    };

    // Animation loop
    const animate = () => {
      setCells(prevCells => {
        const mousePos = mousePositionRef.current;
        return prevCells.map(cell => {
          if (!mousePos) {
            const newOpacity = Math.max(0, cell.opacity - 0.15);
            return newOpacity !== cell.opacity ? { ...cell, opacity: newOpacity } : cell;
          }

          const centerX = cell.x + cellSize / 2;
          const centerY = cell.y + cellSize / 2;
          const distance = Math.hypot(centerX - mousePos.x, centerY - mousePos.y);

          if (distance < activationDistance) {
            const targetOpacity = Math.pow(1 - distance / activationDistance, 2);
            const newOpacity = Math.min(targetOpacity, cell.opacity + 0.2);
            return newOpacity !== cell.opacity ? { ...cell, opacity: newOpacity } : cell;
          } else {
            const newOpacity = Math.max(0, cell.opacity - 0.15);
            return newOpacity !== cell.opacity ? { ...cell, opacity: newOpacity } : cell;
          }
        });
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [cellSize, activationDistance]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {cells.map((cell, index) =>
        cell.opacity > 0.01 ? (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${cell.x}px`,
              top: `${cell.y}px`,
              width: `${cellSize}px`,
              height: `${cellSize}px`,
              backgroundColor: color,
              borderRadius: '2px',
              opacity: cell.opacity,
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default CursorGrid;
