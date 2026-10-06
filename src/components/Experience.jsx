import { useState, memo } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import knustLogo from "../assets/images/companies/knust.png";
import m365connectLogo from "../assets/images/companies/m365connect.png";
import hubblemindLogo from "../assets/images/companies/hubblemind.jpeg";
import leratoLogo from "../assets/images/companies/lerato.png";
import oneHealthLogo from "../assets/images/companies/onehealthtech.png";
import amalitechLogo from "../assets/images/companies/Amalitech.png";
import afarinickLogo from "../assets/images/companies/afarinick_company_limited_logo.jpg";

const EXPERIENCES = [
  {
    id: 8,
    title: "Software Engineer",
    company: "Afarinick Company Limited",
    type: "Full-time",
    duration: "Sep 2026 - Present",
    period: "Active",
    location: "Accra, Ghana",
    workType: "On-site",
    isCurrent: true,
    description: "Engineering and maintaining application architecture and backend services. Implementing robust software modules, managing code quality, and participating in system maintenance workflows.",
    skills: ["Software Engineering", "Backend Development", "System Architecture", "Application Maintenance"],
    logo: afarinickLogo,
    logoText: "AF"
  },
  {
    id: 7,
    title: "Software Engineering Team Lead",
    company: "AmaliTech",
    type: "Team Lead / Internship",
    duration: "Aug 2026 - Sep 2026",
    period: "2 mos",
    location: "Accra, Ghana",
    workType: "Remote",
    description: "Led an engineering team of interns through intensive, hands-on software development cycles, coordinating architecture breakdown and rapid delivery of working services.",
    highlights: [
      "Guided team task breakdown, pull request reviews, and sprint delivery milestones.",
      "Engineered backend web APIs, automated software deployment pipelines, and resolved production debugging hurdles."
    ],
    skills: ["Team Leadership", "Backend Engineering", "CI/CD Deployment", "Git & Code Review"],
    logo: amalitechLogo,
    logoText: "AT"
  },
  {
    id: 1,
    title: "Cloud & DevOps Engineer",
    company: "One Health Global Technologies",
    type: "Part-time",
    duration: "Jul 2026 - Sep 2026",
    period: "3 mos",
    location: "Accra, Ghana",
    workType: "Remote",
    description: "Designed and provisioned secure cloud infrastructure on AWS using Terraform. Automated application delivery pipelines with Docker and GitHub Actions CI/CD.",
    highlights: [
      "Provisioned and managed EC2, IAM, S3, VPC, Lambda, CloudWatch, and ECS Fargate for production workloads.",
      "Constructed declarative Terraform configurations, eliminating manual provisioning drift.",
      "Configured CloudWatch telemetry, logging, and automated alerting to maintain high availability."
    ],
    skills: ["AWS", "Terraform", "Docker", "GitHub Actions", "ECS Fargate", "VPC", "CloudWatch", "IAM"],
    logo: oneHealthLogo,
    logoText: "OH"
  },
  {
    id: 3,
    title: "Information Technology Technician",
    company: "Kwame Nkrumah University of Science and Technology (KNUST)",
    type: "Full-time",
    duration: "Oct 2024 - Sep 2025",
    period: "1 yr",
    location: "Kumasi, Ghana",
    workType: "On-site",
    description: "Delivered Tier-1 and Tier-2 technical support to 200+ academic staff and students across multiple departments, resolving hardware, software, and networking incidents.",
    highlights: [
      "Administered Active Directory accounts and network resources for 5+ academic and administrative departments.",
      "Authored an internal knowledge base of 40+ standardized SOPs, accelerating onboarding for incoming IT personnel.",
      "Implemented preventive hardware maintenance cycles, reducing recurring ticket volume for core lab infrastructure."
    ],
    skills: ["Active Directory", "Network Systems", "Tier-1/2 Troubleshooting", "Infrastructure Support", "SOP Documentation"],
    logo: knustLogo,
    logoText: "KNUST"
  },
  {
    id: 4,
    title: "Python Developer (Backend)",
    company: "M365Connect",
    type: "Internship",
    duration: "Dec 2024 - Mar 2025",
    period: "4 mos",
    location: "Germany (Remote)",
    workType: "Remote",
    description: "Developed RESTful backend endpoints in Django REST Framework and engineered automated data extraction pipelines in Python.",
    highlights: [
      "Designed clean REST APIs powering synchronized data exchange across 3 client web applications.",
      "Constructed automated web scraping routines to reliably ingest structured datasets.",
      "Refactored relational ORM queries to optimize database execution speed."
    ],
    skills: ["Python", "Django REST Framework", "REST APIs", "Web Scraping", "ORM Optimization"],
    logo: m365connectLogo,
    logoText: "M365"
  },
  {
    id: 5,
    title: "Data Science Intern — Machine Learning & AI",
    company: "HubbleMind",
    type: "Internship",
    duration: "Nov 2024 - Dec 2024",
    period: "2 mos",
    location: "India (Remote)",
    workType: "Remote",
    description: "Cleaned and processed 5,000+ health records using IQR outlier treatment, feature encoding, and trained predictive models with Scikit-learn at 88% accuracy.",
    skills: ["Python", "Pandas", "Scikit-Learn", "Feature Engineering", "Data Modeling"],
    logo: hubblemindLogo,
    logoText: "HM"
  },
  {
    id: 6,
    title: "OS Technician & IT Support Assistant",
    company: "Lerato Consult",
    type: "Part-time",
    duration: "Nov 2022 - Dec 2024",
    period: "2 yrs 2 mos",
    location: "Accra, Ghana",
    workType: "On-site",
    description: "Configured POS systems for 10+ retail and hospitality clients across commercial sites. Standardized a library of 50+ troubleshooting procedures to maintain system uptime.",
    skills: ["POS Architecture", "Network Diagnostics", "Client Support", "System Configuration"],
    logo: leratoLogo,
    logoText: "LC"
  }
];

