'use client';

import React, { useState } from 'react';
import Notification from './Notification';

export default function CollaborateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notif, setNotif] = useState<{ show: boolean; type: "success" | "error"; message: string }>({ show: false, type: "success", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: `Collaboration Request from ${formData.get('company')}`,
      message: `Company: ${formData.get('company')}\n\nMessage:\n${formData.get('message')}`
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setNotif({ show: true, type: "success", message: "PARTNERSHIP INQUIRY SENT." });
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setNotif(n => ({ ...n, show: false })), 5000);
      } else {
        setNotif({ show: true, type: "error", message: "Failed to send inquiry." });
        setTimeout(() => setNotif(n => ({ ...n, show: false })), 5000);
      }
    } catch (error) {
      console.error(error);
      setNotif({ show: true, type: "error", message: "Network error occurred." });
      setTimeout(() => setNotif(n => ({ ...n, show: false })), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <Notification
        show={notif.show}
        type={notif.type}
        message={notif.message}
        onClose={() => setNotif((n) => ({ ...n, show: false }))}
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight uppercase mb-6 border-b border-border pb-4">
          Collaboration Inquiry
        </h3>

        <div className="space-y-2">
          <label htmlFor="collab-name" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Contact Name</label>
          <input 
            type="text" 
            id="collab-name" 
            name="name" 
            required 
            className="w-full h-12 px-4 bg-background border border-border text-foreground focus:border-accent focus:outline-none transition-colors rounded-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="collab-email" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Email</label>
            <input 
              type="email" 
              id="collab-email" 
              name="email" 
              required 
              className="w-full h-12 px-4 bg-background border border-border text-foreground focus:border-accent focus:outline-none transition-colors rounded-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="collab-company" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Agency / Company</label>
            <input 
              type="text" 
              id="collab-company" 
              name="company" 
              required 
              className="w-full h-12 px-4 bg-background border border-border text-foreground focus:border-accent focus:outline-none transition-colors rounded-none"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="collab-message" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">How can we collaborate?</label>
          <textarea 
            id="collab-message" 
            name="message" 
            rows={4}
            required 
            className="w-full p-4 bg-background border border-border text-foreground focus:border-accent focus:outline-none transition-colors rounded-none resize-y"
          />
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="group relative inline-flex items-center justify-center bg-transparent text-accent font-semibold uppercase tracking-wider py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-100 origin-left transition-transform duration-150 group-hover:scale-x-110" />
          </button>
        </div>
      </form>
    </div>
  );
}
