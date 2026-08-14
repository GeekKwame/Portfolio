import React, { useState, memo } from 'react'
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'
import knustLogo from '../assets/images/companies/knust.png'

const azubiLogo =
  Object.values(
    import.meta.glob('../assets/images/companies/azubi_logo.*', {
      eager: true,
      import: 'default',
    })
  )[0] ?? null

const Education = memo(function Education() {
  const [imageErrors, setImageErrors] = useState({})

  const education = [
    {
      id: 1,
      school: 'Kwame Nkrumah University of Science and Technology, Kumasi',
      degree: 'Bachelor of Science, Applied Mathematics',
      duration: 'Jan 2021 - Aug 2024',
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
      duration: 'Apr 2026 - July 2026',
      location: 'Remote',
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
      className="bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:bg-slate-950 dark:bg-none dark:from-slate-950 dark:via-slate-950 dark:to-slate-950 w-full py-12 md:py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 flex flex-col justify-center w-full h-full text-gray-900 dark:text-slate-200">
        <div className="mb-8 md:mb-12">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-slate-50">Education</p>
          <p className="py-2 md:py-4 text-gray-600 dark:text-slate-200 text-base sm:text-lg">
            My academic background and professional training
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {education.map((entry, index) => (
            <div
              key={entry.id}
              className="group relative bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  {entry.logo && !imageErrors[entry.id] ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white p-2 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-slate-600">
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
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${entry.logoGradient} flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm md:text-base text-center px-1">
                        {entry.logoText}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-teal-300 transition-colors duration-300 mb-1">
                    {entry.degree}
                  </h3>
                  <p className="text-cyan-700 dark:text-teal-300 font-semibold text-sm sm:text-base mb-3">{entry.school}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-slate-300 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-600 dark:text-teal-300" />
                      <span>{entry.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-600 dark:text-teal-300" />
                      <span>{entry.location}</span>
                    </div>
                  </div>

                  {entry.description && (
                    <p className="text-gray-600 dark:text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
                      {entry.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {entry.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-cyan-500/10 dark:bg-teal-500/10 text-cyan-800 dark:text-teal-200 text-xs rounded-md border border-cyan-500/30 dark:border-teal-500/25"
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