const Experience = memo(function Experience() {
  const [imageErrors, setImageErrors] = useState({});

  return (
    <section name="experience" className="bg-canvas w-full py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              {"// 04. PRODUCTION CAREER & OPERATIONAL EXPERIENCE"}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 font-sans text-base sm:text-lg max-w-2xl mt-2">
            Track record across software engineering, cloud infrastructure automation, backend APIs, and enterprise systems.
          </p>
          <div className="w-16 h-0.5 bg-accent mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-border/80 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Circuit Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-canvas border-2 border-accent flex items-center justify-center">
                <span className={`w-1.5 h-1.5 rounded-full ${exp.isCurrent ? 'bg-emerald animate-ping' : 'bg-accent'}`} />
              </div>

              {/* Card Container */}
              <div className="tech-card border-border bg-surface/90 p-5 sm:p-7 group-hover:border-slate-600 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  {/* Left: Logo & Role Title */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white border border-border p-1.5 shrink-0 flex items-center justify-center overflow-hidden">
                      {exp.logo && !imageErrors[exp.id] ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                          onError={() => setImageErrors(prev => ({ ...prev, [exp.id]: true }))}
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-elevated text-white font-mono font-bold text-xs flex items-center justify-center">
                          {exp.logoText}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        {exp.isCurrent && (
                          <span className="font-mono text-[10px] text-emerald bg-emerald/10 border border-emerald/20 px-2 py-0.5 rounded font-semibold uppercase">
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className="text-accent font-sans text-sm sm:text-base font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Right: Duration & Meta Badges */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 font-mono text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 bg-canvas px-2.5 py-1 rounded border border-border">
                      <FaCalendarAlt className="text-accent" size={10} />
                      <span>{exp.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-canvas px-2.5 py-1 rounded border border-border">
                      <FaMapMarkerAlt className="text-slate-400" size={10} />
                      <span>{exp.location} · {exp.workType}</span>
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Role Highlights if available */}
                {exp.highlights && (
                  <ul className="space-y-1.5 mb-5 font-sans text-xs sm:text-sm text-slate-300 pl-4 border-l-2 border-border">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent font-mono">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 border-t border-border/80 pt-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[11px] px-2 py-0.5 rounded bg-canvas border border-border text-slate-300"
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

export default Experience;
