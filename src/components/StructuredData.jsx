import { PERSONAL_INFO, HEADLINE } from '../config/constants';

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_INFO.name,
    "alternateName": "Edmund Blessing Kwame Dogbe",
    "jobTitle": PERSONAL_INFO.title,
    "description": PERSONAL_INFO.bio,
    "disambiguatingDescription": HEADLINE,
    "url": "https://github.com/GeekKwame",
    "sameAs": [
      "https://www.linkedin.com/in/edmund-blessing/",
      "https://github.com/GeekKwame",
      "https://devedmund.vercel.app/"
    ],
    "email": "dogbeblessingkwame@gmail.com",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Kwame Nkrumah University of Science and Technology",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kumasi",
          "addressCountry": "GH"
        }
      },
      {
        "@type": "EducationalOrganization",
        "name": "Azubi Africa"
      }
    ],
    "knowsAbout": [
      "AWS",
      "AWS SAM",
      "Amazon CloudFront",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon API Gateway",
      "Amazon ECS",
      "Amazon RDS",
      "Terraform",
      "Python",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "React",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Cloud Computing",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": PERSONAL_INFO.title,
      "occupationLocation": {
        "@type": "Country",
        "name": "Ghana"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default StructuredData;
