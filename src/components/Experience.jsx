import React, { useState } from 'react'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
// Import company logos
import knustLogo from "../assets/images/companies/knust.png"
import m365connectLogo from "../assets/images/companies/m365connect.png"
import hubblemindLogo from "../assets/images/companies/hubblemind.jpeg"
import leratoLogo from "../assets/images/companies/lerato.png"
import zidioLogo from "../assets/images/companies/zidio.png"

function Experience() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
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
      description: "As a Technician in the University Information Technology Services (UITS) department, I am responsible for providing technical support and ensuring the smooth operation of IT infrastructure across the university. I troubleshoot hardware and software issues, maintain network systems, and assist faculty and students with technology-related problems.",
      skills: ["Information Technology", "Technical Support", "Network Administration", "Hardware Maintenance", "Software Troubleshooting", "IT Infrastructure"],
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
      description: "I worked with a dynamic team at M365Connect, where I developed and implemented backend services using Django. Gained hands-on experience with third-party integrations and automated web scraping tools. Contributed to building scalable REST APIs and database optimization.",
      skills: ["Python", "Django", "REST APIs", "Backend Development", "Web Scraping", "Database Design"],
      logo: m365connectLogo,
      logoGradient: "from-orange-500 to-yellow-500",
      logoText: "M365"
    },
    {
      id: 3,
      title: "Data Science Intern | Machine Learning & AI Projects in Health Data and Obesity Level Prediction",
      company: "HubbleMind",
      type: "Internship",
      duration: "Nov 2024 - Dec 2024",
      period: "2 mos",
      location: "India",
      workType: "Remote",
      description: "Conducted comprehensive data preprocessing including duplicate removal, label encoding, one-hot encoding, and outlier treatment using IQR. Developed machine learning models for obesity level prediction using health data. Worked with various ML algorithms and performed feature engineering to improve model accuracy.",
      skills: ["Python", "Pandas", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Health Data Analysis"],
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
      description: "Install, configure, and maintain Point of Sale (POS) systems for restaurants, bars, and retail stores. Provide technical support and troubleshooting for IT systems. Manage hardware and software installations, ensuring optimal performance and minimal downtime for clients.",
      skills: ["Point of Sale (POS) Systems", "IT Service Management", "Hardware Installation", "System Configuration", "Client Support", "Technical Troubleshooting"],
      logo: leratoLogo,
      logoGradient: "from-green-500 to-teal-500",
      logoText: "LC"
    },
    {
      id: 5,
      title: "Data Science Intern | Machine Learning & AI Projects in Audio Analysis and Recommendation Systems",
      company: "Zidio Development",
      type: "Internship",
      duration: "Aug 2024 - Nov 2024",
      period: "4 mos",
      location: "India",
      workType: "Remote",
      description: "Developed and deployed a real-time Speech Emotion Recognition system using machine learning. Extracted key audio features including MFCCs, Zero Crossing Rate, Energy, and Pitch to classify emotions such as happiness, sadness, anger, and neutral states. Built recommendation systems using collaborative filtering techniques.",
      skills: ["Python", "Machine Learning", "Audio Processing", "Signal Processing", "Recommendation Systems", "Deep Learning"],
      logo: zidioLogo,
      logoGradient: "from-cyan-500 to-blue-600",
      logoText: "ZD"
    }
  ];

  return (
    <div name="experience" ref={sectionRef} className='bg-gradient-to-b from-gray-800 to-stone-800 w-full min-h-screen py-12 md:py-20'>
      <div className='max-w-screen-lg mx-auto p-4 sm:p-6 flex flex-col justify-center w-full h-full text-white'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
            Experience
          </p>
          <p className='py-2 md:py-4 text-gray-300 text-base sm:text-lg'>My professional journey and the roles that shaped my expertise</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>
        
        <div className='space-y-6 md:space-y-8'>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`group relative bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl p-4 sm:p-6 md:p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
              
              <div className='relative z-10 flex flex-col md:flex-row gap-4 md:gap-6'>
                {/* Company Logo */}
                <div className='flex-shrink-0'>
                  {exp.logo && !imageErrors[exp.id] ? (
                    <div className='w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur-sm p-2 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 overflow-hidden border border-gray-600/30'>
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
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${exp.logoGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className='text-white font-bold text-lg md:text-xl'>{exp.logoText}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className='flex-1 min-w-0'>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3'>
                    <div>
                      <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-1'>
                        {exp.title}
                      </h3>
                      <p className='text-cyan-400 font-semibold text-sm sm:text-base mb-2'>
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                  </div>

                  {/* Duration and Location */}
                  <div className='flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4'>
                    <div className='flex items-center gap-2'>
                      <FaCalendarAlt className='text-cyan-400' />
                      <span>{exp.duration} · {exp.period}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <FaMapMarkerAlt className='text-cyan-400' />
                      <span>{exp.location} · {exp.workType}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-4'>
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className='flex flex-wrap gap-2'>
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300'
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
}

export default Experience
