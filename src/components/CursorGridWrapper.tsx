'use client';

import CursorGrid from './CursorGrid';

export default function CursorGridWrapper() {
  return (
    <CursorGrid
      cellSize={10}
      cellGap={6}
      activationDistance={100}
      color="#6366F1"
      className="fixed inset-0 z-0 opacity-50"
    />
  );
}
