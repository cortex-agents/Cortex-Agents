import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationProps {
  show: boolean;
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const variants = {
  hidden: { opacity: 0, y: 40, pointerEvents: 'none' },
  visible: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

export default function Notification({ show, type, message, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.4, type: 'spring' }}
          className={`fixed bottom-8 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3
            ${type === 'success' ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}
            font-semibold text-lg min-w-[260px] max-w-[90vw]`}
          role="alert"
        >
          <span>{type === 'success' ? '✔️' : '❌'}</span>
          <span className="flex-1">{message}</span>
          <button
            onClick={onClose}
            className="ml-4 text-white/80 hover:text-white text-xl font-bold focus:outline-none"
            aria-label="Close notification"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
