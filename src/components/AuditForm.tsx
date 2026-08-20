"use client";

import React, { useState } from 'react';
import { Button } from './ui/Button';

export default function AuditForm({ defaultService = "" }: { defaultService?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      challenge: formData.get("challenge"),
    };

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg("Failed to submit request. Please try again or email us directly.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border border-border p-8 md:p-12 text-center bg-muted/20">
        <h3 className="font-display text-3xl font-bold mb-4 uppercase">Request Received</h3>
        <p className="text-muted-foreground text-lg mb-8">
          Our team will analyze your request and reach out within 24 hours to schedule your free consultation.
        </p>
        <Button variant="ghost" onClick={() => setIsSuccess(false)}>Submit Another Request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {errorMsg && (
        <div className="p-4 border border-red-500/50 bg-red-500/10 text-red-500 text-sm font-mono uppercase tracking-wider">
          {errorMsg}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors" 
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Work Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors" 
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Company / Website</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors" 
            placeholder="https://yourcompany.com"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Primary Interest *</label>
          <select 
            id="service" 
            name="service" 
            required
            defaultValue={defaultService}
            className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none"
          >
            <option value="" className="bg-background text-muted-foreground">Select an area...</option>
            <option value="Web Development" className="bg-background">Web Development</option>
            <option value="UI/UX Design" className="bg-background">UI/UX Design</option>
            <option value="AI Chatbots" className="bg-background">AI Chatbots</option>
            <option value="AI Agents & Automation" className="bg-background">AI Agents & Automation</option>
            <option value="SEO Optimization" className="bg-background">SEO Optimization</option>
            <option value="Custom SaaS & Enterprise" className="bg-background">Custom SaaS & Enterprise</option>
            <option value="Dedicated Teams" className="bg-background">Dedicated Teams</option>
            <option value="Managed IT & Software" className="bg-background">Managed IT & Software</option>
            <option value="Other" className="bg-background">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="challenge" className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">What is your biggest bottleneck right now? *</label>
        <textarea 
          id="challenge" 
          name="challenge" 
          required 
          rows={4} 
          className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none" 
          placeholder="E.g., Our customer support team is overwhelmed, or we need a faster website..."
        ></textarea>
      </div>

      <div className="pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full md:w-auto min-w-[200px] justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Requesting...' : 'Request Free Audit'}
        </Button>
      </div>
    </form>
  );
}
