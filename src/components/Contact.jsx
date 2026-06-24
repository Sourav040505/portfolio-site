import React, { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

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
    <section id="contact" className="bg-black relative border-b border-white/5 scroll-mt-16">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 border-x border-white/5">
        
        {/* Title Side Pane */}
        <div className="lg:col-span-3 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="sticky top-24 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase">
              Connectivity
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
              Contact
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed font-sans">
              Request pipeline authorization. Copy contact variables directly into your registry clipboard.
            </p>
          </div>
        </div>

        {/* Directory Contact Details */}
        <div className="lg:col-span-9 p-8 sm:p-12 space-y-8 flex flex-col justify-center">
          <div className="flex items-center gap-2.5 font-mono text-[10px] tracking-wider text-gray-500 pb-4 border-b border-white/5">
            <Terminal size={14} className="text-indigo-400" />
            <span>COMMUNICATION_CHANNELS // STAGE_ONBOARDING</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Brief Pitch */}
            <div className="md:col-span-6 space-y-4">
              <h3 className="text-base font-bold text-white tracking-tight font-sans">
                Onboarding Pitch
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                Currently available for Q3/Q4 engineering contracts, developer developer relations roles, and agent system integration consulting. Secure, automated delivery protocols guaranteed.
              </p>
              <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>AVAILABILITY_STATE // READY</span>
              </div>
            </div>

            {/* Monospace Copy Box Panel */}
            <div className="md:col-span-6 space-y-4 font-mono text-[11px] tracking-wider">
              
              {/* Email Row */}
              <div className="p-4 bg-[#050508]/60 border border-white/5 flex items-center justify-between rounded-md">
                <div>
                  <div className="text-[9px] text-gray-600 uppercase">SYS_VAR // EMAIL</div>
                  <div className="text-white font-bold mt-1 select-all">{email}</div>
                </div>
                <button
                  onClick={() => copyToClipboard(email, 'email')}
                  className="p-2 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all bg-black"
                  title="Copy variables"
                >
                  {copiedEmail ? (
                    <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                      <Check size={10} /> COPIED
                    </span>
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </div>

              {/* Phone Row */}
              <div className="p-4 bg-[#050508]/60 border border-white/5 flex items-center justify-between rounded-md">
                <div>
                  <div className="text-[9px] text-gray-600 uppercase">SYS_VAR // PHONE</div>
                  <div className="text-white font-bold mt-1 select-all">{phone}</div>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, 'phone')}
                  className="p-2 border border-white/5 hover:border-white/20 text-gray-400 hover:text-white transition-all bg-black"
                  title="Copy variables"
                >
                  {copiedPhone ? (
                    <span className="text-[9px] text-emerald-400 font-bold flex items-center gap-1">
                      <Check size={10} /> COPIED
                    </span>
                  ) : (
                    <Copy size={12} />
                  )}
                </button>
              </div>

            </div>

          </div>

          {/* Mailto trigger shortcut */}
          <div className="font-mono text-[10px] text-gray-600 pt-4 border-t border-white/[0.04]">
            PING PROTOCOL: Send an instant email payload to{' '}
            <a href={`mailto:${email}`} className="text-indigo-400 font-bold hover:underline">
              souravgoswami2005@gmail.com
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
