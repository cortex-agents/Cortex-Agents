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
      className={`fixed bottom-8 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3
        ${type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}
        font-semibold text-lg min-w-[260px] max-w-[90vw] animate-fade-in-up`}
      style={{ animationDuration: '0.4s' }}
      role="alert"
    >
      <span aria-hidden="true">{type === 'success' ? '✔️' : '❌'}</span>
      <span className="flex-1">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white/80 hover:text-white text-xl font-bold focus:outline-none"
        aria-label="Close notification"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}
