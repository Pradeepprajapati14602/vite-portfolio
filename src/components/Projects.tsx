import { motion } from 'framer-motion';
import {  Calendar, Users, Zap } from 'lucide-react';
// ExternalLink
// Github
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Mobile Phone Recommendation Platform",
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
      team: "Solo project"
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
      team: "Solo"
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
      duration: "8 months",
      team: "5 developers"
    },
    {
      title: "Clinic Management System",
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
      title: "NRICH – Online Practice Exams Platform",
      description: "Educational platform for online practice exams with robust data validation and processing",
      longDescription: "Developed an online practice exams platform for NRICH Learning (practice-exams.nrichlearning.com.au) at OPS Combinator. The platform features robust data validation systems, advanced filtration mechanisms, and comprehensive validation audits to ensure high-quality educational content delivery.",
      technologies: ["Node.js", "TypeScript", "React.js", "Redux", "PostgreSQL", "Data Validation APIs"],
      features: [
        "Online practice exam interface",
        "Robust data validation systems",
        "Advanced data filtration mechanisms",
        "Validation audit protocols",
        "Student progress tracking",
        "Performance analytics dashboard",
        "Automated grading systems",
        "Content management for educators"
      ],
      impact: "Reduced data entry errors by 30% and improved processing speed by 20% with 95% data accuracy",
      duration: "6 months",
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
      duration: "1.5 months",
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
      duration: "1 month",
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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Innovative solutions that solve real-world problems and drive business value
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" /> */}
                    </motion.div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
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

                  <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium">
                    <Zap className="w-4 h-4 mr-1" />
                    <span className="line-clamp-1">{project.impact}</span>
                  </div>

                  {selectedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                    >
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.longDescription}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
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

                      {/* <div className="flex gap-3">
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.button>
                        <motion.button
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
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