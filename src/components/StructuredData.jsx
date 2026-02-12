import React from 'react';

function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edmund Blessing",
    "alternateName": "Edmund Blessing Kwame Dogbe",
    "jobTitle": "Full Stack Developer",
    "description": "Full Stack Developer specializing in React, Django, and Python. Building modern, scalable web applications.",
    "url": "https://github.com/GeekKwame",
    "sameAs": [
      "https://www.linkedin.com/in/edmund-blessing/",
      "https://github.com/GeekKwame"
    ],
    "email": "dogbeblessingkwame@gmail.com",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kwame Nkrumah University of Science and Technology",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kumasi",
        "addressCountry": "GH"
      }
    },
    "knowsAbout": [
      "React",
      "Django",
      "Python",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "REST APIs",
      "Full Stack Development",
      "Web Development",
      "Software Engineering",
      "AI Integration",
      "Machine Learning"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
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

