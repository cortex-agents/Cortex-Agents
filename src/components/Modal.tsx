"use client";

import React from "react";

// Inline SVG for minimal hydration
const XIcon = ({ size = 22 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center p-4 sm:p-6 md:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Main modal box */}
      <div
        className={`relative bg-gray-900/90 text-white rounded-2xl shadow-2xl border border-gray-700/40 w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] animate-fade-in-up`}
        style={{ animationDuration: '0.3s' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
          aria-label="Close modal"
        >
          <div aria-hidden="true">
            <XIcon />
          </div>
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
          className={`w-full sm:w-auto bg-gradient-to-r ${gradient} px-6 py-3 rounded-xl font-semibold text-gray-900 hover:scale-[1.02] transition-transform`}
        >
          Contact Now
        </button>
      </div>
    </div>
  );
}
