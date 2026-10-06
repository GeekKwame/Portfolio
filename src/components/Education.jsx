import { useState, memo } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
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
    duration: 'Jan 2021 - Aug 2024',
    location: 'Kumasi, Ghana',
    description:
      'Rigorous foundation in numerical analysis, abstract algebra, discrete mathematics, statistical modeling, algorithmic structures, and computational logic. Provides the analytical backbone for scalable backend software and systems engineering.',
    skills: ['Applied Mathematics', 'Algorithm Design', 'Data Structures', 'Statistical Analysis', 'Computational Logic'],
    logo: knustLogo,
    logoText: 'KNUST',
  },
  {
    id: 2,
    school: 'Azubi Africa (in partnership with Generation & AWS)',
    degree: 'Cloud Computing & Artificial Intelligence Program',
    duration: 'Apr 2026 - Jul 2026',
    location: 'Remote',
    description:
      'Intensive cloud computing and AI program covering AWS core services (VPC, EC2, ECS, S3, IAM, CloudWatch), infrastructure automation, container orchestration, and serverless architectures.',
    skills: ['AWS Cloud Architecture', 'IAM & Security', 'Docker Containers', 'Linux Systems', 'Cloud Networking'],
    logo: azubiLogo,
    logoText: 'Azubi',
  },
];

const Education = memo(function Education() {
  const [imageErrors, setImageErrors] = useState({});

  return (
    <section name="education" className="bg-canvas w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              {"// 05. ACADEMIC FOUNDATIONS & SPECIALIZED TRAINING"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mt-2">
            Mathematical theory paired with intensive hands-on cloud and software engineering programs.
          </p>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {EDUCATION.map((entry) => (
            <div
              key={entry.id}
              className="tech-card border-border bg-surface/90 p-6 sm:p-8 flex flex-col justify-between group hover:border-slate-600 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-lg bg-white border border-border p-2 shrink-0 flex items-center justify-center overflow-hidden">
                    {entry.logo && !imageErrors[entry.id] ? (
                      <img
                        src={entry.logo}
                        alt={`${entry.school} logo`}
                        className="w-full h-full object-contain"
                        onError={() => setImageErrors(prev => ({ ...prev, [entry.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full bg-surface-elevated text-white font-mono font-bold text-xs flex items-center justify-center">
                        {entry.logoText}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end font-mono text-xs text-slate-400 gap-1.5">
                    <span className="inline-flex items-center gap-1.5 bg-canvas px-2.5 py-1 rounded border border-border">
                      <FaCalendarAlt className="text-accent" size={10} />
                      <span>{entry.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-canvas px-2.5 py-1 rounded border border-border">
                      <FaMapMarkerAlt className="text-slate-400" size={10} />
                      <span>{entry.location}</span>
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {entry.degree}
                </h3>
                <p className="text-accent font-sans text-sm sm:text-base font-semibold mb-4">
                  {entry.school}
                </p>

                {entry.description && (
                  <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                    {entry.description}
                  </p>
                )}
              </div>

              <div className="border-t border-border/80 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Core Disciplines & Topics:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {entry.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded bg-canvas border border-border text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
});

export default Education;
