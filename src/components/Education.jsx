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
      className="bg-paper dark:bg-ink w-full py-14 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center w-full text-ink dark:text-stone-200">
        <div className="mb-8">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl mb-3 text-ink dark:text-stone-50">Education</h2>
          <p className="text-stone-600 dark:text-stone-400 text-base sm:text-lg mb-4">
            Academic background and professional training
          </p>
          <div className="accent-rule"></div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {education.map((entry, index) => (
            <div
              key={entry.id}
              className="relative bg-surface dark:bg-surface-dark border border-stone-200 dark:border-stone-700 rounded-lg p-4 sm:p-6"
            >

              <div className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  {entry.logo && !imageErrors[entry.id] ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-white p-2 flex items-center justify-center overflow-hidden border border-stone-200 dark:border-stone-600">
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
                  <h3 className="text-lg sm:text-xl font-display text-ink dark:text-stone-100 mb-1">
                    {entry.degree}
                  </h3>
                  <p className="text-accent dark:text-accent-muted font-semibold text-sm sm:text-base mb-3">{entry.school}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-stone-600 dark:text-stone-400 mb-4">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-accent dark:text-accent-muted" />
                      <span>{entry.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-accent dark:text-accent-muted" />
                      <span>{entry.location}</span>
                    </div>
                  </div>

                  {entry.description && (
                    <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed mb-4">
                      {entry.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {entry.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs rounded-md border border-stone-300 dark:border-stone-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {index < education.length - 1 && (
                <div className="absolute left-8 md:left-10 top-full w-px h-6 md:h-8 bg-stone-300 dark:bg-stone-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Education
