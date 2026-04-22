import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Seo } from '../Components/Seo';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot for basic bot filtering (humans won't fill this)
    if (formData.company) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('Missing EmailJS environment variables.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Shahid ul Islam. Available for freelance work, collaborations, and full-time opportunities."
        path="/contact"
      />

      <section className="min-h-screen px-6 md:px-16 py-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Left: Info */}
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-widest uppercase text-blue-400 mb-3">Let's talk</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Whether you have a project in mind, a question, or just want to connect — I'd love to hear from you!
            </p>

            <div className="space-y-3">
              {[
                { emoji: '📸', label: 'Instagram', value: '@_i_shahid',          href: 'https://www.instagram.com/_i_shahid/' },
                { emoji: '💻', label: 'GitHub',    value: 'github.com/shahid-jmi', href: 'https://github.com/shahid-jmi' },
              ].map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="glass flex items-center gap-3 p-4 group hover:scale-[1.01] transition-transform duration-200"
                >
                  <span className="text-xl">{item.emoji}</span>
                  <div>
                    <p className="text-xs text-slate-500">{item.label}</p>
                    <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="glass p-7 space-y-5">
              <div className="glass-glow-line rounded-full mb-2" />

              {[
                { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name' },
                { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="glass-input w-full px-4 py-3 rounded-xl text-sm"
                    required
                  />
                </div>
              ))}

              {/* Honeypot: hidden field for bots */}
              <div className="hidden" aria-hidden="true">
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or question..."
                  rows={5}
                  className="glass-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  required
                />
              </div>

              {/* Status */}
              {status === 'success' && (
                <div className="glass p-3 text-green-300 text-xs font-medium">
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="glass p-3 text-red-300 text-xs font-medium">
                  Something went wrong. Please try again or reach out via Instagram.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white
                  bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500
                  shadow-lg shadow-violet-500/25
                  hover:shadow-violet-500/45 hover:-translate-y-0.5
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0
                  transition-all duration-300"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
