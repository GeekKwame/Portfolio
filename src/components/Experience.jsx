import React, { useState, memo } from 'react'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
// Import company logos
import knustLogo from "../assets/images/companies/knust.png"
import m365connectLogo from "../assets/images/companies/m365connect.png"
import hubblemindLogo from "../assets/images/companies/hubblemind.jpeg"
import leratoLogo from "../assets/images/companies/lerato.png"

const Experience = memo(function Experience() {
  const [imageErrors, setImageErrors] = useState({});

  const experiences = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
    <div name="experience" className='bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:bg-slate-900 dark:bg-none dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 w-full py-12 md:py-20'>
      <div className='max-w-screen-lg mx-auto p-4 sm:p-6 flex flex-col justify-center w-full h-full text-gray-900 dark:text-slate-200'>
        <div className='mb-8 md:mb-12'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-slate-50'>
            Experience
          </p>
          <p className='py-2 md:py-4 text-gray-600 dark:text-slate-200 text-base sm:text-lg'>My professional journey and the roles that shaped my expertise</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        <div className='space-y-6 md:space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className='group relative bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 md:p-8'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>

              <div className='relative z-10 flex flex-col md:flex-row gap-4 md:gap-6'>
                {/* Company Logo */}
                <div className='flex-shrink-0'>
                  {exp.logo && !imageErrors[exp.id] ? (
                    <div className='w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-slate-600'>
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
                      <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-teal-300 transition-colors duration-300 mb-1'>
                        {exp.title}
                      </h3>
                      <p className='text-cyan-700 dark:text-teal-300 font-semibold text-sm sm:text-base mb-2'>
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                  </div>

                  {/* Duration and Location */}
                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-slate-300 mb-4'>
                    <div className='flex items-center gap-2'>
                      <FaCalendarAlt className='text-cyan-600 dark:text-teal-300' />
                      <span>{exp.duration} · {exp.period}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaMapMarkerAlt className='text-cyan-600 dark:text-teal-300' />
                      <span>{exp.location} · {exp.workType}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-gray-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-4'>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className='flex flex-wrap gap-2'>
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-2 py-1 bg-cyan-500/10 dark:bg-teal-500/10 text-cyan-800 dark:text-teal-200 text-xs rounded-md border border-cyan-500/30 dark:border-teal-500/25'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline connector (for visual flow) */}
              {index < experiences.length - 1 && (
                <div className='absolute left-8 md:left-10 top-full w-0.5 h-6 md:h-8 bg-gradient-to-b from-cyan-500/50 to-transparent'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Experience
