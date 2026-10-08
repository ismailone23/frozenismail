"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setStatus({ type: null, message: '' });

    const formData = new FormData(e.currentTarget);
    const result = await sendEmail(formData);

    if (result?.error) {
      setStatus({ type: 'error', message: result.error });
    } else {
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      (e.target as HTMLFormElement).reset();
    }
    
    setIsPending(false);
  }

  return (
    <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32 border-t border-surface-stroke" id="contact">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-display-lg-mobile md:font-headline-md text-headline-md text-text-primary mb-6">Let&apos;s build something exceptional.</h2>
        <p className="font-body-md text-on-surface-variant mb-12">Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
        <form className="space-y-4 text-left" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="font-label-caps text-label-caps text-text-muted mb-2" htmlFor="name">NAME</label>
              <input name="name" className="bg-surface border border-surface-stroke rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" id="name" placeholder="John Doe" type="text" required disabled={isPending} />
            </div>
            <div className="flex flex-col">
              <label className="font-label-caps text-label-caps text-text-muted mb-2" htmlFor="email">EMAIL</label>
              <input name="email" className="bg-surface border border-surface-stroke rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all" id="email" placeholder="john@example.com" type="email" required disabled={isPending} />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="font-label-caps text-label-caps text-text-muted mb-2" htmlFor="message">MESSAGE</label>
            <textarea name="message" className="bg-surface border border-surface-stroke rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-none" id="message" placeholder="How can I help you?" rows={4} required disabled={isPending}></textarea>
          </div>
          
          {status.message && (
            <div className={`p-4 rounded-lg font-body-md ${status.type === 'success' ? 'bg-primary-container/20 text-primary-container' : 'bg-error/20 text-error'}`}>
              {status.message}
            </div>
          )}

          <button disabled={isPending} className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-container text-surface-container-low font-body-md font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
            {isPending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
