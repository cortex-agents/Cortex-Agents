import React from 'react';

interface NotificationProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export default function Notification({ show, type, message, onClose }: NotificationProps) {
  if (!show) return null;

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 px-6 py-4 flex items-center gap-4 border
        ${type === 'success' ? 'bg-background border-accent text-foreground' : 'bg-background border-red-500 text-foreground'}
        font-mono text-sm uppercase tracking-wider shadow-lg animate-fade-in-up`}
      style={{ animationDuration: '0.2s' }}
      role="alert"
    >
      <span aria-hidden="true" className={type === 'success' ? 'text-accent' : 'text-red-500'}>
        {type === 'success' ? '■' : '▲'}
      </span>
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Close notification"
      >
        <span aria-hidden="true">✕</span>
      </button>
    </div>
  );
}
