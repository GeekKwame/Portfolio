import { useState, memo } from 'react';
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
    duration: "Sep 2026 – Present",
    location: "Accra, Ghana · On-site",
    isCurrent: true,
    description: "Engineering and maintaining application architecture and backend services. Implementing software modules, managing code quality, and participating in system maintenance workflows.",
    skills: ["Software Engineering", "Backend Development", "System Architecture"],
    logo: afarinickLogo,
    logoText: "AF",
  },
  {
    id: 7,
    title: "Software Engineering Team Lead",
    company: "AmaliTech",
    type: "Team Lead / Internship",
    duration: "Aug 2026 – Sep 2026",
    location: "Accra, Ghana · Remote",
    description: "Led an engineering team of interns through hands-on development cycles, coordinating architecture breakdown and delivery of working services.",
    highlights: [
      "Guided task breakdown, pull request reviews, and sprint delivery.",
      "Engineered backend APIs, automated deployment pipelines, and resolved production debugging issues.",
    ],
    skills: ["Team Leadership", "Backend Engineering", "CI/CD", "Code Review"],
    logo: amalitechLogo,
    logoText: "AT",
  },
  {
    id: 1,
    title: "Cloud & DevOps Engineer",
    company: "One Health Global Technologies",
    type: "Part-time",
    duration: "Jul 2026 – Sep 2026",
    location: "Accra, Ghana · Remote",
    description: "Designed and provisioned secure AWS infrastructure with Terraform. Automated delivery with Docker and GitHub Actions.",
    highlights: [
      "Provisioned EC2, IAM, S3, VPC, Lambda, CloudWatch, and ECS Fargate for production workloads.",
      "Built declarative Terraform configurations to eliminate manual provisioning drift.",
      "Configured CloudWatch telemetry, logging, and alerting for availability.",
    ],
    skills: ["AWS", "Terraform", "Docker", "GitHub Actions", "ECS Fargate"],
    logo: oneHealthLogo,
    logoText: "OH",
  },
  {
    id: 3,
    title: "Information Technology Technician",
    company: "KNUST",
    type: "Full-time",
    duration: "Oct 2024 – Sep 2025",
    location: "Kumasi, Ghana · On-site",
    description: "Tier-1 and Tier-2 support for 200+ academic staff and students — hardware, software, and networking incidents.",
    highlights: [
      "Administered Active Directory and network resources across 5+ departments.",
      "Authored 40+ standardized SOPs that accelerated onboarding for IT personnel.",
      "Preventive hardware maintenance reduced recurring tickets for core lab infrastructure.",
    ],
    skills: ["Active Directory", "Networking", "Tier-1/2 Support", "SOP Documentation"],
    logo: knustLogo,
    logoText: "KNUST",
  },
  {
    id: 4,
    title: "Python Developer (Backend)",
    company: "M365Connect",
    type: "Internship",
    duration: "Dec 2024 – Mar 2025",
    location: "Germany · Remote",
    description: "Built RESTful endpoints in Django REST Framework and automated data extraction pipelines in Python.",
    highlights: [
      "Designed REST APIs powering data exchange across 3 client web applications.",
      "Built automated scraping routines for structured dataset ingestion.",
      "Refactored ORM queries to improve database execution speed.",
    ],
    skills: ["Python", "Django REST Framework", "REST APIs", "ORM"],
    logo: m365connectLogo,
    logoText: "M365",
  },
  {
    id: 5,
    title: "Data Science Intern",
    company: "HubbleMind",
    type: "Internship",
    duration: "Nov 2024 – Dec 2024",
    location: "India · Remote",
    description: "Cleaned and processed 5,000+ health records with IQR outlier treatment and feature encoding; trained predictive models with Scikit-learn at 88% accuracy.",
    skills: ["Python", "Pandas", "Scikit-Learn", "Feature Engineering"],
    logo: hubblemindLogo,
    logoText: "HM",
  },
  {
    id: 6,
    title: "OS Technician & IT Support Assistant",
    company: "Lerato Consult",
    type: "Part-time",
    duration: "Nov 2022 – Dec 2024",
    location: "Accra, Ghana · On-site",
    description: "Configured POS systems for 10+ retail and hospitality clients. Standardized 50+ troubleshooting procedures to maintain uptime.",
    skills: ["POS Systems", "Network Diagnostics", "Client Support"],
    logo: leratoLogo,
    logoText: "LC",
  },
];

const Experience = memo(function Experience() {
  const [imageErrors, setImageErrors] = useState({});

  return (
    <section name="experience" className="section rule bg-paper-elevated">
      <div className="section-inner">
        <div className="mb-12 lg:mb-16 max-w-2xl">
          <p className="section-label mb-3">04 — Experience</p>
          <h2 className="section-title mb-3">Professional record</h2>
          <p className="section-lede">
            Software engineering, cloud automation, backend APIs, and enterprise IT operations.
          </p>
        </div>

        <ol className="space-y-0">
          {EXPERIENCES.map((exp, idx) => (
            <li
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-8 border-t border-rule"
            >
              <div className="md:col-span-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] text-accent font-medium">REC-0{idx + 1}</span>
                </div>
                <p className="font-mono text-xs text-ink font-medium tracking-wide">{exp.duration}</p>
                <p className="font-mono text-[11px] text-ink-muted mt-1">{exp.location}</p>
                {exp.isCurrent && (
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 border border-signal/30 bg-signal-soft/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-signal font-medium">Active Role</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-9">
                <div className="flex items-start gap-4 mb-3">
                  <div className="hidden sm:flex w-11 h-11 border border-rule bg-paper p-1.5 shrink-0 items-center justify-center overflow-hidden">
                    {exp.logo && !imageErrors[exp.id] ? (
                      <img
                        src={exp.logo}
                        alt=""
                        className="w-full h-full object-contain"
                        onError={() => setImageErrors((prev) => ({ ...prev, [exp.id]: true }))}
                      />
                    ) : (
                      <span className="font-mono text-[11px] text-ink-faint font-medium">{exp.logoText}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-ink tracking-tight">
                      {exp.title}
                    </h3>
                    <p className="font-sans text-sm text-accent-ink font-medium mt-0.5">
                      {exp.company}
                      <span className="text-ink-faint font-normal"> · {exp.type}</span>
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-ink-muted leading-relaxed mb-3 max-w-prose">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="space-y-1.5 mb-4 max-w-prose">
                    {exp.highlights.map((item) => (
                      <li key={item} className="font-sans text-sm text-ink-muted leading-relaxed pl-3 border-l-2 border-rule">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-2 border-t border-rule/60">
                  <p className="font-mono text-xs text-ink-muted">
                    <span className="text-ink-faint text-[10px] uppercase tracking-widest mr-2">TECH:</span>
                    {exp.skills.join(' · ')}
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

export default Experience;
