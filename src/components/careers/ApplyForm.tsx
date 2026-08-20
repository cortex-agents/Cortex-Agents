'use client';

import React, { useState, useEffect } from 'react';

export default function ApplyForm({ selectedJobTitle }: { selectedJobTitle: string | null }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  useEffect(() => {
    if (selectedJobTitle) {
      setJobTitle(selectedJobTitle);
      setSuccess(false); // Reset success state if they pick a new job
    }
  }, [selectedJobTitle]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!jobTitle) {
      setError('Please select a role to apply for.');
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    const formData = new FormData(e.currentTarget);
    formData.append('jobTitle', jobTitle);
    
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });
      
      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-muted border border-border p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-accent mb-4">APPLICATION SUBMITTED</h3>
        <p className="text-muted-foreground">
          Thank you for applying for the <strong>{jobTitle}</strong> position. We have received your CV and will get back to you shortly.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-6 text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-150"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight uppercase mb-6 border-b border-border pb-4">
        {selectedJobTitle ? `Apply: ${selectedJobTitle}` : 'Submit Application'}
      </h3>
      
      {error && (
        <div className="p-4 border border-accent text-accent bg-accent/10 mb-6 font-mono text-sm">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="jobTitle" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Role</label>
        <input 
          type="text" 
          id="jobTitle" 
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Select a role from the list"
          required 
          readOnly
          className="w-full h-12 px-4 bg-muted border border-border text-foreground focus:outline-none cursor-default rounded-none"
        />
        {!jobTitle && (
          <p className="text-xs text-accent mt-1">Please click &quot;Apply&quot; on a job listing first.</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          className="w-full h-12 px-4 bg-input border border-border text-foreground focus:border-accent focus:outline-none transition-colors rounded-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          className="w-full h-12 px-4 bg-input border border-border text-foreground focus:border-accent focus:outline-none transition-colors rounded-none"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="cv" className="block text-sm font-mono tracking-wider uppercase text-muted-foreground">Upload CV (PDF)</label>
        <input 
          type="file" 
          id="cv" 
          name="cv" 
          accept=".pdf"
          required 
          className="w-full px-4 py-3 bg-input border border-border text-muted-foreground focus:border-accent focus:outline-none transition-colors rounded-none file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-mono file:bg-foreground file:text-background file:uppercase file:tracking-wider file:cursor-pointer hover:file:bg-accent hover:file:text-white"
        />
      </div>

      <div className="pt-4">
        <button 
          type="submit" 
          disabled={isSubmitting || !jobTitle}
          className="group relative inline-flex items-center justify-center bg-transparent text-accent font-semibold uppercase tracking-wider py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-100 origin-left transition-transform duration-150 group-hover:scale-x-110" />
        </button>
      </div>
    </form>
  );
}
