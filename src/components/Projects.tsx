import { motion } from 'framer-motion';
import {  Calendar, Users, Zap } from 'lucide-react';
// ExternalLink
// Github
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Retello | Mobile Phone Recommendation Platform",
      description: "AI-powered ChatGPT-style assistant for smartphone recommendations with detailed insights and comparisons",
      longDescription: "Developed a comprehensive mobile phone recommendation and assistant platform that combines a searchable smartphone database with an AI-powered Q&A interface. Users can search for any smartphone and get detailed insights through conversational interactions, including specifications, performance analysis, pricing information, comparisons, and personalized recommendations based on budget and requirements.",
      technologies: ["React.js", "Python","Fast API", "OpenAI API", "PostgreSQL", "Elasticsearch", "TypeScript"],
      features: [
        "ChatGPT-style conversational interface",
        "Comprehensive smartphone database search",
        "AI-powered recommendations and comparisons",
        "Budget-based filtering and suggestions",
        "Real-time specification analysis",
        "Performance benchmarking and insights",
        "Price tracking and alerts",
        "Smart buying decision assistance"
      ],
      impact: "Helps users make informed smartphone purchasing decisions with 95% user satisfaction rate",
      duration: "6 months",
      team: "3 developers"
    },
    {
      title: "Kidiaree.in - Kids' Activity Discovery Platform",
      description: "Comprehensive educational platform with multi-gateway payment system and advanced order management",
      longDescription: "Created Kidiaree.in (pronounced 'kid-diary'), a comprehensive platform born from a personal need as a working mother to simplify the discovery of quality learning and entertainment activities for children. Built with Laravel 8 backend and FastAPI microservice architecture, the platform features advanced multi-gateway payment processing, comprehensive order management, and custom zipcode API. Integrates multiple payment gateways including CCAvenue, Razorpay, and IndiPay package for maximum payment reliability and business redundancy.",
      technologies: ["Laravel 8", "PHP 8", "FastAPI", "Python", "MySQL", "CCAvenue", "Razorpay", "IndiPay", "PayUMoney", "EBS", "Citrus", "InstaMojo", "ZapakPay", "Paytm", "Blade Templates", "JavaScript", "Composer"],
      features: [
        "Multi-gateway payment integration (CCAvenue, Razorpay, IndiPay)",
        "Complete order lifecycle management with export functionality",
        "Custom Zipcode API with 19,238+ Indian pincodes database",
        "Pincode-based auto-fill with primary + fallback architecture",
        "Payment transaction logging and status tracking",
        "Automated payment callbacks and retry functionality",
        "Comprehensive admin dashboard with analytics",
        "IFSC verification and bank details validation",
        "Bulk order processing and CSV/Excel export",
        "Payment mode analytics and reporting",
        "Real-time address validation system",
        "Partner and user management portal",
        "Free order handling and manual payment processing",
        "Multi-environment configuration with secure processing",
        "Database optimization and API integration systems"
      ],
      impact: "Streamlined educational service payments with multi-gateway redundancy and automated UX improvements",
      duration: "12 months",
      team: "Solo developer"
    },{
      title: "UnTaboo - Safety & Sex Education Platform",
      description: "India's first online gamified safety & sex education platform for pre-teens and teenagers",
      longDescription: "Contributed to UnTaboo, a pioneering safety and sex education company with over a decade of experience in educating children and teens. UnTaboo is India's first online gamified safety and sex education platform, using multiple creative formats to make sensitive topics accessible and engaging. The platform covers body safety, puberty, sex education, healthy relationships, drug safety, online safety, and appropriate cyber behavior. Founded by Anju Kish, a certified sexuality educator and 4-time TEDx speaker, UnTaboo has directly impacted 100K+ children, parents, and educators.",
      technologies: ["React.js", "Node.js", "Gamification APIs", "Video Streaming", "Interactive Learning", "PostgreSQL", "Payment Gateway", "Analytics Dashboard"],
      features: [
        "Gamified learning modules for safety education",
        "Age-appropriate content delivery system",
        "Interactive video-based learning",
        "Parent and educator dashboard",
        "Progress tracking and assessment tools",
        "Multi-format educational content",
        "School partnership management system",
        "Workshop scheduling and management",
        "Real-time engagement analytics",
        "Mobile-responsive learning interface",
        "Content management for educators",
        "Certification and achievement systems"
      ],
      impact: "Directly touched 100K+ lives, pioneering conversations on sensitive topics with measurable behavior change",
      duration: "8 months",
      team: "4 developers"
    },
    {
      title: "Tabi – Marketing Management System",
      description: "Integrated multi-channel marketing platform with email templates, WhatsApp, Instagram, and analytics",
      longDescription: "Built a comprehensive marketing management system at OPS Combinator that integrates multiple communication channels including Email, WhatsApp, Instagram, and more. The platform features a custom drag-and-drop email template builder, media-enabled messaging capabilities, and advanced analytics with A/B testing support. Designed with scalability in mind to handle enterprise-level marketing campaigns.",
      technologies: ["Node.js", "TypeScript", "React.js", "Redux", "Tailwind CSS", "PostgreSQL", "Prisma"],
      features: [
        "Multi-channel marketing (Email, WhatsApp, Instagram)",
        "Drag-and-drop email template builder",
        "Rich HTML template creation and reuse",
        "Media-enabled personalized messaging",
        "Template rendering and file storage services",
        "Campaign scheduling and delivery at scale",
        "Analytics dashboard (opens, clicks, delivery rates)",
        "A/B testing support for campaign optimization"
      ],
      impact: "Improved marketing engagement rates and campaign flexibility with scalable template management",
      duration: "7 months",
      team: "5 developers"
    },
    {
      title: "New Horizons | Clinic Management System",
      description: "Comprehensive healthcare management platform with appointments, prescriptions, and Zoom integration",
      longDescription: "Designed and developed a full-featured clinic management system for OPS Combinator with appointment scheduling, dynamic form builder, payment processing, Zoom integration, and prescription management. Implemented role-based access control (RBAC) for secure permissions across doctors, administrators, and staff. The system significantly improved clinic operations and patient engagement.",
      technologies: ["Node.js", "TypeScript", "React.js", "Redux", "Tailwind CSS", "PostgreSQL", "Prisma", "Zoom API"],
      features: [
        "Appointment scheduling and management",
        "Dynamic form builder for patient data",
        "Integrated payment processing",
        "Zoom integration for telemedicine",
        "Prescription management system",
        "Role-based access control (RBAC)",
        "SMS notifications and email reminders",
        "Optimized logging APIs for performance"
      ],
      impact: "Reduced appointment load time by 35% and decreased missed appointments through automated reminders",
      duration: "6 months",
      team: "4 developers"
    },
    {
      title: "NRICH Learning Management System",
      description: "Comprehensive educational platform with student management, assessment tools, and financial integration",
      longDescription: "Developed a full-featured Learning Management System for NRICH Learning (practice-exams.nrichlearning.com.au) at OPS Combinator. Built with NestJS backend and React frontend, the platform includes comprehensive JWT authentication, multi-role user management, student enrollment, interactive exam systems, payment integration with Stripe, and automated reporting. Features NAPLAN test integration, teacher dashboards, parent portals, and complete financial management with Xero integration.",
      technologies: ["NestJS", "TypeScript", "React.js", "Tailwind CSS", "PostgreSQL", "JWT", "Stripe API", "Xero API", "Redux", "PDF Generation"],
      features: [
        "JWT-based authentication with multi-role access control",
        "Student enrollment and comprehensive exam management",
        "Interactive exam platform with question categorization",
        "NAPLAN test integration and specialized tracking",
        "Teacher dashboard with class schedules and attendance",
        "Parent portal for managing multiple student accounts",
        "Stripe payment processing and subscription management",
        "Invoice generation with PDF export and email notifications",
        "Xero accounting integration for financial synchronization",
        "Automated grade tracking and certificate generation",
        "Comprehensive attendance tracking with analytics",
        "Dynamic question management with rich text editing",
        "Teacher invoice generation and payment tracking",
        "Location-based management for multi-campus operations",
        "CRM system with lead tracking and contact management",
        "Email notification system with template-based messaging",
        "Responsive dashboard with interactive data tables",
        "Real-time analytics and comprehensive reporting",
        "File upload system for certificates and documents",
        "Database migration with version control and data integrity",
        "CSV/Excel export and import functionality",
        "Automated testing suite with unit and e2e tests"
      ],
      impact: "Streamlined educational operations with 95% automation in student management and 40% reduction in administrative overhead",
      duration: "1 Year",
      team: "3 developers"
    },
    {
      title: "Solitaire Planet – Diamond Retailer Platform",
      description: "E-commerce platform for diamond retailers with comprehensive inventory and customer management",
      longDescription: "Developed a sophisticated e-commerce platform for diamond retailers at Solitaire Planet (solitaireplanet.com) for OPS Combinator. Created comprehensive validation protocols, data filtration mechanisms, and cross-browser compatibility testing to ensure optimal shopping experience for luxury retail customers across all devices and browsers.",
      technologies: ["JavaScript", "React.js", "Node.js", "PostgreSQL", "Cross-browser Testing Tools"],
      features: [
        "Diamond inventory management system",
        "Advanced input validation protocols",
        "Data filtration and integrity systems",
        "Cross-browser compatibility testing",
        "Responsive e-commerce interface",
        "Customer relationship management",
        "Secure payment processing",
        "Performance optimization"
      ],
      impact: "Achieved 99% data integrity, 95% cross-browser compatibility, and reduced input errors by 25%",
      duration: "0.5 months",
      team: "Solo developers"
    },
    {
      title: "Pitchperfekt – Business Presentation Platform",
      description: "Interactive business presentation platform with advanced animations and team collaboration",
      longDescription: "Developed Pitchperfekt, a comprehensive business presentation platform at OPS Combinator. Built with focus on interactive presentations, advanced animations, and team collaboration features. Implemented cross-browser compatibility testing across 10+ devices and 5+ browsers to ensure consistent presentation delivery across all platforms.",
      technologies: ["TypeScript", "React.js", "Redux", "Animation Libraries"],
      features: [
        "Interactive business presentation builder",
        "Advanced animation and transition systems",
        "Real-time team collaboration tools",
        "Cross-browser compatibility testing",
        "Responsive presentation interface",
        "Template management system",
        "Export and sharing capabilities"
      ],
      impact: "Improved presentation engagement by 40% and reduced creation time by 30%",
      duration: "0.5 month",
      team: "Solo developer"
    },
    {
      title: "TRP System – Team & Productivity Management",
      description: "Comprehensive team productivity management platform with automation and workflow optimization",
      longDescription: "Built TRP (Team & Productivity) System at OPS Combinator, a complete solution for team management and productivity optimization. Features automated workflows, task management, and team collaboration tools designed to streamline business operations and improve team efficiency.",
      technologies: ["Node.js", "TypeScript", "React.js", "PostgreSQL", "Redis", "Task Automation"],
      features: [
        "Advanced team productivity tracking",
        "Automated workflow management",
        "Task assignment and progress monitoring",
        "Team collaboration and communication tools",
        "Performance analytics and reporting",
        "Integration with popular productivity tools",
        "Custom automation scripts"
      ],
      impact: "Increased team productivity by 35% and reduced manual task overhead by 50%",
      duration: "8 months",
      team: "5 developers"
    },
    {
      title: "Inlustro – Learning Management System",
      description: "Modern learning management platform with optimized navigation and engaging educational content",
      longDescription: "Created Inlustro, a cutting-edge learning management system at OPS Combinator. Focused on navigation optimization, user engagement, and educational content management. Implemented responsive design principles and user experience enhancements to create an intuitive learning environment.",
      technologies: ["React.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Video Streaming"],
      features: [
        "Optimized navigation and user experience",
        "Interactive educational content management",
        "Student progress tracking and analytics",
        "Multi-media content support",
        "Responsive design for all devices",
        "Assessment and quiz management",
        "Real-time collaboration features"
      ],
      impact: "Improved navigation efficiency by 45% and increased user engagement by 30%",
      duration: "4 months",
      team: "3 developers"
    },    {
      title: "Away Education - Study Abroad Consultancy Platform",
      description: "Comprehensive full-stack education consultancy platform with 98% visa success rate and 4000+ students placed globally",
      longDescription: "Developed Away Education, a comprehensive education consultancy platform helping students with abroad study guidance. Built with Next.js 14 and modern React ecosystem, the platform covers end-to-end services from career counseling and scholarship consultation to visa guidance and post-departure support. Features advanced state management with Redux, interactive workflows, and a scalable modular architecture that has helped achieve 98% visa success rate with 600+ global university affiliations.",
      technologies: ["Next.js 14", "React", "Redux Toolkit", "Tailwind CSS", "Material-UI", "Framer Motion", "React Hook Form", "Yup", "TypeScript"],
      features: [
        "ACES System - Multi-step application/assessment workflow",
        "Comprehensive career counseling and guidance system",
        "Scholarship consultation and discovery platform",
        "Visa guidance and application support",
        "SOP (Statement of Purpose) writing assistance",
        "Post-departure support and settlement guidance",
        "University search with global listings",
        "Course discovery and shortlisting functionality",
        "Country information and study destination insights",
        "Interactive maps for intuitive country selection",
        "Personalized student dashboard",
        "Application tracking for universities and courses",
        "Document management and upload system",
        "Live chat for real-time counselor consultation",
        "Video blogs and educational content",
        "Testimonials and success stories showcase",
        "Mobile-first responsive design",
        "Advanced state management with Redux Toolkit"
      ],
      impact: "Achieved 98% visa success rate, placed 4000+ students globally with 600+ university affiliations",
      duration: "10 months",
      team: "5 developers"
    },
    {
      title: "ML Data Preprocessing Pipeline",
      description: "Automated machine learning data preprocessing pipeline with scalable architecture",
      longDescription: "Created an automated machine learning data preprocessing pipeline designed to handle large-scale datasets. The system includes data validation, cleaning, transformation, and feature engineering capabilities. Built with scalability and efficiency in mind to support various ML workflows.",
      technologies: ["Python", "Pandas", "NumPy", "Apache Kafka", "Docker", "AWS S3", "Jenkins"],
      features: [
        "Automated data validation",
        "Advanced data cleaning algorithms",
        "Feature engineering automation",
        "Scalable pipeline architecture",
        "Real-time data processing",
        "Comprehensive data quality metrics"
      ],
      impact: "Reduced data preprocessing time by 70% and improved model accuracy by 15%",
      duration: "4 months",
      team: "4 developers"
    },
    {
      title: "CLINICA | Exam Proctor Tool - Online Examination Platform",
      description: "Comprehensive proctoring platform with secure exam administration, real-time monitoring, and automated grading",
      longDescription: "Built a comprehensive online examination and proctoring platform designed for secure, large-scale exam administration. The platform features subject management, dynamic question creation, time-tracking capabilities, and real-time monitoring tools. Implemented advanced security measures including protected routes, role-based access control, and exam monitoring systems to ensure academic integrity for both students and administrators.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT Authentication", "Role-based Access Control", "Real-time APIs"],
      features: [
        "Comprehensive subject and course management",
        "Dynamic question creation and question bank",
        "Time-tracking and exam duration management",
        "Protected routes and secure authentication",
        "Role-based access control (Students, Administrators, Proctors)",
        "Real-time exam monitoring and proctoring tools",
        "Automated test report generation",
        "Real-time results and grading system",
        "Large-scale exam oversight and administration",
        "Student progress tracking and analytics",
        "Anti-cheating measures and browser lockdown",
        "Exam scheduling and notification system",
        "Bulk exam management and export functionality"
      ],
      impact: "Streamlined exam administration for large-scale testing with enhanced security and automated grading",
      duration: "4 months",
      team: "Solo"
    },
    {
      title: "DayBreakPass - Hotel Amenities Platform",
      description: "Innovative platform allowing users to access hotel amenities through daily passes without booking rooms",
      longDescription: "Daybreakpass is an innovative platform allowing users to access hotel amenities through daily passes. Built with TypeScript, React, Tailwind CSS, Express.js, and MongoDB, the project provides a seamless experience for users to book and utilize various hotel services without booking a room. The platform reimagines luxury experiences by offering world-class spas, gourmet dining, and serene pools through exclusive day passes.",
      technologies: ["TypeScript", "React", "Tailwind CSS", "Express.js", "MongoDB", "Node.js"],
      features: [
        "Dynamic hotel amenity booking system",
        "Daily pass management and validation",
        "User-friendly booking interface",
        "Multi-hotel amenity management",
        "Real-time availability tracking",
        "Payment processing for day passes",
        "User profile and booking history",
        "Hotel partner dashboard",
        "Amenity filtering and search",
        "Mobile-responsive design",
        "Booking confirmation and notifications",
        "Rating and review system for amenities"
      ],
      impact: "Discover Your Perfect Daycation - Experience luxury reimagined with no overnight stay required",
      duration: "3 months",
      team: "Freelance project"
    },
    {
      title: "SpikeReach - Marketing Analytics Platform",
      description: "Comprehensive marketing analytics platform for tracking campaign performance and customer engagement",
      longDescription: "SpikeReach is a comprehensive marketing analytics platform designed to help businesses track campaign performance and analyze customer engagement. Built with modern web technologies, the platform provides detailed insights into marketing metrics, customer behavior, and campaign effectiveness. Features advanced analytics dashboards, real-time reporting, and integration with popular marketing tools.",
      technologies: ["TypeScript", "React", "Express.js", "MongoDB", "Analytics APIs", "Chart.js", "Tailwind CSS"],
      features: [
        "Advanced marketing analytics dashboard",
        "Real-time campaign performance tracking",
        "Customer engagement metrics",
        "Multi-channel campaign management",
        "ROI calculation and reporting",
        "A/B testing analytics",
        "Custom report generation",
        "Marketing funnel analysis",
        "Lead tracking and conversion metrics",
        "Integration with popular marketing tools",
        "Automated reporting and notifications",
        "Data visualization and insights"
      ],
      impact: "Enhanced marketing decision-making with comprehensive analytics and real-time insights",
      duration: "4 months",
      team: "Freelance project"
    },
    {
      title: "MSKEndocare - Doctor's Clinic Website",
      description: "Professional healthcare website with appointment scheduling and doctor profiles for enhanced patient experience",
      longDescription: "Developed Endocare, a comprehensive doctor's clinic website using HTML, CSS, and JavaScript. The website provides patients with easy access to clinic information, appointment scheduling, and detailed doctor profiles. Focused on building a clean, professional, and responsive interface that ensures seamless user experience across all devices. The platform streamlines patient-clinic interactions and improves healthcare accessibility.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Bootstrap"],
      features: [
        "Online appointment scheduling system",
        "Comprehensive doctor profiles and specializations",
        "Clinic information and services overview",
        "Contact forms and patient inquiries",
        "Responsive design for all devices",
        "Clean and professional healthcare interface",
        "Patient testimonials and reviews",
        "Clinic location and contact details",
        "Service descriptions and medical procedures",
        "Healthcare blog and patient resources",
        "Mobile-optimized booking interface",
        "Accessibility features for all users"
      ],
      impact: "Improved patient experience with easy access to clinic services and streamlined appointment booking",
      duration: "2 months",
      team: "Freelance project"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="text-center mb-12 sm:mb-16" variants={cardVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Innovative solutions that solve real-world problems and drive business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-2 pr-2">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" /> */}
                    </motion.div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                    <span className="line-clamp-2">{project.impact}</span>
                  </div>

                  {selectedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                        {project.longDescription}
                      </p>
                      
                      <div className="mb-3 sm:mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-md text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <motion.button
                          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs sm:text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          Live Demo
                        </motion.button>
                        <motion.button
                          className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs sm:text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          Source Code
                        </motion.button>
                      </div> */}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;