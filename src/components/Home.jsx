import { memo } from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight, FaGithub, FaTerminal } from 'react-icons/fa';
import profilePic from '../assets/images/profile/profile-pic.jpeg';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../config/constants';
import { trackSocialClick } from '../utils/analytics';

const Home = memo(function Home() {
  const githubLink = SOCIAL_LINKS.find((l) => l.platform === 'GitHub');

  return (
    <section
      name="home"
      className="relative min-h-[92svh] lg:min-h-screen w-full bg-canvas flex items-center justify-center pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background blueprint grid & architectural watermark */}
      <div className="absolute inset-0 bg-grid-blueprint pointer-events-none opacity-40" />
      <div
        className="watermark-text text-[14vw] font-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        SYSTEMS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Technical Narrative & Positioning */}
        <div className="w-full lg:max-w-2xl flex flex-col items-start">
          {/* Status Kicker */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border bg-surface/90 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse-slow shrink-0" />
            <span className="font-mono text-xs text-slate-300 tracking-wider uppercase">
              Production Software & Cloud Architecture
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Architecting <span className="text-accent underline decoration-accent/30 underline-offset-8">Production Systems</span> with Cloud Precision.
          </h1>

          {/* Subtitle / Positioning Statement */}
          <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-4">
            I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Software Engineer building high-throughput Python APIs (FastAPI & Django), responsive React interfaces, and declarative AWS infrastructure with Terraform, Docker, and automated CI/CD pipelines.
          </p>

          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mb-8">
            Currently engineering backend services and application architecture at <span className="text-slate-200 font-medium">Afarinick Company Limited</span>. I focus on reliability, clean system design, and production operations.
          </p>

          {/* Calls to Action */}
          <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent text-canvas font-mono text-xs uppercase tracking-wider font-bold hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/10 cursor-pointer min-h-[48px]"
            >
              <span>Explore Architecture & Work</span>
              <FaArrowRight size={12} />
            </Link>

            {githubLink && (
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackSocialClick('github_hero')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md border border-border hover:border-slate-500 bg-surface hover:bg-surface-elevated text-slate-200 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all duration-200 min-h-[48px]"
              >
                <FaGithub size={15} />
                <span>GitHub Repos</span>
              </a>
            )}

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex items-center justify-center px-5 py-3.5 rounded-md text-slate-400 hover:text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer min-h-[48px]"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Blueprint & System Telemetry Card */}
        <div className="w-full lg:max-w-md shrink-0">
          <div className="tech-card p-4 sm:p-5 border-border bg-surface/90 backdrop-blur-md relative overflow-hidden shadow-2xl">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald/80" />
                <span className="font-mono text-xs text-slate-400 ml-2">system_telemetry.yaml</span>
              </div>
              <div className="flex items-center gap-1.5 text-accent font-mono text-[11px]">
                <FaTerminal size={10} />
                <span>v2026.1</span>
              </div>
            </div>

            {/* Photo & Identity Section */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-border shrink-0 bg-surface-muted">
                <img
                  src={profilePic}
                  alt={`${PERSONAL_INFO.name} - Software & Cloud Systems Engineer`}
                  className="w-full h-full object-cover contrast-110"
                  loading="eager"
                  decoding="async"
                  style={{ objectPosition: 'center 25%' }}
                />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-white">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="font-mono text-xs text-accent mb-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-400 leading-tight">
                  Software Engineer @ Afarinick Co. Ltd
                </p>
              </div>
            </div>

            {/* Telemetry Key-Value Pairs */}
            <div className="space-y-2.5 font-mono text-xs border-t border-border/80 pt-4">
              <div className="flex justify-between items-center py-1 border-b border-border/40">
                <span className="text-slate-400">STATUS</span>
                <span className="text-emerald font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
                  ONLINE · AVAILABLE
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border/40">
                <span className="text-slate-400">CORE_STACK</span>
                <span className="text-slate-200">Python · FastAPI · Django</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border/40">
                <span className="text-slate-400">INFRASTRUCTURE</span>
                <span className="text-slate-200">AWS · Terraform · Docker</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border/40">
                <span className="text-slate-400">PIPELINES</span>
                <span className="text-slate-200">GitHub Actions (OIDC)</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-400">LOCATION</span>
                <span className="text-slate-200">Accra, GH · Global Remote</span>
              </div>
            </div>

            {/* Bottom Status Ticker */}
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="text-slate-400">LATENCY: 12ms</span>
              <span className="text-accent">ENCRYPTED // TLS 1.3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Home;
