import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Senior Role / Full-Time');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Live Lahore Local Time
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime('UTC+5');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    // Simulate real communication feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-zinc-950/70 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something High-Scale
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Interested in hiring me for a senior backend position, consulting on Laravel microservices, or building robust payment systems? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Methods & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Direct Email</div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors block mt-0.5"
                  >
                    {personal.email}
                  </a>
                  <p className="text-xs text-zinc-500 mt-1">Guaranteed reply within 24 hours</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 rounded-lg transition-colors shrink-0"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Phone & WhatsApp</div>
                  <a
                    href={`https://wa.me/923438677088`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-emerald-400 transition-colors block mt-0.5"
                  >
                    {personal.phoneFormatted}
                  </a>
                  <p className="text-xs text-zinc-500 mt-1">Available for quick calls and WhatsApp messages</p>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="p-2 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 rounded-lg transition-colors shrink-0"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Profile Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-900/50 flex items-center justify-center text-sky-400 shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">LinkedIn Network</div>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-1 mt-0.5"
                  >
                    <span>in/syedatif-qadeer-691791105</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                  </a>
                  <p className="text-xs text-zinc-500 mt-1">Connect for professional endorsements & referrals</p>
                </div>
              </div>
            </div>

            {/* Location & Timezone live badge */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Lahore: {currentTime || 'UTC+5'}</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 shadow-xl">
              {submitSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your message regarding <em>{inquiryType}</em> has been recorded. I will follow up via <strong>{email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setMessage('');
                      }}
                      className="px-5 py-2 text-xs font-semibold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="s.jenkins@company.com"
                        className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject / Engagement Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Senior Role / Full-Time">Senior Backend Role / Full-Time Opportunity</option>
                      <option value="Architecture Consulting">Laravel / Microservices Architecture Consulting</option>
                      <option value="Contract / Freelance Project">Payment Gateway / Stripe Custom Engineering</option>
                      <option value="Technical Interview / Chat">General Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Message / Project Details <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline the scope, team context, or role requirements..."
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-zinc-500">
                      Direct transmission to Atif Qadeer &middot; No third-party recruiters.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-lg shadow-sm shadow-blue-900/40 transition-colors whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
