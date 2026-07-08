import React, { useState, memo } from 'react'
import { FaExternalLinkAlt, FaGithub, FaStickyNote, FaBook, FaMicrophone, FaPlane, FaFileAlt, FaCloud, FaCubes, FaPoll, FaGraduationCap } from 'react-icons/fa'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { trackProjectView, trackSocialClick } from '../utils/analytics'
import aiResumeAnalyzerImage from "../assets/images/portfolio/ai-resume-analyzer.png"
import notesAppImage from "../assets/images/portfolio/notes-app.png"
import booksAppImage from "../assets/images/portfolio/books-app.png"
import audioHomeImage from "../assets/images/portfolio/audio-home.png"
import audioLiveImage from "../assets/images/portfolio/audio-live.png"
import tourPlannerImage from "../assets/images/portfolio/tour-planner.png"
import pulsevoteImage from "../assets/images/portfolio/pulsevote.jpg"
import terraformedImage from "../assets/images/portfolio/terraformed-webpage.png"
import whalestackImage from "../assets/images/portfolio/whalestack.png"

const Portfolio = memo(function Portfolio() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [activeFilter, setActiveFilter] = useState('All');

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const portfolios = [
    {
      id: 1,
      src: null,
      title: "Student Study Planner — AWS Capstone Project",
      description: "An interactive, responsive web application deployed on AWS using Route 53, CloudFront CDN, ALB, EC2, S3, ACM, and GitHub Actions CI/CD. Architected with an Auto Scaling Group, restricted security groups, OAC, and HTTPS enforcement.",
      link1: "",
      link2: "https://github.com/GeekKwame/aws-capstone-project",
      tags: ["AWS", "CloudFront", "ALB", "Route 53", "Auto Scaling", "EC2", "S3", "ACM", "GitHub Actions", "CI/CD"],
      category: "Cloud / IaC",
      icon: FaGraduationCap,
      iconText: "Student Study Planner Architecture"
    },
    {
      id: 2,
      src: pulsevoteImage,
      title: "PulseVote — Live Polling App",
      description: "A real-time polling web application deployed on AWS using CloudFront, ALB, EC2, S3, ACM, and GitHub Actions CI/CD. Architected with an Auto Scaling Group, ALB listener redirects, restricted security groups, and CloudWatch alerting.",
      link1: "",
      link2: "https://github.com/GeekKwame/pulsevote",
      tags: ["AWS", "CloudFront", "ALB", "EC2", "S3", "ACM", "GitHub Actions", "CI/CD", "Nginx", "CloudWatch", "Auto Scaling"],
      category: "Cloud / IaC",
      icon: FaPoll,
      iconText: "PulseVote Architecture Diagram"
    },
    {
      id: 3,
      src: terraformedImage,
      title: "Terraformed — Secure Static-Site Infrastructure",
      description: "Built a zero-secret CI/CD pipeline using AWS OIDC and GitHub Actions, replacing long-lived access keys with short-lived STS session credentials on every deployment. Locked down the S3 origin with CloudFront Origin Access Control (OAC), blocking all public access while serving global HTTPS traffic. Configured remote Terraform state with S3 versioning and DynamoDB locking, preventing concurrent-run state corruption.",
      link1: "",
      link2: "https://github.com/GeekKwame/terraf6r0ed--r61ect",
      tags: ["Terraform", "AWS S3", "CloudFront", "OAC", "IAM/OIDC", "GitHub Actions", "DynamoDB", "IaC"],
      category: "Cloud / IaC",
      icon: FaCloud,
      iconText: "Terraformed Infrastructure Screenshot"
    },
    {
      id: 4,
      src: null,
      title: "Serverless API Platform — Terraform + Lambda",
      description: "Provisioned a fully serverless API Gateway → Lambda → S3 architecture end-to-end in Terraform, removing server management overhead entirely. Enforced least-privilege IAM policies scoped to specific S3 actions and API Gateway source ARNs. Automated Lambda packaging and idempotent redeployment using archive_file and source_code_hash, ensuring changes are detected and applied automatically.",
      link1: "",
      link2: "https://github.com/GeekKwame",
      tags: ["Terraform", "AWS Lambda", "API Gateway", "S3", "IAM", "DynamoDB", "Python", "Serverless"],
      category: "Cloud / IaC",
      icon: FaCubes,
      iconText: "Serverless API Platform Screenshot"
    },
    {
      id: 5,
      src: aiResumeAnalyzerImage,
      title: "AI Resume Analyzer",
      description: "An intelligent resume analysis tool that provides ATS (Applicant Tracking System) scores and AI-powered improvement suggestions. Features include drag-and-drop resume upload, PDF processing, comprehensive feedback with category-specific scores (Tone & Style, Content, Structure, Skills), ATS compatibility tips, and resume history dashboard. Built with React Router, TypeScript, and Puter.js integration.",
      link1: "",
      link2: "https://github.com/GeekKwame/ai-resume-analyzer",
      tags: ["React Router", "TypeScript", "Tailwind CSS v4", "Zustand", "Puter.js", "PDF.js", "AI Analysis", "ATS Scoring"],
      category: "AI / ML",
      icon: FaFileAlt,
      iconText: "AI Resume Analyzer Screenshot"
    },
    {
      id: 6,
      src: notesAppImage,
      title: "Notes App",
      description: "A full-stack notes application built with Django REST Framework and React. Features include creating, reading, updating, and deleting notes with a clean, intuitive dark-themed interface. Includes real-time updates, auto-save functionality, and responsive design.",
      link1: "",
      link2: "https://github.com/GeekKwame/Notes-App",
      tags: ["React", "Django", "REST API", "Python", "Full Stack"],
      category: "Full Stack",
      icon: FaStickyNote,
      iconText: "Notes App Screenshot"
    },
    {
      id: 7,
      src: booksAppImage,
      title: "Book Website",
      description: "A full-stack book tracker featuring a modern dark UI with a books-themed background. Built with React + Vite frontend and Django REST Framework backend. Supports full CRUD operations: create, list, edit, and delete books with glassmorphism-inspired design and animated accents.",
      link1: "",
      link2: "https://github.com/GeekKwame/books-website",
      tags: ["React", "Vite", "Django", "Django REST Framework", "Python", "Full Stack", "CORS"],
      category: "Full Stack",
      icon: FaBook,
      iconText: "Book Website Screenshot"
    },
    {
      id: 8,
      src: whalestackImage,
      title: "WhaleStack — Multi-Container Web Application",
      description: "Containerized a multi-service application with Docker Compose, orchestrating an independently networked Flask REST API and an Nginx-served static frontend. Designed and exposed REST endpoints for service info, JSON messaging, and health checks, enabling reliable frontend-backend communication across container boundaries.",
      link1: "",
      link2: "https://github.com/GeekKwame/whalestack",
      tags: ["Docker", "Docker Compose", "Flask", "Python", "Nginx", "REST API", "Containers"],
      category: "Cloud / IaC",
      icon: FaCubes,
      iconText: "WhaleStack Multi-Container App Screenshot"
    },
    {
      id: 9,
      src: [audioHomeImage, audioLiveImage],
      title: "Live Audio Room",
      description: "A modern, real-time audio room application built with React, TypeScript, and Stream.io Video SDK. Create and join live audio conversations similar to Clubhouse or Twitter Spaces. Features include participant management, permission system, live streaming, user authentication, and session persistence with a beautiful glassmorphism UI.",
      link1: "",
      link2: "https://github.com/GeekKwame/live-audio-room",
      tags: ["React", "TypeScript", "Stream.io", "Node.js", "Express", "Real-time", "WebRTC", "Full Stack"],
      category: "Real-time",
      icon: FaMicrophone,
      iconText: "Live Audio Room Screenshot"
    },
    {
      id: 10,
      src: tourPlannerImage,
      title: "The Tourist's Planner",
      description: "A full-stack AI travel app with JWT authentication, role-based access control, Stripe payments, and a Supabase (PostgreSQL) backend. Reduced data latency by 35% vs. a REST-only approach using Supabase real-time subscriptions; architected for future AWS migration. Features AI trip planning, tourist and admin portals, and booking management.",
      link1: "",
      link2: "https://github.com/GeekKwame/travel-planner",
      tags: ["React Router v7", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Gemini AI", "JWT", "RBAC"],
      category: "Full Stack",
      icon: FaPlane,
      iconText: "The Tourist's Planner Screenshot"
    }
  ];

  return (
    <div name="portfolio" ref={sectionRef} className='bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 dark:from-stone-900 dark:to-gray-800 w-full min-h-screen py-12 md:py-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className={`mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
            Portfolio
          </p>
          <p className='py-2 md:py-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg'>Explore my projects and see how I bring ideas to life</p>
          <div className='w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full'></div>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap gap-2 sm:gap-3 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {['All', 'Cloud / IaC', 'Full Stack', 'AI / ML', 'Real-time'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer border ${activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-white dark:bg-gray-800/50 text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-600/50 hover:text-cyan-600 dark:hover:text-white hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-gray-700/50 shadow-sm dark:shadow-none'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'>
          {portfolios.filter(p => activeFilter === 'All' || p.category === activeFilter).map(({ id, src, title, description, link1, link2, tags, icon: Icon = FaStickyNote, iconText }, index) => {
            const fallbackIconText = iconText || `${title} Screenshot`;
            return (
              <div
                key={id}
                className={`group relative shadow-lg dark:shadow-xl shadow-gray-200 dark:shadow-gray-900/50 rounded-xl overflow-hidden bg-white/90 dark:bg-gradient-to-br dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-400/10 dark:hover:shadow-cyan-500/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image Area */}
                <div className='relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900'>
                  {imageErrors[id] || !src ? (
                    <div className='flex flex-col items-center justify-center p-8 min-h-[300px] md:min-h-[400px]'>
                      <Icon className='text-6xl md:text-8xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300' />
                      <p className='text-gray-400 text-sm'>{fallbackIconText}</p>
                    </div>
                  ) : Array.isArray(src) ? (
                    <div className='relative w-full bg-gray-900 p-2 md:p-4'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                        {src.map((imgSrc, imgIndex) => (
                          <div key={imgIndex} className='relative overflow-hidden rounded-lg'>
                            {imageLoading[`${id}-${imgIndex}`] !== false && (
                              <div className='absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg' />
                            )}
                            <img
                              src={imgSrc}
                              alt={`${title} - Screenshot ${imgIndex + 1}`}
                              className='w-full h-auto object-contain rounded-lg shadow-2xl group-hover:scale-[1.02] duration-500 transition-transform relative'
                              onError={() => handleImageError(id)}
                              onLoad={() => setImageLoading(prev => ({ ...prev, [`${id}-${imgIndex}`]: false }))}
                              loading="lazy"
                              decoding="async"
                              style={{ maxHeight: '400px' }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className='relative w-full bg-gray-900 p-2 md:p-4'>
                      {imageLoading[id] !== false && (
                        <div className='absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer bg-[length:200%_100%] rounded-lg' />
                      )}
                      <img
                        src={src}
                        alt={`${title} - Project Screenshot`}
                        className='w-full h-auto object-contain rounded-lg shadow-2xl group-hover:scale-[1.02] duration-500 transition-transform relative'
                        onError={() => handleImageError(id)}
                        onLoad={() => setImageLoading(prev => ({ ...prev, [id]: false }))}
                        loading="lazy"
                        decoding="async"
                        style={{ maxHeight: '500px' }}
                      />
                    </div>
                  )}
                  <div className='absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                </div>

                <div className='p-4 sm:p-6'>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300'>{title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300'>{description}</p>

                  <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4'>
                    {tags.map((tag, i) => (
                      <span key={i} className='px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs sm:text-xs rounded-md border border-cyan-500/30 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/30 group-hover:scale-105 transition-all duration-300'>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4'>
                    {link1 && (
                      <a
                        href={link1}
                        target="_blank"
                        rel="noreferrer"
                        className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 active:from-blue-600 active:to-cyan-600 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-cyan-500/50 touch-manipulation select-none min-h-[44px] group-hover:animate-pulse'
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                    {link2 && (
                      <a
                        href={link2}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => {
                          trackProjectView(title);
                          trackSocialClick('github');
                        }}
                        className='flex items-center justify-center gap-2 px-4 py-3 sm:py-2 bg-gray-700 hover:bg-gray-600 active:bg-gray-800 rounded-lg text-white font-semibold transition-all duration-300 hover:scale-105 active:scale-95 border border-gray-600 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 touch-manipulation select-none min-h-[44px]'
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
})

export default Portfolio
