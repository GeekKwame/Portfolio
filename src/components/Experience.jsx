import { useState, memo } from 'react'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
// Import company logos
import knustLogo from "../assets/images/companies/knust.png"
import m365connectLogo from "../assets/images/companies/m365connect.png"
import hubblemindLogo from "../assets/images/companies/hubblemind.jpeg"
import leratoLogo from "../assets/images/companies/lerato.png"
import oneHealthLogo from "../assets/images/companies/onehealthtech.png"
import amalitechLogo from "../assets/images/companies/Amalitech.png"

const Experience = memo(function Experience() {
  const [imageErrors, setImageErrors] = useState({});

  const experiences = [
    {
      id: 7,
      title: "Software Engineer",
      company: "AmaliTech",
      type: "Internship",
      duration: "Aug 2026 - Present",
      period: "2 mos",
      location: "Accra, Greater Accra Region, Ghana",
      workType: "Remote",
      description: "Hands-on software engineering internship delivering assigned work on real projects.",
      highlights: [
        "Deliver assigned tasks on real-world projects in an intensive software engineering programme.",
        "Collaborate with other interns and technical teams to break down problems and deliver working solutions.",
        "Apply back-end web development, software deployment, version control, and debugging in a professional engineering environment.",
      ],
      skills: ["Software Deployment", "Back-End Web Development"],
      logo: amalitechLogo,
      logoClass: "bg-black",
      logoGradient: "from-neutral-900 to-orange-700",
      logoText: "AT"
    },
    {
      id: 1,
      title: "Cloud & DevOps Engineer",
      company: "One Health Global Technologies",
      type: "Part-time",
      duration: "Jul 2026 - Sep 2026",
      period: "3 mos",
      location: "Greater Accra Region, Ghana",
      workType: "Remote",
      description: "Designed and deployed secure cloud infrastructure on AWS using Terraform. Automated application deployment and operational workflows with Docker and GitHub Actions CI/CD. Managed EC2, IAM, S3, VPC, Lambda, CloudWatch, and ECS for production workloads, and implemented monitoring, logging, and alerting. Collaborated with engineering teams on scalable, secure, highly available cloud-native solutions, applying DevOps practices for infrastructure automation, security, and continuous delivery.",
      skills: ["AWS", "Terraform", "Docker", "GitHub Actions", "EC2", "IAM", "S3", "VPC", "Lambda", "CloudWatch", "ECS"],
      logo: oneHealthLogo,
      logoGradient: "from-emerald-600 to-teal-700",
      logoText: "OH"
    },
    {
      id: 3,
      title: "Information Technology Technician",
      company: "Kwame Nkrumah University of Science and Technology, Kumasi",
      type: "Full-time",
      duration: "Oct 2024 - Sep 2025",
      period: "1 yr",
      location: "Kumasi, Ashanti Region, Ghana",
      workType: "On-site",
      description: "Delivered Tier-1 and Tier-2 support to 200+ staff and students, resolving hardware, software, and network incidents. Introduced scheduled maintenance procedures and standardized troubleshooting documentation, cutting repeat tickets for common issues. Administered Active Directory accounts and network resources for 5+ academic and administrative departments. Established an internal knowledge base covering 40+ procedures, accelerating onboarding for new IT staff.",
      skills: ["Tier-1 & Tier-2 Support", "Active Directory", "Network Administration", "Hardware Maintenance", "Documentation", "IT Infrastructure"],
      logo: knustLogo,
      logoGradient: "from-blue-600 to-blue-800",
      logoText: "KNUST"
    },
    {
      id: 4,
      title: "Python Developer (Backend)",
      company: "M365Connect",
      type: "Internship",
      duration: "Dec 2024 - Mar 2025",
      period: "4 mos",
      location: "Germany",
      workType: "Remote",
      description: "Designed REST APIs with Django REST Framework, powering data exchange across 3 client applications. Automated Python web scraping pipelines to collect large datasets, eliminating manual data-gathering work. Integrated third-party APIs and refactored ORM queries, improving backend query efficiency.",
      skills: ["Python", "Django REST Framework", "REST APIs", "Web Scraping", "ORM Optimization", "API Integration"],
      logo: m365connectLogo,
      logoGradient: "from-orange-500 to-yellow-500",
      logoText: "M365"
    },
    {
      id: 5,
      title: "Data Science Intern — Machine Learning & AI",
      company: "HubbleMind",
      type: "Internship",
      duration: "Nov 2024 - Dec 2024",
      period: "2 mos",
      location: "India",
      workType: "Remote",
      description: "Cleaned and preprocessed 5,000+ multi-country health records using IQR outlier treatment, encoding, and feature engineering. Trained Logistic Regression and Random Forest classifiers to predict obesity levels at 88% accuracy; presented findings to the team.",
      skills: ["Python", "Pandas", "Scikit-learn", "Feature Engineering", "EDA", "Model Evaluation", "Health Data Analysis"],
      logo: hubblemindLogo,
      logoGradient: "from-purple-500 to-pink-500",
      logoText: "HM"
    },
    {
      id: 6,
      title: "OS Technician & IT Support Assistant",
      company: "Lerato Consult",
      type: "Part-time",
      duration: "Nov 2022 - Dec 2024",
      period: "2 yrs 2 mos",
      location: "Greater Accra Region, Ghana",
      workType: "On-site",
      description: "Installed and configured POS systems for 10+ retail and hospitality clients across multiple sites. Diagnosed and resolved hardware and network issues on-site, reducing client downtime. Compiled a documentation library of 50+ support procedures, standardizing service quality across the team.",
      skills: ["POS Systems", "Hardware Installation", "Network Diagnostics", "Client Support", "IT Documentation", "System Configuration"],
      logo: leratoLogo,
      logoGradient: "from-green-500 to-teal-500",
      logoText: "LC"
    },
  ];

  return (
    <div name="experience" className='bg-paper dark:bg-ink w-full py-14 md:py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center w-full text-ink dark:text-stone-200'>
        <div className='mb-8'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl mb-3 text-ink dark:text-stone-50'>
            Experience
          </h2>
          <p className='text-stone-600 dark:text-stone-400 text-base sm:text-lg mb-4'>Current role, then earlier work</p>
          <div className='accent-rule'></div>
        </div>

        <div className='space-y-6 md:space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className='relative bg-surface dark:bg-surface-dark border border-stone-200 dark:border-stone-700 rounded-lg p-4 sm:p-6'
            >

              <div className='relative z-10 flex flex-col md:flex-row gap-4 md:gap-6'>
                {/* Company Logo */}
                <div className='flex-shrink-0'>
                  {exp.logo && !imageErrors[exp.id] ? (
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-lg ${exp.logoClass || 'bg-white'} p-2 flex items-center justify-center overflow-hidden border border-stone-200 dark:border-stone-600`}>
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className='w-full h-full object-contain'
                        onError={() => {
                          setImageErrors(prev => ({ ...prev, [exp.id]: true }));
                        }}
                      />
                    </div>
                  ) : (
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center`}>
                      <span className='text-white font-bold text-lg md:text-xl'>{exp.logoText}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3'>
                    <div>
                      <h3 className='text-lg sm:text-xl font-display text-ink dark:text-stone-100 mb-1'>
                        {exp.title}
                      </h3>
                      <p className='text-accent dark:text-accent-muted font-semibold text-sm sm:text-base mb-2'>
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                  </div>

                  {/* Duration and Location */}
                  <div className='flex flex-wrap items-center gap-4 text-sm text-stone-600 dark:text-stone-400 mb-4'>
                    <div className='flex items-center gap-2'>
                      <FaCalendarAlt className='text-accent dark:text-accent-muted' />
                      <span>{exp.duration} · {exp.period}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaMapMarkerAlt className='text-accent dark:text-accent-muted' />
                      <span>{exp.location} · {exp.workType}</span>
                    </div>
                  </div>

                  {exp.description && (
                    <p className={`text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed ${exp.highlights ? 'mb-3' : 'mb-4'}`}>
                      {exp.description}
                    </p>
                  )}
                  {exp.highlights && (
                    <ul className='list-disc pl-5 space-y-1.5 mb-4 text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed'>
                      {exp.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  <div className='flex flex-wrap gap-2'>
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs rounded-md border border-stone-300 dark:border-stone-600'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline connector (for visual flow) */}
              {index < experiences.length - 1 && (
                <div className='absolute left-8 md:left-10 top-full w-px h-6 md:h-8 bg-stone-300 dark:bg-stone-700'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Experience
