import { useState, memo } from 'react';
import { FaEnvelope, FaCopy, FaCheck, FaLinkedin, FaGithub } from 'react-icons/fa';
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
    <section name="contact" className="section rule bg-paper-elevated">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="section-label mb-3">06 — Contact</p>
            <h2 className="section-title mb-4">Get in touch</h2>
            <p className="section-lede mb-6">
              {PERSONAL_INFO.availability}
            </p>
            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              Based in {PERSONAL_INFO.location} (GMT). Open to remote collaboration worldwide.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="border-t border-rule pt-6">
              <p className="meta-mono mb-3">Direct Channel</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-rule bg-paper">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display text-xl sm:text-2xl text-ink hover:text-accent transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="px-3 py-2 border border-rule bg-paper-elevated hover:border-ink font-mono text-xs uppercase tracking-wider text-ink transition-colors min-h-[38px] flex items-center gap-1.5"
                    aria-label={copied ? 'Email copied' : 'Copy email address'}
                  >
                    {copied ? (
                      <>
                        <FaCheck className="text-signal" size={10} />
                        <span className="text-signal">Copied</span>
                      </>
                    ) : (
                      <>
                        <FaCopy size={10} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="px-3.5 py-2 bg-ink text-paper hover:bg-accent font-mono text-xs uppercase tracking-wider transition-colors min-h-[38px] flex items-center gap-1.5"
                    aria-label="Open email client"
                  >
                    <FaEnvelope size={10} />
                    <span>Send</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-rule pt-6">
              <p className="meta-mono mb-4">Public Networks</p>
              <ul className="space-y-2.5">
                {linkedin?.url && (
                  <li>
                    <a
                      href={linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackSocialClick('linkedin_contact')}
                      className="flex items-center justify-between p-3 border border-rule bg-paper hover:border-ink hover:text-accent group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FaLinkedin size={15} className="text-ink-muted group-hover:text-accent transition-colors" />
                        <span className="font-sans text-sm text-ink group-hover:text-accent transition-colors font-medium">LinkedIn</span>
                        <span className="font-mono text-xs text-ink-muted hidden sm:inline">/in/edmund-blessing</span>
                      </div>
                      <span className="font-mono text-xs text-ink-faint">↗</span>
                    </a>
                  </li>
                )}
                {github?.url && (
                  <li>
                    <a
                      href={github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackSocialClick('github_contact')}
                      className="flex items-center justify-between p-3 border border-rule bg-paper hover:border-ink hover:text-accent group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FaGithub size={15} className="text-ink-muted group-hover:text-accent transition-colors" />
                        <span className="font-sans text-sm text-ink group-hover:text-accent transition-colors font-medium">GitHub</span>
                        <span className="font-mono text-xs text-ink-muted hidden sm:inline">@GeekKwame</span>
                      </div>
                      <span className="font-mono text-xs text-ink-faint">↗</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
