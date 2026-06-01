import React from 'react';
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
      "https://github.com/GeekKwame"
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
      "Artificial Intelligence",
      "Cloud Computing",
      "AWS",
      "Python",
      "SQL",
      "Machine Learning",
      "React",
      "Django",
      "JavaScript",
      "TypeScript",
      "Full Stack Development",
      "IT Support",
      "REST APIs",
      "Web Development"
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
