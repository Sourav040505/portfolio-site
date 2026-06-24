import React, { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'souravgoswami2005@gmail.com';
  const phone = '+91 8260296880';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black relative">
      {/* Decorative Glow Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-4 inline-block">
            Let's Collaborate
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Initiate Deployment
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Reach out directly for engineering management, agent orchestration design, or scale architecture consultation.
          </p>
        </div>

        {/* High-conversion Pitch & Contact Box */}
        <div className="glass-card rounded-3xl p-8 md:p-12 text-left bg-gradient-to-b from-[#0B0B0F] to-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Rapid Onboarding Pitch
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Specializing in bridging educational technology and autonomous software systems. Ready to deploy agent setups, refactor legacy codebases, and optimize digital storefront processes.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Available for Q3/Q4 contracts</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Email Copier */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">Email Address</div>
                    <div className="text-sm font-bold text-white mt-0.5 select-all">{email}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all"
                  title="Copy to Clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Copier */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between hover:border-white/15 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">Direct Line</div>
                    <div className="text-sm font-bold text-white mt-0.5 select-all">{phone}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-2.5 rounded-xl hover:bg-white/5 text-gray-400 hover:text-white transition-all"
                  title="Copy to Clipboard"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quick Action */}
        <div className="mt-8 text-sm text-gray-500">
          Or send an instant email ping to{' '}
          <a href={`mailto:${email}`} className="text-indigo-400 hover:underline font-semibold">
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
