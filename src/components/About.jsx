import React, { memo } from 'react'
import { FaCode, FaServer, FaGraduationCap, FaProjectDiagram, FaTools, FaRocket, FaBriefcase } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import CurrentlyBuilding from './CurrentlyBuilding'
import { PERSONAL_INFO } from '../config/constants'

const About = memo(function About() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    { icon: <FaProjectDiagram />, value: '10+', label: 'Projects', color: 'from-cyan-500 to-blue-500' },
    { icon: <FaRocket />, value: '15+', label: 'Technologies', color: 'from-purple-500 to-pink-500' },
    { icon: <FaBriefcase />, value: 'Open', label: 'To Opportunities', color: 'from-green-500 to-teal-500' }
  ];

  const skills = [
    { icon: <FaRocket />, title: 'Cloud & Infrastructure', desc: 'AWS SAM; CloudFront as the only public HTTPS edge; private S3 + OAC; API Gateway as a hidden origin; WAF default-deny; Lambda; DynamoDB; Terraform; Docker; Kubernetes; GitHub Actions with OIDC' },
    { icon: <FaServer />, title: 'Python & Backend', desc: 'Python 3.12 Lambdas, Django, Django REST Framework, Flask, REST APIs, web scraping pipelines, ORM optimization, Secrets Manager, SES + email fallback' },
    { icon: <FaCode />, title: 'Full-Stack Development', desc: 'React, TypeScript, JavaScript (ES6+), Node.js, HTML5, CSS3, Tailwind CSS, static UIs on CloudFront/S3, responsive web applications' },
    { icon: <FaGraduationCap />, title: 'DevOps & IT Support', desc: 'GitHub Actions CI/CD, Linux (Ubuntu), Bash scripting, Active Directory, network diagnostics, BSc Applied Mathematics (KNUST), AWS Cloud & AI (Azubi Africa)' }
  ];

  return (
    <div name="about" ref={sectionRef} className='w-full min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50/30 dark:from-gray-800 dark:to-stone-900 text-gray-900 dark:text-white py-12 md:py-20'>
      <div className='max-w-screen-lg px-4 sm:px-6 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>About</p>
          <p className='text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-4'>{PERSONAL_INFO.headline}</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='group relative p-4 md:p-6 bg-white/80 dark:bg-gradient-to-br dark:from-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600/50 shadow-md hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/20 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 overflow-hidden'
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className='relative z-10 flex flex-col items-center text-center'>
                <div className={`text-3xl md:text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300'>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12'>
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
              I'm Blessing Edmund Kwame Dogbe, a Cloud & Software Engineer. On Event-Connect, CloudFront is
              the only public HTTPS endpoint — private S3 with Origin Access Control, API Gateway as a hidden
              origin, WAF default-deny, five Python 3.12 Lambdas, and DynamoDB for events and tickets.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
              I also deploy CloudFront + ALB + EC2 stacks, write Terraform with OIDC (no long-lived keys),
              build Django REST APIs, and automate CI/CD with GitHub Actions. Docker and Kubernetes show up
              where the workload is containerized, not as decoration.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
              BSc Applied Mathematics from KNUST and AWS Cloud & AI training through Azubi Africa. I care
              about least-privilege IAM, what is actually public on the internet, and whether a ticket still
              exists if email lands in spam.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
              {PERSONAL_INFO.availability} I'm always open to connecting on new projects, internships,
              and roles where I can grow as an engineer while contributing real value.
            </p>
            <CurrentlyBuilding />
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='group relative p-4 md:p-6 bg-white/90 dark:bg-gradient-to-br dark:from-gray-700/50 dark:to-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600/50 shadow-md hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 overflow-hidden'
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className='absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative z-10'>
                  <div className='text-2xl md:text-3xl text-cyan-600 dark:text-cyan-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300'>{skill.icon}</div>
                  <h3 className='text-base md:text-lg font-bold mb-1 md:mb-2 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300'>{skill.title}</h3>
                  <p className='text-xs sm:text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300'>{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-6 md:mt-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className='p-4 md:p-6 bg-white/80 dark:bg-gradient-to-r dark:from-cyan-500/10 dark:via-blue-500/10 dark:to-purple-500/10 rounded-xl border border-gray-200 dark:border-cyan-500/20 backdrop-blur-sm'>
            <h3 className='text-xl md:text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400 flex items-center gap-2'>
              <FaTools className='text-cyan-600 dark:text-cyan-400' />
              Tools I actually used
            </h3>
            <div className='flex flex-wrap gap-2'>
              {[
                'AWS SAM', 'CloudFront', 'Lambda', 'API Gateway', 'DynamoDB', 'WAF',
                'S3 / OAC', 'Terraform', 'OIDC', 'Docker', 'Kubernetes',
                'Python', 'Django', 'React', 'GitHub Actions', 'CloudWatch',
              ].map((name) => (
                <span
                  key={name}
                  className='px-3 py-1.5 text-sm font-medium rounded-md bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/30'
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default About