import { useState, memo } from 'react';
import { 
  FaEnvelope, 
  FaCopy, 
  FaCheck, 
  FaLinkedin, 
  FaGithub, 
  FaClock, 
  FaShieldAlt,
  FaTerminal
} from 'react-icons/fa';
import { trackSocialClick } from '../utils/analytics';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';
import { useToastContext } from '../context/ToastContext';

const Contact = memo(function Contact() {
  const [copied, setCopied] = useState(false);
  const { success } = useToastContext();
  const linkedin = SOCIAL_LINKS.find((link) => link.platform === 'LinkedIn');
  const github = SOCIAL_LINKS.find((link) => link.platform === 'GitHub');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      trackSocialClick('email_copy');
      success('Email copied to clipboard');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  return (
    <section name="contact" className="bg-canvas w-full text-slate-200 py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              {"// 06. COMMUNICATION & DISPATCH"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mt-2">
            Available for software engineering roles, cloud infrastructure engagements, and backend API architecture.
          </p>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Contact Hub Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Email & Action Card */}
          <div className="lg:col-span-7">
            <div className="tech-card border-border bg-surface/90 p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-6">
                <span className="font-mono text-xs text-accent uppercase font-bold flex items-center gap-2">
                  <FaTerminal size={11} />
                  DIRECT_COMMUNICATION_CHANNEL
                </span>
                <span className="font-mono text-[11px] text-emerald flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  ONLINE
                </span>
              </div>

              <p className="font-sans text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Whether discussing an engineering role, reviewing cloud infrastructure architecture, or collaborating on high-throughput backend services, email is the fastest and most reliable route.
              </p>

              {/* Email Address Terminal Display */}
              <div className="p-4 rounded-lg bg-canvas border border-border mb-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-1">
                  Primary Routing Address:
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="font-mono text-base sm:text-lg text-white font-semibold select-all break-all">
                    {PERSONAL_INFO.email}
                  </span>
                  
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-surface hover:bg-surface-elevated border border-border hover:border-slate-500 text-slate-200 hover:text-white font-mono text-xs font-semibold transition-all min-h-[40px]"
                      aria-label={copied ? 'Email copied' : 'Copy email address'}
                    >
                      {copied ? (
                        <>
                          <FaCheck className="text-emerald" size={12} />
                          <span className="text-emerald">Copied</span>
                        </>
                      ) : (
                        <>
                          <FaCopy size={12} />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-accent text-canvas font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors min-h-[40px]"
                      aria-label="Open native email client"
                    >
                      <FaEnvelope size={12} />
                      <span>Send Mail</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-2">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-3">
                  Professional Verification Channels:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {linkedin?.url && (
                    <a
                      href={linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackSocialClick('linkedin_contact')}
                      className="flex items-center gap-3 p-3.5 rounded bg-canvas border border-border hover:border-slate-500 text-slate-300 hover:text-white transition-all group"
                    >
                      <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-accent group-hover:text-white">
                        <FaLinkedin size={15} />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold block text-white">LinkedIn Profile</span>
                        <span className="text-[11px] text-slate-400">edmund-blessing</span>
                      </div>
                    </a>
                  )}

                  {github?.url && (
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackSocialClick('github_contact')}
                      className="flex items-center gap-3 p-3.5 rounded bg-canvas border border-border hover:border-slate-500 text-slate-300 hover:text-white transition-all group"
                    >
                      <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-accent group-hover:text-white">
                        <FaGithub size={15} />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold block text-white">GitHub Repositories</span>
                        <span className="text-[11px] text-slate-400">@GeekKwame</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right SLA & Operating Guidelines Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="tech-card border-border bg-surface/90 p-6">
              <div className="flex items-center gap-2 mb-4">
                <FaClock className="text-accent" />
                <h3 className="font-display text-base font-bold text-white">
                  Response SLA & Availability
                </h3>
              </div>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-accent font-mono">›</span>
                  <div>
                    <strong className="text-white font-medium block">Standard Response Time</strong>
                    <span>Typically within 24 business hours for direct inquiries.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent font-mono">›</span>
                  <div>
                    <strong className="text-white font-medium block">Location & Timezone</strong>
                    <span>Accra, Ghana (GMT/UTC+0) · Available for asynchronous global and synchronous overlap roles.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-accent font-mono">›</span>
                  <div>
                    <strong className="text-white font-medium block">Engagement Types</strong>
                    <span>Full-time Software Engineer positions, Cloud & DevOps contracts, and backend API engineering.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="tech-card border-border bg-surface/90 p-6">
              <div className="flex items-center gap-2 mb-3">
                <FaShieldAlt className="text-accent" />
                <h3 className="font-display text-base font-bold text-white">
                  Technical Due Diligence
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                Code samples, architecture diagrams, and GitHub commit histories are publicly auditable. Reference checks and technical discussions available upon introductory alignment.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
});

export default Contact;
