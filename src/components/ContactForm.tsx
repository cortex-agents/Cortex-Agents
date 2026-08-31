"use client";

import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import Notification from "./Notification";
import { trackLead } from "@/lib/analytics";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notif, setNotif] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        trackLead("contact_form");
        setNotif({ show: true, type: "success", message: "Message received." });
        setName(""); setEmail(""); setSubject(""); setMessage("");
        setTimeout(() => setNotif(n => ({ ...n, show: false })), 3000);
      } else {
        setNotif({ show: true, type: "error", message: "Failed to send." });
        setTimeout(() => setNotif(n => ({ ...n, show: false })), 3000);
      }
    } catch {
      setNotif({ show: true, type: "error", message: "An error occurred." });
      setTimeout(() => setNotif(n => ({ ...n, show: false })), 3000);
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
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Name</label>
            <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Subject</label>
          <Input id="subject" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
          <Textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        
        <div className="pt-4">
          <Button variant="secondary" type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
}
