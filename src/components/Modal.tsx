"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  gradient: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  gradient,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Main modal box */}
          <motion.div
            className={`relative bg-gray-900/90 text-white rounded-2xl shadow-2xl border border-gray-700/40 w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 overflow-y-auto max-h-[90vh]`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              <X size={22} />
            </button>

            {/* Title */}
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}
            >
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
              {description}
            </p>

            {/* Contact Now Button */}
            <button
              onClick={() => {
                onClose();
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-full sm:w-auto bg-gradient-to-r ${gradient} px-6 py-3 rounded-xl font-semibold text-gray-900 hover:scale-105 transition-transform`}
            >
              Contact Now
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
