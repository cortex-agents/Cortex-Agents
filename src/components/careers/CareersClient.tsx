'use client';

import React, { useState, useRef } from 'react';
import ApplyForm from './ApplyForm';

interface Job {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
}

interface CareersClientProps {
  jobs: Job[];
}

export default function CareersClient({ jobs }: CareersClientProps) {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  if (jobs.length === 0) {
    return <p className="text-muted-foreground text-lg font-mono">NO OPEN POSITIONS AT THE MOMENT.</p>;
  }

  return (
    <div className="grid lg:grid-cols-12 gap-16 items-start relative">
      {/* Jobs List */}
      <div className="lg:col-span-7 space-y-16">
        {jobs.map((job) => (
          <div key={job.id} className="border-t border-border pt-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 uppercase">{job.title}</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="font-mono text-xs tracking-wider uppercase text-foreground bg-muted px-3 py-1 border border-border">
                {job.type}
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-foreground bg-muted px-3 py-1 border border-border">
                {job.location}
              </span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {job.description}
            </p>
            <button
              onClick={() => handleApplyClick(job.title)}
              className="group relative inline-flex items-center text-sm font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-150"
            >
              Apply for this role
              <span className="ml-2 transition-transform duration-150 ease-fast group-hover:translate-x-1">→</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-150 ease-fast group-hover:scale-x-100" />
            </button>
          </div>
        ))}
      </div>

      {/* Sticky Form Container */}
      <div className="lg:col-span-5 lg:sticky lg:top-32" ref={formRef}>
        <div className="bg-muted/30 border border-border p-6 sm:p-8">
          <ApplyForm selectedJobTitle={selectedJob} />
        </div>
      </div>
    </div>
  );
}
