import { useState, memo } from 'react';
import knustLogo from '../assets/images/companies/knust.png';

const azubiLogo =
  Object.values(
    import.meta.glob('../assets/images/companies/azubi_logo.*', {
      eager: true,
      import: 'default',
    })
  )[0] ?? null;

const EDUCATION = [
  {
    id: 1,
    school: 'Kwame Nkrumah University of Science and Technology (KNUST)',
    degree: 'Bachelor of Science in Applied Mathematics',
    duration: 'Jan 2021 – Aug 2024',
    location: 'Kumasi, Ghana',
    description:
      'Numerical analysis, discrete mathematics, statistical modeling, and algorithmic structures — the analytical backbone for backend and systems work.',
    skills: ['Applied Mathematics', 'Algorithm Design', 'Statistical Analysis'],
    logo: knustLogo,
    logoText: 'KNUST',
  },
  {
    id: 2,
    school: 'Azubi Africa (in partnership with Generation & AWS)',
    degree: 'Cloud Computing & Artificial Intelligence Program',
    duration: 'Apr 2026 – Jul 2026',
    location: 'Remote',
    description:
      'AWS core services (VPC, EC2, ECS, S3, IAM, CloudWatch), infrastructure automation, containers, and serverless architectures.',
    skills: ['AWS', 'IAM & Security', 'Docker', 'Linux', 'Cloud Networking'],
    logo: azubiLogo,
    logoText: 'Azubi',
  },
];

const Education = memo(function Education() {
  const [imageErrors, setImageErrors] = useState({});

  return (
    <section name="education" className="section rule">
      <div className="section-inner">
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="section-label mb-3">05 — Education</p>
          <h2 className="section-title mb-3">Education & training</h2>
          <p className="section-lede">
            Mathematical foundation paired with hands-on cloud and software engineering programs.
          </p>
        </div>

        <ol>
          {EDUCATION.map((entry, idx) => (
            <li
              key={entry.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-8 border-t border-rule"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-accent font-medium">EDU-0{idx + 1}</span>
                </div>
                <p className="font-mono text-xs text-ink font-medium tracking-wide">{entry.duration}</p>
                <p className="font-mono text-[11px] text-ink-muted mt-1">{entry.location}</p>
              </div>

              <div className="md:col-span-9">
                <div className="flex items-start gap-4 mb-3">
                  <div className="hidden sm:flex w-11 h-11 border border-rule bg-paper p-1.5 shrink-0 items-center justify-center overflow-hidden">
                    {entry.logo && !imageErrors[entry.id] ? (
                      <img
                        src={entry.logo}
                        alt=""
                        className="w-full h-full object-contain"
                        onError={() => setImageErrors((prev) => ({ ...prev, [entry.id]: true }))}
                      />
                    ) : (
                      <span className="font-mono text-[11px] text-ink-faint font-medium">{entry.logoText}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink tracking-tight">
                      {entry.degree}
                    </h3>
                    <p className="font-sans text-sm text-accent-ink font-medium mt-0.5">
                      {entry.school}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3 max-w-prose">
                  {entry.description}
                </p>

                <div className="pt-2 border-t border-rule/60">
                  <p className="font-mono text-xs text-ink-muted">
                    <span className="text-ink-faint text-[10px] uppercase tracking-widest mr-2">DOMAINS:</span>
                    {entry.skills.join(' · ')}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
});

export default Education;
