import { memo } from 'react'
import { FaCode, FaServer, FaGraduationCap, FaTools, FaRocket } from 'react-icons/fa'
import CurrentlyBuilding from './CurrentlyBuilding'
import { PERSONAL_INFO } from '../config/constants'

const About = memo(function About() {
  const skills = [
    { icon: <FaServer />, title: 'Python & Backend', desc: 'Python, FastAPI, Django, Django REST Framework, SQLAlchemy, PostgreSQL, REST APIs, web scraping pipelines, ORM optimization, Secrets Manager' },
    { icon: <FaCode />, title: 'Full-Stack Development', desc: 'React, JavaScript (ES6+), Node.js, HTML5, CSS3, Tailwind CSS, responsive web applications' },
    { icon: <FaRocket />, title: 'Cloud & Infrastructure', desc: 'AWS (CloudFront, Lambda, API Gateway, DynamoDB, S3, EC2, ECS Fargate, RDS, ALB, VPC, IAM, WAF), Terraform, AWS SAM, Docker' },
    { icon: <FaGraduationCap />, title: 'DevOps & Education', desc: 'GitHub Actions CI/CD with OIDC, Linux (Ubuntu), Bash, Docker, BSc Applied Mathematics (KNUST), AWS Cloud & AI (Azubi Africa)' }
  ];

  return (
    <div name="about" className='w-full bg-paper dark:bg-ink text-ink dark:text-stone-200 py-14 md:py-20'>
      <div className='max-w-6xl px-4 sm:px-6 lg:px-14 xl:px-8 mx-auto flex flex-col justify-center w-full'>
        <div className='mb-8 md:mb-10'>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl mb-3 text-ink dark:text-stone-50'>About</h2>
          <p className='text-stone-600 dark:text-stone-400 text-base sm:text-lg mb-4'>{PERSONAL_INFO.title}</p>
          <div className='accent-rule'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-12 mb-10'>
          <div>
            <p className='text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-4'>
              I am Blessing Edmund Kwame Dogbe. I build full-stack web applications and backend services with React, Node.js, Express, FastAPI, and Django — and operate the cloud infrastructure underneath with AWS, Terraform, Docker, and GitHub Actions CI/CD.
            </p>
            <p className='text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-4'>
              Currently a Software Engineer at Afarinick Company Limited, developing and maintaining software applications and backend services. Previously led a team of interns at AmaliTech and built cloud infrastructure at One Health Global Technologies.
            </p>
            <p className='text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed mb-6'>
              BSc Applied Mathematics from KNUST and AWS Cloud & AI training through Azubi Africa.
              {' '}{PERSONAL_INFO.availability}
            </p>
            <CurrentlyBuilding />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {skills.map((skill) => (
              <div
                key={skill.title}
                className='p-4 md:p-5 bg-surface dark:bg-surface-dark rounded-lg border border-stone-200 dark:border-stone-700'
              >
                <div className='text-xl text-accent dark:text-accent-muted mb-2'>{skill.icon}</div>
                <h3 className='text-base font-semibold mb-2 text-ink dark:text-stone-100'>{skill.title}</h3>
                <p className='text-sm text-stone-600 dark:text-stone-400 leading-relaxed'>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='p-4 md:p-6 bg-surface dark:bg-surface-dark rounded-lg border border-stone-200 dark:border-stone-700'>
          <h3 className='text-xl font-display mb-4 text-ink dark:text-stone-100 flex items-center gap-2'>
            <FaTools className='text-accent dark:text-accent-muted' />
            Tools I actually used
          </h3>
          <div className='flex flex-wrap gap-2'>
            {[
              'React', 'JavaScript', 'Node.js', 'Express', 'Prisma', 'Python', 'FastAPI', 'Django', 'SQLAlchemy', 'PostgreSQL', 'Jest',
              'Docker', 'GitHub Actions', 'Terraform',
              'AWS SAM', 'CloudFront', 'Lambda', 'API Gateway', 'DynamoDB', 'S3 / OAC',
              'EC2', 'ECS Fargate', 'RDS', 'ALB', 'VPC', 'WAF', 'CloudWatch',
            ].map((name) => (
              <span
                key={name}
                className='px-3 py-1.5 text-sm rounded-md bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-600'
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
})

export default About
