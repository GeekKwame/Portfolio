import { memo } from 'react';
import Section from './Section';
import RecordEntry from './RecordEntry';
import knustLogo from '../assets/images/companies/knust.png';
import azubiLogo from '../assets/images/companies/azubi_logo.png';

const EDUCATION = [
  {
    id: 1,
    school: 'Kwame Nkrumah University of Science and Technology (KNUST)',
    degree: 'Bachelor of Science in Applied Mathematics',
    duration: 'Jan 2021 – Aug 2024',
    location: 'Kumasi, Ghana',
    description:
      'Numerical analysis, discrete mathematics, statistical modeling, and algorithmic structures, the analytical backbone for backend and systems work.',
    skills: ['Applied Mathematics', 'Algorithm Design', 'Statistical Analysis'],
    logo: knustLogo,
    logoText: 'KNUST',
  },
  {
    id: 2,
    school: 'Azubi Africa (in partnership with Generation & AWS)',
    degree: 'Cloud Computing & Artificial Intelligence Program',
    duration: 'Apr 2026 – Jul 2026',
    location: 'Remote',
    description:
      'AWS core services (VPC, EC2, ECS, S3, IAM, CloudWatch), infrastructure automation, containers, and serverless architectures.',
    skills: ['AWS', 'IAM & Security', 'Docker', 'Linux', 'Cloud Networking'],
    logo: azubiLogo,
    logoText: 'Azubi',
  },
];

const Education = memo(function Education() {
  return (
    <Section
      id="education"
      number="05"
      label="Education"
      title="Education & training"
    >
      <ol className="divide-y divide-rule border-y border-rule">
        {EDUCATION.map((entry) => (
          <RecordEntry key={entry.id} title={entry.degree} organization={entry.school} {...entry} />
        ))}
      </ol>
    </Section>
  );
});

export default Education;
