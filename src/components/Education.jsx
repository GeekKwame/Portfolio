import React, { useState, memo } from 'react'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import knustLogo from '../assets/images/companies/knust.png'

const azubiLogo =
  Object.values(
    import.meta.glob('../assets/images/companies/azubi_logo.*', {
      eager: true,
      import: 'default',
    })
  )[0] ?? null

const Education = memo(function Education() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  const [imageErrors, setImageErrors] = useState({})

  const education = [
    {
      id: 1,
      school: 'Kwame Nkrumah University of Science and Technology, Kumasi',
      degree: 'Bachelor of Science, Applied Mathematics',
      duration: 'Jan 2020 - Aug 2024',
      location: 'Kumasi, Ashanti Region, Ghana',
      description: null,
      skills: ['Applied Mathematics', 'Problem Solving', 'Algorithm Design', 'Data Structures', 'Statistical Analysis'],
      logo: knustLogo,
      logoGradient: 'from-blue-600 to-blue-800',
      logoText: 'KNUST',
    },
    {
      id: 2,
      school: 'Azubi Africa',
      degree: 'Cloud Computing & Artificial Intelligence Training Program',
      duration: 'Apr 2026 - Present',
      location: 'Ghana',
      description:
        'Selected participant in the AWS Cloud Computing and Artificial Intelligence Program delivered by Generation.',
      skills: ['Cloud Computing', 'Artificial Intelligence', 'AWS'],
      logo: azubiLogo,
      logoGradient: 'from-emerald-600 to-teal-700',
      logoText: 'Azubi',
    },
  ]

  return (
    <div
      name="education"
      ref={sectionRef}
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-stone-800 dark:to-gray-800 w-full min-h-screen py-12 md:py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 flex flex-col justify-center w-full h-full text-gray-900 dark:text-white">
        <div
          className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Education</p>
          <p className="py-2 md:py-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            My academic background and professional training
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {education.map((entry, index) => (
            <div
              key={entry.id}
              className={`group relative bg-white/90 dark:bg-gradient-to-br dark:from-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-600/50 rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-cyan-500/10 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  {entry.logo && !imageErrors[entry.id] ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/10 backdrop-blur-sm p-2 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 overflow-hidden border border-gray-600/30">
                      <img
                        src={entry.logo}
                        alt={`${entry.school} logo`}
                        className="w-full h-full object-contain"
                        onError={() => {
                          setImageErrors((prev) => ({ ...prev, [entry.id]: true }))
                        }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${entry.logoGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <span className="text-white font-bold text-sm md:text-base text-center px-1">
                        {entry.logoText}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300 mb-1">
                    {entry.degree}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm sm:text-base mb-3">{entry.school}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{entry.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      <span>{entry.location}</span>
                    </div>
                  </div>

                  {entry.description && (
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                      {entry.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {entry.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < education.length - 1 && (
                <div className="absolute left-8 md:left-10 top-full w-0.5 h-6 md:h-8 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Education
